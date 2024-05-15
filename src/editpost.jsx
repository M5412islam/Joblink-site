import React from 'react';
import { Link,useLocation } from 'react-router-dom';

const Details = () => {
    
   
    
    const location = useLocation();
    const result = location.state.result;

    let company=result.Company;
    if(company==="")
        {
            company="none"
        }
    
    const deadlineDate = new Date(result.deadline);
    const formattedDeadline = deadlineDate.toISOString().split('T')[0];
    const redirectToGmail = () => {
        const emailSubject = encodeURIComponent(`Application for ${result.jobTitle}`);
        const emailBody = encodeURIComponent(`I'm interested in applying for the ${result.jobTitle} position. Please find my resume attached. Thank you.`);
        window.location.href = `mailto:${result.email}?subject=${emailSubject}&body=${emailBody}`;
    };

    return (
        <div className='C-Body'>
            <header className="C-header">
                <div className="C-website-name">
                    <span className="large-text"><span className="blue-text">J</span>oblink</span>
                </div>
                <nav className="C-navigation">
                    <ul>
                        <li><Link to="/" >Home</Link></li>
                        <li><Link to="/findjobs" className="active">Find-Jobs</Link></li>
                        <li><Link to="/MyPosts">MyPosts</Link></li>
                        <li><Link to="/Create_Post" >Post-Jobs</Link></li>
                        <li><Link to="/About">About</Link></li>
                    </ul>
                </nav>
                <div className="button-container">
                <Link to="/login" className="blue-button">Logout</Link>
                </div>

            </header>

            {/* Form  */}
            <div className="form-container">
               
                <form className="job-form" >
                    <h2><span className='blue-text'>Details</span> of the Job</h2>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="jobTitle">Job Title<span style={{ color: 'red' }}>*</span>:</label>
                            <input type="text" id="jobTitle" name="jobTitle" readOnly placeholder='e.g Web Developer' value={result.jobTitle}  />
                        </div>
                        <div className="form-group">
                            <label htmlFor="companyName">Company Name:</label>
                            <input type="text" id="companyName" readOnly name="Company" value={company}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="jobLocation">Job Location:</label>
                            <input type="text" id="jobLocation" name="location" readOnly placeholder='e.g Lahore' value={result.location}  />
                        </div>
                        <div className="form-group">
                            <label>Job Type<span style={{ color: 'red' }}>*</span>:</label>

                            <select id="type" name="jobType" readOnly value={result.jobType} >
                                <option value="">Select Job Type</option>
                                <option value="Full Time">Full Time</option>
                                <option value="Part Time">Part Time</option>
                                <option value="Intern">Intern</option>
                            </select>

                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="jobDescription">Job Description:</label>
                            <textarea id="jobDescription" name="Description" rows="4" style={{ width: 'calc(100% - 20px)' }} readOnly value={result.Description} ></textarea>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="requiredSkills">Required Skills:</label>
                            <input type="text" id="requiredSkills" name="skills" readOnly placeholder='e.g PHP,MERN,SEO' value={result.skills}  />
                        </div>
                        <div className="form-group">
                            <label>Education Level<span style={{ color: 'red' }}>*</span>:</label>
                            <select id="educationLevel" name="Education" readOnly value={result.Education} >
                                <option value="">Select Education Level</option>
                                <option value="Bachelor">Bachelor</option>
                                <option value="Master">Master</option>
                                <option value="Higher">Higher</option>
                            </select>

                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="experienceLevel">Experience Level<span style={{ color: 'red' }}>*</span>:</label>
                            <select id="experienceLevel" name="Experience" readOnly value={result.Experience} >
                                <option value="">Select Experience Level</option>
                                <option value="1 year">1 year</option>
                                <option value="2 years">2 years</option>
                                <option value="3 years">3 years</option>
                                <option value="4 years">4 years</option>
                                <option value="5 years">5 years</option>
                                <option value="Above 5 years">Above 5 years</option>
                            </select>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="applicationDeadline">Application Deadline<span style={{ color: 'red' }}>*</span>:</label>
                            <input type="date" id="applicationDeadline" name="deadline"  readOnly value={formattedDeadline}  />

                        </div>

                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="position">Number of Positons<span style={{ color: 'red' }}>*</span>:</label>
                            <select id="position" name="position" readOnly value={result.position} >
                                <option value="">Select No of Positions</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="5+">5+</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Salary">Salary:</label>
                            <input type="text" id="Salary" name="Salary" readOnly placeholder='e.g 10000' value={result.Salary} />
                        </div>
                        <div className="form-group">
                            <label>Contact Information<span style={{ color: 'red' }}>*</span>:</label>
                            <div className="contact-info">
                                <input type="email" id="email" name="email" placeholder="Email" readOnly value={result.email} />
                            </div>
                        </div>

                    </div>
                    
                </form>
            </div>
        </div>
    );
};

export default Details;
