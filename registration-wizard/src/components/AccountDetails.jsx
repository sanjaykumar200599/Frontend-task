import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

function AccountDetails({ formData, handleChange, nextStep, prevStep }) {
    const [error,setError] = useState("");
    const handleNext = () => {

    if(!formData.username || !formData.password){
      setError("All fields required");
      return;
    }

    if(formData.password.length < 6){
      setError("Password must be at least 6 characters");
      return;
    }

    setError("");
    nextStep();
  };

  return(
    <div>
      <h3>Step 2 – Account Details</h3>
      <input
        type="text"
        name="username"
        placeholder="Choose a username"
        value={formData.username}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Create a password"
        value={formData.password}
        onChange={handleChange}
      />

      <ErrorMessage message={error}/>

      <div className="button-group">
        <button className="back-btn" onClick={prevStep}>
          ← Back
        </button>
        <button className="next-btn" onClick={handleNext}>
          Next →
        </button>

      </div>

    </div>
  );
}

export default AccountDetails;