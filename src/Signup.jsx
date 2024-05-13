import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    first: '',
    last: '',
    Username: '',
    Email: '',
    Password: ''
  });

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
      if(data.message === "User created successfully") {
        window.location.href = '/login'; 
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="container">
      <div className="two-thirds">
        <div className="form-container">
        <p className='message'>{message}</p>
          <h2>Create your account</h2>
          <form onSubmit={handleSubmit}>
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
              <input type="text" id="username" name='Username' value={formData.Username} onChange={handleChange} required/>
            </div>
            <div className="form-field">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name='Email' value={formData.Email} onChange={handleChange} required/>
            </div>
            <div className="form-field">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name='Password' value={formData.Password} onChange={handleChange} required/>
            </div>
            <button type="submit" className="blue-button">Sign up</button>
          </form>
          {message && <p>{message}</p>}
        </div>
      </div>
      <div className="one-third">
        <div className="content">
          <h2>Already have an account?</h2>
          <p>Get back to your profile</p>
          <div className="button-container">
            <button onClick={() => window.location.href = '/login'}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
