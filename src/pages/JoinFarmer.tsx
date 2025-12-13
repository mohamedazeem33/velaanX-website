import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const JoinFarmer = () => {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    address: "",
    farmingType: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" }); // type: success | error
  const [countdown, setCountdown] = useState(3);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submitForm = async () => {
    setMessage({ text: "", type: "" });
    setCountdown(3);

    if (!form.name || !form.mobile || !form.address || !form.farmingType) {
      setMessage({ text: "Please fill all fields.", type: "error" });
      return;
    }

    if (form.mobile.length !== 10) {
      setMessage({ text: "Enter a valid 10-digit mobile number.", type: "error" });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/register-farmer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage({ text: data.message || "❌ Something went wrong.", type: "error" });
      } else {
        setMessage({ text: "✅ Your registration was successful. Our Team will contact you soon!", type: "success" });
        
        setForm({
          name: "",
          mobile: "",
          address: "",
          farmingType: "",
        });

        // Countdown redirect
        const countdownInterval = setInterval(() => {
          setCountdown((prev) => {
            if (prev <= 1) {
              clearInterval(countdownInterval);
              window.location.href = "/"; // Redirect to home
              return 0;
            }
            return prev - 1;
          });
        }, 1700);
      }
    } catch (err) {
      console.error(err);
      setMessage({ text: "❌ Something went wrong.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-10 max-w-xl bg-white shadow-md rounded-xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-700">Become a VelaanX Partner</h1>

      <div className="space-y-4">
        <Input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />

        <Input
          name="mobile"
          placeholder="Mobile Number"
          value={form.mobile}
          onChange={handleChange}
        />

        <Input
          name="address"
          placeholder="Full Address"
          value={form.address}
          onChange={handleChange}
        />

        <Label className="font-medium">Farming Type</Label>
        <RadioGroup
          onValueChange={(val) => setForm({ ...form, farmingType: val })}
        >
          <div className="flex items-center gap-2">
            <RadioGroupItem value="Land Farm" id="landfarm" />
            <Label htmlFor="landfarm">Land Farm</Label>
          </div>

          <div className="flex items-center gap-2">
            <RadioGroupItem value="Terrace Garden" id="terrace" />
            <Label htmlFor="terrace">Terrace Garden</Label>
          </div>

          <div className="flex items-center gap-2">
            <RadioGroupItem value="Small Farm" id="smallfarm" />
            <Label htmlFor="smallfarm">Small Farm</Label>
          </div>
        </RadioGroup>

        <Button
          className="w-full mt-4"
          onClick={submitForm}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Registration"}
        </Button>

        {message.text && (
          <div
            className={`mt-4 p-3 rounded-lg font-medium text-center ${
              message.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}
          >
            <p>{message.text}</p>
            {message.type === "success" && <p>Redirecting to home page in {countdown}...</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default JoinFarmer;
