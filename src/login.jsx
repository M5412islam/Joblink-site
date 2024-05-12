import React, { useState } from 'react';
import Signup from './Signup';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    Username: '',
    Password: ''
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      alert(data.message);
      if(data.message === "Username Found") {
        window.location.href = '/Homepage'; 
      } else {
        setMessage('Incorrect Username or password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>

      
      <form onSubmit={handleSubmit}>

        {isLogin ? (
          
          <div className="container">
            <div className="two-thirds">
              <div className="form-container">
              <p className='message'>{message}</p>
                <h2 className='line'>Login to your account</h2>
                
                <div className="form-field">
                  <label htmlFor="username">Username:</label>
                  <input type="text" id="username" name='Username' value={formData.Username} onChange={handleChange} />
                </div>
                <div className="form-field">
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" name='Password' value={formData.Password} onChange={handleChange} />
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
        ) : null}
      </form>
      {!isLogin && <Signup />}
    </div>
  );
};

export default Login;
