const Job = require("../models/jobmodel");
const express = require("express");
const router = express.Router();
router.use(express.json());

async function create(req, res) {
    const { jobTitle, Company, location, jobType, Description, skills, Education, Experience, deadline, position,email } = req.body;
    if (!jobTitle || !jobType || !Education || !Experience || !deadline || !position || !email) {
      return res.json({ message: "Please provide all required fields" });
  }
    try {
        const newjob = new Job({
            jobTitle, Company, location, jobType, Description, skills, Education, Experience, deadline, position,email
      });
  
      await newjob.save();
  
      res.json({message:"Job created successfully"});
    } catch (error) {
      console.error("Error creating user:", error);
      res.json({message:"Server error"});
    }
}

module.exports={create};