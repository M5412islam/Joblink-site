const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
const jobschema = mongoose.Schema({
    jobTitle: {
        type: String,
        required: true,
    },
    Company: {
        type: String,
    },
    location: {
        type: String,
    },
    jobType: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
    },
    skills: {
        type: String,
    },
    Education: {
        type: String,
        required: true,
    },
    Experience: {
        type: String,
        required: true,
    },
    deadline: {
        type: Date,
        required: true,
    },
    position: {
        type: String,
        required: true
    },
    Salary: {
        type: Number,
        required: true
    },
    email: {
            type: String,
            required: true
    },

});


const Jobs = mongoose.model("Jobs", jobschema);

module.exports = Jobs;
