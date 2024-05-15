import React, { useState } from 'react';
import Signup from './Signup';
import backgroundimage from "./Images-Logos/backgroundimage.jpeg";

const Login = ({setIsLogged}) => {
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
      if (data.message === "Username Found") {
        localStorage.setItem('username',formData.Username);
        localStorage.setItem('isLogged','true');
        window.location.href = '/';
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
                  <input type="text" id="username" name='Username' value={formData.Username} onChange={handleChange} required/>
                </div>
                <div className="form-field">
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" name='Password' value={formData.Password} onChange={handleChange} required/>
                </div>
                <button type="submit" className="blue-button">Sign in</button>
              </div>
            </div>
          
            <div className='one-third' style={{ backgroundImage: `url(${backgroundimage})`, backgroundRepeat: 'no-repeat' }}>
            <div >
            
              <div className="content">
                <h2 style={{color:'black'}}>New Here</h2>
                <p style={{color:'black'}}>Sign Up to discover new job Opportunities</p>
                <div className="button-container">
                  <button style={{backgroundColor:'black'}} onClick={handleToggle}>Sign up</button>
                </div>
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
