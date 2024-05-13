import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CreatePost = () => {
    const today = new Date().toISOString().split('T')[0];
    const [formData, setFormData] = useState({
        jobTitle: '',
        Company: '',
        location: '',
        jobType: '',
        Description: '',
        skills: '',
        Education: '',
        Experience: '',
        deadline: '',
        position: '',
        email: '',
    });
    const [message, setMessage] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('/create_job', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (data.message === "Job created successfully") {

                window.location.href = '/?param1=true';
            } else {
                setMessage(data.message);
            }
        } catch (error) {
            console.error('Error creating job:', error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
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
                        <li><Link to="/findjobs">Find-Jobs</Link></li>
                        <li><Link to="/MyPosts">MyPosts</Link></li>
                        <li><Link to="/Create_Post" className="active">Post-Jobs</Link></li>
                        <li><Link to="/About">About</Link></li>
                    </ul>
                </nav>
                <div className="button-container">
                <Link to="/login" className="blue-button">Logout</Link>
                </div>

            </header>

            {/* Form  */}
            <div className="form-container">
                <p className='message'>{message}</p>
                <form className="job-form" onSubmit={handleSubmit}>
                    <h2><span className='blue-text'>Create</span> a New Job Post</h2>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="jobTitle">Job Title<span style={{ color: 'red' }}>*</span>:</label>
                            <input type="text" id="jobTitle" name="jobTitle" required placeholder='e.g Web Developer' value={formData.Username} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="companyName">Company Name:</label>
                            <input type="text" id="companyName" name="Company" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="jobLocation">Job Location:</label>
                            <input type="text" id="jobLocation" name="location" required placeholder='e.g Lahore' value={formData.Username} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Job Type<span style={{ color: 'red' }}>*</span>:</label>

                            <select id="type" name="jobType" required value={formData.Username} onChange={handleChange}>
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
                            <textarea id="jobDescription" name="Description" rows="4" style={{ width: 'calc(100% - 20px)' }} required value={formData.Username} onChange={handleChange}></textarea>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="requiredSkills">Required Skills:</label>
                            <input type="text" id="requiredSkills" name="skills" required placeholder='e.g PHP,MERN,SEO' value={formData.Username} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Education Level<span style={{ color: 'red' }}>*</span>:</label>
                            <select id="educationLevel" name="Education" required value={formData.Username} onChange={handleChange}>
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
                            <select id="experienceLevel" name="Experience" required value={formData.Username} onChange={handleChange}>
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
                            <input type="date" id="applicationDeadline" name="deadline" min={today} required value={formData.Username} onChange={handleChange} />
                        </div>

                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="position">Number of Positons<span style={{ color: 'red' }}>*</span>:</label>
                            <select id="position" name="position" required value={formData.Username} onChange={handleChange}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="5+">5+</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Contact Information<span style={{ color: 'red' }}>*</span>:</label>
                            <div className="contact-info">
                                <input type="email" id="email" name="email" placeholder="Email" required value={formData.Username} onChange={handleChange} />
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
