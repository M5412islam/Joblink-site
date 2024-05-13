import React from 'react';
import { Link } from 'react-router-dom';

const CreatePost = () => {
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
                            <input type="text" id="jobTitle" name="jobTitle" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="companyName">Company Name:</label>
                            <input type="text" id="companyName" name="companyName" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="jobLocation">Job Location:</label>
                            <input type="text" id="jobLocation" name="jobLocation" required />
                        </div>
                        <div className="form-group">
                            <label>Job Type<span style={{ color: 'red' }}>*</span>:</label>
                            <div className="inline-options">
                                <input type="radio" id="fullTime" name="jobType" value="full-time" required />
                                <label htmlFor="fullTime">Full-time</label>
                            </div>
                            <div className="inline-options">
                                <input type="radio" id="partTime" name="jobType" value="part-time" />
                                <label htmlFor="partTime">Part-time</label>
                            </div>
                            <div className="inline-options">
                                <input type="radio" id="contract" name="jobType" value="contract" />
                                <label htmlFor="contract">Contract</label>
                            </div>
                            
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
                            <input type="text" id="requiredSkills" name="requiredSkills" required />
                        </div>
                        <div className="form-group">
                            <label>Education Level<span style={{ color: 'red' }}>*</span>:</label>
                            <div className="inline-options">
                                <input type="radio" id="Masters" name="educationLevel" value="Masters" required />
                                <label htmlFor="highSchool">Masters</label>
                            </div>
                            <div className="inline-options">
                                <input type="radio" id="bachelors" name="educationLevel" value="Bachelor's Degree" />
                                <label htmlFor="bachelors">Bachelor's Degree</label>
                            </div>
                            
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="experienceLevel">Experience Level:</label>
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
                            <input type="date" id="applicationDeadline" name="applicationDeadline" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Contact Information<span style={{ color: 'red' }}>*</span>:</label>
                            <div className="contact-info">
                                <input type="email" id="email" name="email" placeholder="Email" required />
                                <input type="tel" id="phone" name="phone" placeholder="Phone" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Application Method<span style={{ color: 'red' }}>*</span>:</label>
                            <select id="applicationMethod" name="applicationMethod" required>
                                <option value="">Select Application Method</option>
                                <option value="email">Email</option>
                                <option value="onlineForm">Online Application Form</option>
                                <option value="websiteLink">Website Link</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" className="C-button">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default CreatePost;
