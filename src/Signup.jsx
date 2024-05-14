import React, { useState } from 'react';
import Login from "./login";
import backgroundimage from "./Images-Logos/backgroundimage.jpeg";

const Signup = () => {
  const [formData, setFormData] = useState({
    first: '',
    last: '',
    username: '', // corrected to lowercase
    email: '', // corrected to lowercase
    password: '' // corrected to lowercase
  });

  const [isSignup, setIsSignup] = useState(true);
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/Signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (data.message === "User created successfully") {
        window.location.href = '/login';
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error('Error signing up:', error);
      setMessage('An error occurred. Please try again later.');
    }
  };

  const handleToggle = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {isSignup ? (
          <div className="container">
            <div className="two-thirds">
              <div className="form-container">
                <p className='message'>{message}</p>
                <h2 className='line'>Create your account</h2>
                <div className="form-field">
                  <label htmlFor="firstname">First Name:</label>
                  <input type="text" id="firstname" name='first' value={formData.first} onChange={handleChange} required/>
                </div>
                <div className="form-field">
                  <label htmlFor="lastname">Last Name:</label>
                  <input type="text" id="lastname" name='last' value={formData.last} onChange={handleChange} required/>
                </div>
                <div className="form-field">
                  <label htmlFor="username">Username:</label>
                  <input type="text" id="username" name='username' value={formData.username} onChange={handleChange} required/>
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name='email' value={formData.email} onChange={handleChange} required/>
                </div>
                <div className="form-field">
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" name='password' value={formData.password} onChange={handleChange} required/>
                </div>
                <button type="submit" className="blue-button">Sign up</button>
              </div>
            </div>
            <div className='one-third' style={{ backgroundImage: `url(${backgroundimage})`, backgroundRepeat: 'no-repeat', color: 'black' }}>
              <div className="content">
                <h2>{'Already have an account?' }</h2>
                <p>{'Get back to your profile' }</p>
                <div className="button-container">
                  <button  style={{backgroundColor:'black'}} onClick={handleToggle}>{isSignup ? 'Login' : 'Sign up'}</button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </form>
      {!isSignup && <Login/> }
    </div>
  );
};

export default Signup;
