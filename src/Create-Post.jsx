import React from 'react';
import { Link } from 'react-router-dom';

const CreatePost = () => {
    const today = new Date().toISOString().split('T')[0];
    return (
        <div className='C-Body'>
            <header className="C-header">
                <div className="C-website-name">
                    <span className="large-text"><span className="blue-text">J</span>oblink</span>
                </div>
                <nav className="C-navigation">
                    <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/findjobs">Find-Jobs</Link></li>
                    <li><Link to="/MyPosts">MyPosts</Link></li>
                    <li><Link to="/Create_Post" className="active">Post-Jobs</Link></li>
                    <li><Link to="/About">About</Link></li>
                    </ul>
                </nav>
            </header>

            {/* Form  */}
            <div className="form-container">
                <form className="job-form">
                    <h2><span className='blue-text'>Create</span> a New Job Post</h2>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="jobTitle">Job Title<span style={{ color: 'red' }}>*</span>:</label>
                            <input type="text" id="jobTitle" name="jobTitle" required placeholder='e.g Web Developer'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="companyName">Company Name:</label>
                            <input type="text" id="companyName" name="companyName" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="jobLocation">Job Location:</label>
                            <input type="text" id="jobLocation" name="jobLocation" required placeholder='e.g Lahore' />
                        </div>
                        <div className="form-group">
                            <label>Job Type<span style={{ color: 'red' }}>*</span>:</label>
                            
                            <select id="type" name="type" required>
                                <option value="">Select Job Type</option>
                                <option value="Full">Full Time</option>
                                <option value="Part">Part Time</option>
                                <option value="Intern">Intern</option>
                            </select>
                            
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="jobDescription">Job Description:</label>
                            <textarea id="jobDescription" name="jobDescription" rows="4" style={{ width: 'calc(100% - 20px)' }} required></textarea>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="requiredSkills">Required Skills:</label>
                            <input type="text" id="requiredSkills" name="requiredSkills" required placeholder='e.g PHP,MERN,SEO' />
                        </div>
                        <div className="form-group">
                            <label>Education Level<span style={{ color: 'red' }}>*</span>:</label>
                            <select id="educationLevel" name="educationLevel" required>
                                <option value="">Select Education Level</option>
                                <option value="1">Bachelor</option>
                                <option value="2">Master</option>
                                <option value="3">Higher</option>
                            </select>
                            
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="experienceLevel">Experience Level<span style={{ color: 'red' }}>*</span>:</label>
                            <select id="experienceLevel" name="experienceLevel" required>
                                <option value="">Select Experience Level</option>
                                <option value="1">1 year</option>
                                <option value="2">2 years</option>
                                <option value="3">3 years</option>
                                <option value="4">4 years</option>
                                <option value="5">5 years</option>
                                <option value="above5">Above 5 years</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="applicationDeadline">Application Deadline<span style={{ color: 'red' }}>*</span>:</label>
                            <input type="date" id="applicationDeadline" name="applicationDeadline" min={today} required />
                        </div>
                    
                    </div>
                    <div className="form-row">
                    <div className="form-group">
                            <label htmlFor="position">Number of Positons<span style={{ color: 'red' }}>*</span>:</label>
                            <select id="experienceLevel" name="experienceLevel" required>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="above5">5+</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Contact Information<span style={{ color: 'red' }}>*</span>:</label>
                            <div className="contact-info">
                                <input type="email" id="email" name="email" placeholder="Email" required />
                            </div>
                        </div>
                        
                    </div>
                    <button type="submit" className="C-button">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default CreatePost;
