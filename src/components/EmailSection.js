import React from "react";
import "./MyComponent.css";

const EmailSection = ({
  email,
  emailError,
  handleEmailChange,
  handleClick,
}) => {
  const paperPlaneUrl = "/images/paper-plane.png";

  return (
    <>
      <div className="four5"></div>
      <div className="four6">Subscribe to our newsletter</div>
      <div
        className={`four7 ${
          emailError ? "error-border" : email ? "valid-border" : ""
        }`}
      ></div>
      <div className="four8">
        <input
          className={`emailInput ${emailError ? "error" : ""}`}
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
        />
        {emailError && (
          <div className="errorMessage">Please enter a valid email!</div>
        )}
      </div>
      <button
        className="four9"
        onClick={handleClick}
        style={{
          backgroundImage: `url(${paperPlaneUrl})`,
        }}
      ></button>
    </>
  );
};

export default EmailSection;
