import express from "express";
import cors from "cors";
import { google } from "googleapis";
import dotenv from "dotenv";

dotenv.config(); // Loads variables from .env

const app = express();
app.use(cors());
app.use(express.json());

const auth = new google.auth.GoogleAuth({
  keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

app.post("/register-farmer", async (req, res) => {
  try {
    const { name, mobile, address, farmingType } = req.body;

    // Validate input
    if (!name || !mobile || !address || !farmingType) {
      return res.status(400).json({ message: "All fields are required." });
    }
    if (!/^\d{10}$/.test(mobile)) {
      return res.status(400).json({ message: "Mobile number must be 10 digits." });
    }

    // Check for duplicate mobile
    const sheetData = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: `${process.env.SHEET_NAME}!B:B`,
    });

    const existingMobiles = sheetData.data.values ? sheetData.data.values.flat() : [];
    if (existingMobiles.includes(mobile)) {
      return res.status(400).json({ message: "Mobile number already registered." });
    }

    // Append new entry
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: `${process.env.SHEET_NAME}!A:E`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[name, mobile, address, farmingType, new Date().toLocaleString()]],
      },
    });

    return res.status(200).json({ message: "✅ Your registration was successful!" });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "❌ Something went wrong." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
