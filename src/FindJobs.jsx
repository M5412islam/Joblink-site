// FindJobs.jsx
import { default as React, useState } from 'react';
import { Link } from 'react-router-dom';

const FindJobs = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5; 
    const [message, setMessage] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('/Findjobs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ searchTerm: searchQuery })
            });
            const data = await response.json();
            if (data.message === "No Result") {
                setMessage(data.message);
            } else {
                setSearchResults(data);
            }
        } catch (error) {
            console.error('Error creating job:', error);
        }
    };
    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

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
                        <li><Link to="/" >Home</Link></li>
                        <li><Link to="/findjobs" className="active">Find Jobs</Link></li>
                        <li><Link to="/findjobs">My Posts</Link></li>
                        <li><Link to="/Create_Post">Post Jobs</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </nav>
                <div className="button-container">
                <Link to="/login" className="blue-button">Logout</Link>
                </div>
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
            <input
                    type="text"
                    value={searchQuery}
                    onChange={handleInputChange}
                    placeholder="Search..."
                    className="U-search-field"
                />
                <button onClick={handleSearch} className="U-search-button">Search</button>
                <p className='message'>{message}</p>
            </div>
                </div>

                <div className="F-middle">
    <div className="M-upper">
        <div className="M-upper">
            <div className="U-flex">
                {searchResults.slice(0, 3).map(result => (
                    <div key={result._id}>
        <div className='FullCard'>
            <div className="cardUpper">
                <div className="buttonContainer">
                <div className="buttonShape">{new Date(result.deadline).toLocaleDateString()}</div>
                    <div className="bookmarkCircle">&#x2661;</div>
                </div>
                <h3 className='Cards-heading'>{result.jobTitle}</h3>
                <div className="buttonRow" style={{marginTop:1}}>
                    <div className="U-buttonShape">{result.jobType}</div>
                    <div className="U-buttonShape">{result.Education}</div>
                </div>
                <div className="buttonRow" style={{marginTop:1}}>
                    <div className="U-buttonShape">{result.Experience}</div>
                    <div className="U-buttonShape">{result.email}</div>
                </div>
            </div>
            <div className="cardLower">
                <div className="L-buttonContainer">
                    <div className="L-bookmarkCircle">{result.Salary}/week</div>
                    <div className="L-buttonShape">Details</div>   
                </div>
            </div>
            </div>
        </div>
    ))}
</div>
    
</div>
</div>
<div className="M-lower">
        <div className="M-upper">
            <div className="U-flex">
                {searchResults.slice(3).map(result => (
                    <div key={result._id}>
                        <div className='FullCard'>
                        <div className="cardUpper">
                <div className="buttonContainer">
                <div className="buttonShape">{new Date(result.deadline).toLocaleDateString()}</div>
                    <div className="bookmarkCircle">&#x2661;</div>
                </div>
                <h3 className='Cards-heading'>{result.jobTitle}</h3>
                <div className="buttonRow" style={{marginTop:1}}>
                    <div className="U-buttonShape">{result.jobType}</div>
                    <div className="U-buttonShape">{result.Education}</div>
                </div>
                <div className="buttonRow" style={{marginTop:1}}>
                    <div className="U-buttonShape">{result.Experience}</div>
                    <div className="U-buttonShape">{result.email}</div>
                </div>
            </div>
            <div className="cardLower">
                <div className="L-buttonContainer">
                    <div className="L-bookmarkCircle">{result.Salary}/week</div>
                    <div className="L-buttonShape">Details</div>   
                </div>
            </div>
            </div>
        </div>
    ))}
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
