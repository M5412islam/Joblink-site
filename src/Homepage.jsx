import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import graphicDesignerLogo from './Images-Logos/Graphic Designer.png';
import homepageimg from './Images-Logos/Homepage1.png';
import Scroller from './Images-Logos/Scroller.png';
import softwareEngineerLogo from './Images-Logos/Software Engineer.png';
import teacherLogo from './Images-Logos/Teacher.png';
import webDeveloperLogo from './Images-Logos/Web Developer.png';

const Homepage = ({ isLogged })=> {
  const [showFirstSet, setShowFirstSet] = useState(true);
  const params = new URLSearchParams(window.location.search);
  const param1 = params.get('param1');
  isLogged=param1;
  const toggleCards = () => {
    setShowFirstSet(!showFirstSet);
  };
console.log("logged"+isLogged);
  const firstSetData = [
    { id: 1, logo: softwareEngineerLogo, title: 'Software Engineer', description: 'Build amazing software with team management skills' },
    { id: 2, logo: webDeveloperLogo, title: 'Web Developer', description: 'Create stunning websites that are visually appealing' },
    { id: 3, logo: teacherLogo, title: 'Data Scientist', description: 'Analyze big data and predict results accordingly' }
  ];

  const secondSetData = [
    { id: 4, logo: graphicDesignerLogo, title: 'Graphic Designer', description: 'Design beautiful graphics that impact visually' },
    { id: 5, logo: webDeveloperLogo, title: 'App Developer', description: 'Develop innovative apps for mobile devices' },
    { id: 6, logo: graphicDesignerLogo, title: 'UX/UI Designer', description: 'Craft seamless user experience interfaces' }
  ];

  return (
    <div>
      <header className="header">
        <div className="website-name">
          <span className="large-text"><span className="blue-text">J</span>oblink</span>
        </div>
        
        <nav className="navigation">
        {isLogged ? (
          <ul>
            <li><Link to="/" className="active">Home</Link></li>
            <li><Link to="/findjobs">Find-Jobs</Link></li>
            <li><Link to="/MyPosts">MyPosts</Link></li>
            <li><Link to={`/Create_Post/${isLogged}`}>Post-Jobs</Link></li>
            <li><Link to="/About">About</Link></li>
          </ul>
          ) : (
            <ul>
            <li><Link to="/" className="active">Home</Link></li>
            <li><Link to="/login">Find-Jobs</Link></li>
            <li><Link to="/login">MyPosts</Link></li>
            <li><Link to="/login">Post-Jobs</Link></li>
            <li><Link to="/login">About</Link></li>
          </ul>
          )};
        </nav>
        <div className="button-container">
      
        {isLogged ? (
          <div className="button-container">
           
          <Link to="/login" className="blue-button" onClick={isLogged=false}>Logout</Link>
          </div>
        ) : (
          <div className="button-container">
          <Link to="/Signup" className="blue-button">Sign up</Link>
          <Link to="/login" className="blue-button">Log in</Link>
          </div>
        )}

        </div>
      </header>

      <div className="main-content">
        <div className="left-section">
          <h2 className="large-text">
            Find Your <span className="blue-text">Dream Job</span> <br/>Here Easy And Fast
          </h2>
          <p className="paragraph-text">
            Explore thousands of job opportunities and find the perfect match for your skills and experience. Our platform makes it easy and fast to discover your dream job and find skilled employees.
          </p>
          <div className="search-container">
            <input type="text" placeholder="Search for jobs..." />
            <button className="blue-button">Search</button>
          </div>
        </div>

        {/* Right section content */}
        <div className="right-section">
          <img src={homepageimg} alt="A girl pointing towards heading" />
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        {/* Part 1: Cards */}
        <div className="part1">
          <div className="card-container">
          {showFirstSet ? (
  firstSetData.map((card) => (
    <div key={card.id} className="card" onClick={() => handleCardClick(card)}>
      <img src={card.logo} alt={card.title} />
      <h1>{card.title}</h1>
      <p>{card.description}</p>
    </div>
  ))
) : (
  secondSetData.map((card) => (
    <div key={card.id} className="card" onClick={() => handleCardClick(card)}>
      <img src={card.logo} alt={card.title} />
      <h1>{card.title}</h1>
      <p>{card.description}</p>
    </div>
  ))
)}

          </div>
        </div>
        
        {/* Part 2: Scroller */}
<div className="part2">
  {/* Flex container for scroller image */}
  <div className="scroller-container">
    <div className="scroller" onClick={toggleCards}>
      <img src={Scroller} alt="Logo to scroll" />
    </div>
  </div>
  {/* Flex container for heading */}
  <div className="heading-container">
    <h1 className="heading"><span className='blue-text'>Click</span> the scroller<br/> <span className='blue-text'>to see</span> some famous jobs</h1>
  </div>
</div>

      </footer>
    </div>
  );
};

export default Homepage;