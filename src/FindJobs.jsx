// FindJobs.jsx
import { default as React, useState } from 'react';
import { Link } from 'react-router-dom';

const FindJobs = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5; // Example total number of pages

    const handlePreviousPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    return (
        <div className='F-body'>
            <header className="C-header" style={{paddingBottom :0 ,paddingTop:1}}>
                <div className="C-website-name">
                    <span className="large-text"><span className="blue-text">J</span>oblink</span>
                </div>
                <nav className="C-navigation">
                    <ul>
                        <li><Link to="/" className="active">Home</Link></li>
                        <li><Link to="/findjobs">Find Jobs</Link></li>
                        <li><Link to="/myPosts">My Posts</Link></li>
                        <li><Link to="/postJobs">Post Jobs</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </nav>
            </header>

            {/* Code for the part Below header */}
            <div className="F-flex-container">
                <div className="F-left-part">
                    <div className="F-card">
                        <h2 className='blue-text'>Get your best profession</h2>
                        <button className="F-button">Click</button>
                    </div>
                    <div className="F-filters">
                        <h2 className="F-heading">Filters</h2>
                        <div>
                            <h4>Job Type</h4>
                            <input type="radio" id="fullTime" name="jobType" value="fullTime" />
                            <label htmlFor="fullTime">Full Time</label><br />
                            <input type="radio" id="partTime" name="jobType" value="partTime" />
                            <label htmlFor="partTime">Part Time</label><br />
                            <input type="radio" id="contract" name="jobType" value="contract" />
                            <label htmlFor="contract">Contract</label><br />
                        </div>
                        <div>
                            <h4>Education Level</h4>
                            <input type="radio" id="highSchool" name="educationLevel" value="highSchool" />
                            <label htmlFor="highSchool">High School</label><br />
                            <input type="radio" id="college" name="educationLevel" value="college" />
                            <label htmlFor="college">College</label><br />
                        </div>
                        <div>
                            <h4>Job Title</h4>
                            <input type="radio" id="engineer" name="jobTitle" value="engineer" />
                            <label htmlFor="engineer">Engineer</label><br />
                            <input type="radio" id="developer" name="jobTitle" value="developer" />
                            <label htmlFor="developer">Developer</label><br />
                            <input type="radio" id="designer" name="jobTitle" value="designer" />
                            <label htmlFor="designer">Designer</label><br />
                        </div>
                    </div>
                </div>
                <div className="F-right-part">
                <div className="F-upper">
                    <div className="U-heading-container">
                <h1 className='blue-text'>Recommended Jobs</h1>
                </div>
            <div className="U-search-container">
            <input type="text" className="U-search-field" placeholder="Search..." />
            <button className="U-search-button">Search</button>
            </div>
                </div>

                    <div className="F-middle">
                        <div className="M-upper">
                        <div className="M-upper">
    <div className="U-flex">
        <div className="cardUpper">
        <div className="buttonContainer">
            <div className="buttonShape">Date</div>
            <div className="bookmarkCircle">&#x2661;</div>
        </div>
        <h3 className='Cards-heading'>UI/UX Designer Designer</h3>
        <div className="buttonRow" style={{marginTop:1}}>
            <div className="U-buttonShape">FullTime</div>
            <div className="U-buttonShape">Bechuler</div>
        </div>
        <div className="buttonRow" style={{marginTop:1}}>
            <div className="U-buttonShape">1 Year</div>
            <div className="U-buttonShape">Email</div>
        </div>
        
        </div>
        <div className="cardLower">
        <div className="L-buttonContainer">
            <div className="L-bookmarkCircle">$450/week</div>
            <div className="L-buttonShape">Details</div>   
        </div>
        </div>
    </div>
    <div className="U-flex">
        <div className="cardUpper">
        <div className="buttonContainer">
            <div className="buttonShape">Date</div>
            <div className="bookmarkCircle">&#x2661;</div>
        </div>
        <h3 className='Cards-heading'>UI/UX Designer Designer</h3>
        <div className="buttonRow" style={{marginTop:1}}>
            <div className="U-buttonShape">FullTime</div>
            <div className="U-buttonShape">Bechuler</div>
        </div>
        <div className="buttonRow" style={{marginTop:1}}>
            <div className="U-buttonShape">1 Year</div>
            <div className="U-buttonShape">Email</div>
        </div>
        
        </div>
        <div className="cardLower">
        <div className="L-buttonContainer">
            <div className="L-bookmarkCircle">$450/week</div>
            <div className="L-buttonShape">Details</div>   
        </div>
        </div>
    </div>
    <div className="U-flex">
        <div className="cardUpper">
        <div className="buttonContainer">
            <div className="buttonShape">Date</div>
            <div className="bookmarkCircle">&#x2661;</div>
        </div>
        <h3 className='Cards-heading'>UI/UX Designer Designer</h3>
        <div className="buttonRow" style={{marginTop:1}}>
            <div className="U-buttonShape">FullTime</div>
            <div className="U-buttonShape">Bechuler</div>
        </div>
        <div className="buttonRow" style={{marginTop:1}}>
            <div className="U-buttonShape">1 Year</div>
            <div className="U-buttonShape">Email</div>
        </div>
        
        </div>
        <div className="cardLower">
        <div className="L-buttonContainer">
            <div className="L-bookmarkCircle">$450/week</div>
            <div className="L-buttonShape">Details</div>   
        </div>
        </div>
    </div>
    
</div>
                        </div>
                        <div className="M-lower">
                        <div className="M-upper">
                        <div className="U-flex">
        <div className="cardUpper">
        <div className="buttonContainer">
            <div className="buttonShape">Date</div>
            <div className="bookmarkCircle">&#x2661;</div>
        </div>
        <h3 className='Cards-heading'>UI/UX Designer Designer</h3>
        <div className="buttonRow" style={{marginTop:1}}>
            <div className="U-buttonShape">FullTime</div>
            <div className="U-buttonShape">Bechuler</div>
        </div>
        <div className="buttonRow" style={{marginTop:1}}>
            <div className="U-buttonShape">1 Year</div>
            <div className="U-buttonShape">Email</div>
        </div>
        
        </div>
        <div className="cardLower">
        <div className="L-buttonContainer">
            <div className="L-bookmarkCircle">$450/week</div>
            <div className="L-buttonShape">Details</div>   
        </div>
        </div>
    </div>
    <div className="U-flex">
        <div className="cardUpper">
        <div className="buttonContainer">
            <div className="buttonShape">Date</div>
            <div className="bookmarkCircle">&#x2661;</div>
        </div>
        <h3 className='Cards-heading'>UI/UX Designer Designer</h3>
        <div className="buttonRow" style={{marginTop:1}}>
            <div className="U-buttonShape">FullTime</div>
            <div className="U-buttonShape">Bechuler</div>
        </div>
        <div className="buttonRow" style={{marginTop:1}}>
            <div className="U-buttonShape">1 Year</div>
            <div className="U-buttonShape">Email</div>
        </div>
        
        </div>
        <div className="cardLower">
        <div className="L-buttonContainer">
            <div className="L-bookmarkCircle">$450/week</div>
            <div className="L-buttonShape">Details</div>   
        </div>
        </div>
    </div>
    <div className="U-flex">
        <div className="cardUpper">
        <div className="buttonContainer">
            <div className="buttonShape">Date</div>
            <div className="bookmarkCircle">&#x2661;</div>
        </div>
        <h3 className='Cards-heading'>UI/UX Designer Designer</h3>
        <div className="buttonRow" style={{marginTop:1}}>
            <div className="U-buttonShape">FullTime</div>
            <div className="U-buttonShape">Bechuler</div>
        </div>
        <div className="buttonRow" style={{marginTop:1}}>
            <div className="U-buttonShape">1 Year</div>
            <div className="U-buttonShape">Email</div>
        </div>
        
        </div>
        <div className="cardLower">
        <div className="L-buttonContainer">
            <div className="L-bookmarkCircle">$450/week</div>
            <div className="L-buttonShape">Details</div>   
        </div>
        </div>
    </div>
      
</div>
                        </div>
                    </div>
                    <div className="F-lower">
                        <ul className="pagination">
                            <li>
                                <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
                            </li>
                            {[...Array(totalPages).keys()].map((pageNumber) => (
                                <li key={pageNumber}>
                                    <button onClick={() => handlePageChange(pageNumber + 1)}>{pageNumber + 1}</button>
                                </li>
                            ))}
                            <li>
                                <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindJobs;
