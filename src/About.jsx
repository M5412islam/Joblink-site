import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='A-body'>
      <div className="about-content">
        <div className="about-left">
          <h2 className="large-text">
            We have provided <span className="blue-text"><br/>1M jobs</span> <br/> all around the world.
          </h2>
          <p className="paragraph-text">
            Explore thousands of job opportunities and find the perfect match for your skills and experience.Explore thousands of job opportunities and find the perfect match for your skills and experience. Our platform makes it easy and fast to discover your dream job and find skilled employees.Our platform makes it easy and fast to discover your dream job and find skilled employees.
          </p>
        </div>
        <div className="about-right">
          <div className="right-section">
            <div className="right-row">
              <div className="right-column column1">
                <h2 className="column-heading large-text">$5B+</h2>
                <p className="column-paragraph">
                  We are a 5.5 billion company, and a member of the S&P 500.
                </p>
              </div>
              <div className="right-column column2">
                <h2 className="column-heading">~90</h2>
                <p className="column-paragraph">
                  Our Website has more then 8.8 ratings in job finding in more then 90 countries worldwide.
                </p>
              </div>
            </div>
            <div className="right-row">
              <div className="right-column column3">
                <h2 className="column-heading">~19,500</h2>
                <p className="column-paragraph">
                  We have more then 19500 Associates in almost 450 offices Globally.
                </p>
              </div>
              <div className="right-column column4">
                <h2 className="column-heading">40+</h2>
                <p className="column-paragraph">
                  Over 40 years of providing people a platform to find their jobs or to find Employees..
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="A-header">
        <div className="left-side">
          <div className="company-info">
            <h1 className="website-name"><span className='blue-text'>J</span>oblink</h1>
          </div>
          <nav className="A-navigation">
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/findjobs">Find-Jobs</Link></li>
            <li><Link to="/MyPosts">MyPosts</Link></li>
            <li><Link to="/Create_Post">Post-Jobs</Link></li>
            <li><Link to="/About"  className="active">About</Link></li>
            </ul>
          </nav>
        </div>
        <div className="right-side">
    <div className="company-info">
      <h2><span className='blue-text'>C</span>ontact</h2>
      <p><strong>Address:</strong> Street# 2, Johar Town, Lahore, Pakistan</p>
      <p><strong>Email:</strong> info@joblink.com</p>
      <p><strong>Phone:</strong> +1234567890</p>
    </div>
  </div>
      </header>
    </div>
  );
};

export default About;