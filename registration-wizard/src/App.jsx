import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import AccountDetails from "./components/AccountDetails";
import ReviewSubmit from "./components/ReviewSubmit";
import StepIndicator from "./components/StepIndicator";
import "./index.css";

function App() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: ""
  });

  const [status, setStatus] = useState("");

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 2000);
  };

  return (
    <div className="container">

      <h2>Create Account</h2>

      {/* Step Progress Indicator */}
      <StepIndicator step={step} />

      {step === 1 && (
        <PersonalInfo
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
        />
      )}

      {step === 2 && (
        <AccountDetails
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

      {step === 3 && (
        <ReviewSubmit
          formData={formData}
          prevStep={prevStep}
          handleSubmit={handleSubmit}
          status={status}
        />
      )}

    </div>
  );
}

export default App;