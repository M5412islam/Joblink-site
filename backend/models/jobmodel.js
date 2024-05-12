const mongoose = require("mongoose");

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
    Contact: {
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        }
    },
    
});

const User = mongoose.model("User", userschema);

module.exports = User;
