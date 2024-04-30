// App.jsx
import React, { useState } from 'react';


function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(prevState => !prevState);
  };

  return (
    <div className="container">
      <div className="two-thirds">
        <div className="form-container">
          <h2>Login to your account</h2>
          <form>
            <div className="form-field">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" />
            </div>
            <div className="form-field">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" />
            </div>
            <button type="submit" className="blue-button">Sign in</button>
          </form>
        </div>
      </div>
      <div className="one-third">
        <div className="content">
          {isLogin ? (
            <>
              <h2>New Here</h2>
              <p>Sign Up to discover new job Opportunities</p>
              <div className="button-container">
                <button onClick={handleToggle}>Sign up</button>
              </div>
            </>
          ) : (
            <>
              <h2>Welcome Back!</h2>
              <p>Login to discover new job Opportunities</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
