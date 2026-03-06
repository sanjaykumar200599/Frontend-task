function StepIndicator({ step }) {

  const steps = [
    "Personal Info",
    "Account Details",
    "Review & Submit"
  ];

  return (
    <div className="step-container">

      {steps.map((label, index) => {

        const stepNumber = index + 1;
        let className = "step";

        if (step > stepNumber) className += " completed";
        else if (step === stepNumber) className += " active";

        return (
          <div key={index} className="step-wrapper">

            <div className={className}>
              {step > stepNumber ? "✓" : stepNumber}
            </div>

            <span className="step-label">
              {label}
            </span>

          </div>
        );
      })}

    </div>
  );
}

export default StepIndicator;