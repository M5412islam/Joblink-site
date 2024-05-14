const Job = require("../models/jobmodel");
const express = require("express");
const router = express.Router();
router.use(express.json());

async function create(req, res) {
    const { jobTitle, Company, location, jobType, Description, skills, Education, Experience, deadline, position,Salary,email } = req.body;
    try {
        const newjob = new Job({
            jobTitle, Company, location, jobType, Description, skills, Education, Experience, deadline, position,Salary,email
      });
  
      await newjob.save();
  
      res.json({message:"Job created successfully"});
    } catch (error) {
      console.error("Error creating user:", error);
      res.json({message:"Server error"});
    }
}

async function search(req,res)
{
  const searchTerm = req.body;
  console.log(searchTerm);
  const schemaKeys = Object.keys(Job.schema.paths).filter(key => {
    const fieldType = Job.schema.paths[key].instance;
    return fieldType === 'String'; 
});


const searchConditions = schemaKeys.map(key => ({
    [key]: { $regex: new RegExp(`.*${searchTerm}.*`, 'i') } 
}));


const searchQuery = {
    $or: searchConditions
};


Job.find(searchQuery)
.then(results => {
    console.log("Search results:", results);
    res.json(results);
})
.catch(err => {
    console.error("Error executing search query:", err);
    res.json({message: "No Result"})
});
}

module.exports=
{
  create,
  search
};