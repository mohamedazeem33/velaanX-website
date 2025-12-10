import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const JoinFarmer = () => {
  const [step, setStep] = useState(1);
  const [otpSent, setOtpSent] = useState(false);
  const [enteredOtp, setEnteredOtp] = useState("");
  const [verified, setVerified] = useState(false);

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    address: "",
    farmingType: "",
    aadhaar: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const sendOtp = () => {
    if (form.aadhaar.length !== 12) {
      alert("Enter valid 12-digit Aadhaar Number");
      return;
    }
    setOtpSent(true);
    alert("OTP sent to Aadhaar registered mobile number!");
  };

  const verifyOtp = () => {
    if (enteredOtp === "1234") {
      setVerified(true);
      alert("Aadhaar Verified Successfully!");
    } else {
      alert("Wrong OTP");
    }
  };

  const submitForm = () => {
    alert("Farmer ID created successfully!");
    console.log("Farmer Data:", form);
  };

  return (
    <div className="container mx-auto px-4 py-10 max-w-xl">
      <h1 className="text-3xl font-bold mb-6">Become a VelaanX Farmer</h1>

      {/* STEP 1 — DETAILS */}
      {step === 1 && (
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
              <RadioGroupItem value="land-farm" id="landfarm" />
              <Label htmlFor="landfarm">Land Farm</Label>
            </div>

            <div className="flex items-center gap-2">
              <RadioGroupItem value="terrace-garden" id="terrace" />
              <Label htmlFor="terrace">Terrace Garden</Label>
            </div>

            <div className="flex items-center gap-2">
              <RadioGroupItem value="small-farm" id="smallfarm" />
              <Label htmlFor="smallfarm">Small Farm</Label>
            </div>
          </RadioGroup>

          <Input
            name="aadhaar"
            placeholder="Aadhaar Number"
            value={form.aadhaar}
            onChange={handleChange}
          />

          <Button className="w-full mt-4" onClick={() => setStep(2)}>
            Next
          </Button>
        </div>
      )}

      {/* STEP 2 — OTP */}
      {step === 2 && (
        <div className="space-y-4">
          {!otpSent && (
            <Button className="w-full" onClick={sendOtp}>
              Send OTP
            </Button>
          )}

          {otpSent && !verified && (
            <>
              <Input
                placeholder="Enter OTP"
                value={enteredOtp}
                onChange={(e) => setEnteredOtp(e.target.value)}
              />

              <Button className="w-full" onClick={verifyOtp}>
                Verify OTP
              </Button>
            </>
          )}

          {verified && (
            <Button className="w-full bg-green-600" onClick={submitForm}>
              Submit Registration
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default JoinFarmer;
