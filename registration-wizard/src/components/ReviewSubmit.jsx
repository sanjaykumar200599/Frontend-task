import { useEffect } from "react";

function ReviewSubmit({ formData, prevStep, handleSubmit, status }) {
    useEffect(()=>{
      if(status==="success"){
        console.log("User registered");
      }
    },[status]);

  if(status==="submitting"){
    return(
      <div className="submit-box">
        <h3>Submitting...</h3>
        <p>Please wait while we create your account.</p>
      </div>
    );
  }

  if(status==="success"){
    return(
      <div className="success-box">
        <h3>Registration Successful!</h3>
        <p>Welcome, <b>{formData.name}</b>! Your account has been created.</p>
      </div>
    );
  }

  return(
    <div>
      <h3>Step 3 – Review & Submit</h3>
      <p>Please review your information before submitting.</p>
      <div className="review-card">

        <div className="review-row">
          <span>Full Name</span>
          <b>{formData.name}</b>
        </div>

        <div className="review-row">
          <span>Email</span>
          <b>{formData.email}</b>
        </div>

        <div className="review-row">
          <span>Username</span>
          <b>{formData.username}</b>
        </div>

        <div className="review-row">
          <span>Password</span>
          <b>********</b>
        </div>

      </div>

      <div className="button-group">

        <button className="back-btn" onClick={prevStep}>
          ← Back & Edit
        </button>

        <button className="submit-btn" onClick={handleSubmit}>
          Submit ✓
        </button>

      </div>

    </div>

  );
}

export default ReviewSubmit;