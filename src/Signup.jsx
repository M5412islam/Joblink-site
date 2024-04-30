// Signup.jsx
import React from 'react';

const Signup = ({ onLoginClick }) => {
  const handleToggle = () => {
    // Handle navigation to login page
  };

  return (
    <div className="container">
      <div className="two-thirds">
        <div className="form-container">
          <h2>Create your account</h2>
          <form>
            <div className="form-field">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" />
            </div>
            <div className="form-field">
              <label htmlFor="firstname">First Name:</label>
              <input type="text" id="firstname" />
            </div>
            <div className="form-field">
              <label htmlFor="lastname">Last Name:</label>
              <input type="text" id="lastname" />
            </div>
            <div className="form-field">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" />
            </div>
            <button type="submit" className="blue-button">Sign up</button>
          </form>
        </div>
      </div>
      <div className="one-third">
        <div className="content">
          <h2>Already have an account?</h2>
          <p>Get back to your profile</p>
          <div className="button-container">
            <button onClick={handleToggle}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
