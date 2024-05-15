// FindJobs.jsx
import { default as React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Myposts = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [message, setMessage] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const username = localStorage.getItem('username');
    localStorage.setItem('isLogged','true');
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
                const response = await fetch(`/Myposts`, {
                method: 'POST', // or 'POST' depending on your server route
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username: username })
            });
            const data = await response.json();
            setSearchResults(data);
            setTotalPages(Math.ceil(data.length / 6));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    

    const handleSearch = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('/Findjobs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                     searchTerm: searchQuery,
                     
                     })
            });
            const data = await response.json();
            if (data.message === "No Result") {
                setMessage(data.message);
            } else {
                setSearchResults(data);
                setTotalPages(Math.ceil(data.length / 6));
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
    const startIndex = (currentPage - 1) * 6;
    const endIndex = startIndex + 6;
    
    let upperResults = [];
let lowerResults = [];
if (searchResults.length >= endIndex) {
    upperResults = searchResults.slice(startIndex, startIndex + 3);
    lowerResults = searchResults.slice(startIndex + 3, endIndex);
} else {
    upperResults = searchResults.slice(startIndex);
}
    return (
        <div className='F-body'>
            <header className="C-header" style={{paddingBottom :0 ,paddingTop:1}}>
                <div className="C-website-name">
                    <span className="large-text"><span className="blue-text">J</span>oblink</span>
                </div>
                <nav className="C-navigation">
                    <ul>
                        <li><Link to="/" >Home</Link></li>
                        <li><Link to="/findjobs" >Find Jobs</Link></li>
                        <li><Link to="/MyPosts" className="active">MyPosts</Link></li>
                        <li><Link to="/Create_Post">Post Jobs</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </nav>
                <div className="button-container">
                <Link to="/login" className="blue-button"onClick={localStorage.setItem('isLogged','false')}>Logout</Link>
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
                            <input type="radio" id="fullTime" name="jobType"  value="Full Time" />
                            <label htmlFor="fullTime">Full Time</label><br />
                            <input type="radio" id="partTime" name="jobType"  value="Part Time" />
                            <label htmlFor="partTime">Part Time</label><br />
                            <input type="radio" id="contract" name="jobType"  value="Intern" />
                            <label htmlFor="contract">Internship</label><br />
                        </div>
                        <div>
                            <h4>Education Level</h4>
                            <input type="radio" id="Bachelor" name="educationLevel" value="Bachelor"  />
                            <label htmlFor="Bachelor">Bachelor</label><br />
                            <input type="radio" id="Master" name="educationLevel" value="Master"  />
                            <label htmlFor="Master">Master</label><br />
                            <input type="radio" id="Higher" name="educationLevel" value="Higher" />
                            <label htmlFor="Higher">Higher</label><br />
                        </div>
                        <div>
                            <h4>Job Title</h4>
                            <input type="radio" id="engineer" name="jobTitle" value="engineer"  />
                            <label htmlFor="engineer">Engineer</label><br />
                            <input type="radio" id="developer" name="jobTitle" value="developer"  />
                            <label htmlFor="developer">Developer</label><br />
                            <input type="radio" id="designer" name="jobTitle" value="designer"  />
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
                <button onChange={handleInputChange} onClick={handleSearch} className="U-search-button">Search</button>
                <p className='message'>{message}</p>
            </div>
                </div>

                <div className="F-middle">
    <div className="M-upper">
        <div className="M-upper">
            <div className="U-flex">
                {upperResults.slice(0, 3).map(result => (
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
                    <div className="U-buttonShape">{result.location}</div>
                </div>
            </div>
            <div className="cardLower">
                <div className="L-buttonContainer">
                    <div className="L-bookmarkCircle">{result.Salary}$/week</div>
                    <div className="L-buttonShape"><Link to={`/EditPost/${result}`} state={{ result }}>Details</Link></div> 
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
                {lowerResults.slice(0,3).map(result => (
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
                    <div className="U-buttonShape">{result.location}</div>
                </div>
            </div>
            <div className="cardLower">
                <div className="L-buttonContainer">
                    <div className="L-bookmarkCircle">{result.Salary}$/week</div>
                    <div className="L-buttonShape"><Link to={`/EditPost/${result}`} state={{ result }}>Details</Link></div>  
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

export default Myposts;
