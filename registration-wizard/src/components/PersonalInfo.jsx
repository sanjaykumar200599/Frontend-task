import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

function PersonalInfo({ formData, handleChange, nextStep }) {
    const [error, setError] = useState("");
    const handleNext = () => {

    if (!formData.name || !formData.email) {
      setError("All fields are required");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Enter a valid email");
      return;
    }

    setError("");
    nextStep();
  };

  return (
    <div className="form-section">
      <h3>Step 1 – Personal Information</h3>

      <input
        type="text"
        name="name"
        placeholder="Enter your full name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
      />

      <ErrorMessage message={error} />

      <div className="button-group">

        <button className="next-btn" onClick={handleNext}>
          Next →
        </button>

      </div>

    </div>
  );
}

export default PersonalInfo;