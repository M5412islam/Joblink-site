import React, { useState } from 'react';
import Signup from './Signup';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <form action='/' method='post'>
        {isLogin ? (
          <div className="container">
            <div className="two-thirds">
              <div className="form-container">
                <h2>Login to your account</h2>
                <div className="form-field">
                  <label htmlFor="username">Username:</label>
                  <input type="text" id="username" name='user' />
                </div>
                <div className="form-field">
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" name='pass' />
                </div>
                <button type="submit" className="blue-button">Sign in</button>
              </div>
            </div>
            <div className="one-third">
              <div className="content">
                <h2>New Here</h2>
                <p>Sign Up to discover new job Opportunities</p>
                <div className="button-container">
                  <button onClick={handleToggle}>Sign up</button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Signup/>
        )}
      </form>
    </div>
  );
  
};

export default Login;
