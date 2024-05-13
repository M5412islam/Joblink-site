// usercontroller.js
const User = require("../models/usermodel");
const express = require("express");
const router = express.Router();
router.use(express.json());
async function register(req, res) {
    const { first, last, Username, Email, Password } = req.body;
    if (!first || !last || !Username || !Email || !Password) {
      return res.json({ message: "Please provide all required fields" });
  }
    try {
      const existingUser = await User.findOne({ Username });
      const existingemail = await User.findOne({ Email });
      if (existingUser) {
        console.log(existingUser);
        return res.json({message:"Username already exists"});
      }
      if (existingemail) {
        console.log(existingUser);
        return res.json({message:"Email already exists"});
      }
      const newUser = new User({
        Fullname: {
          first,
          last,
        },
        Username,
        Email,
        Password,
      });
  
      await newUser.save();
  
      res.json({message:"User created successfully"});
    } catch (error) {
      console.error("Error creating user:", error);
      res.json({message:"Server error"});
    }
}

async function login(req,res)
{
    const { Username, Password } = req.body;
    if (!Username  || !Password) {
      return res.json({ message: "Please provide all required fields" });
  }
    try {
      const existingUser = await User.findOne({ Username });
      
      if (existingUser) {
         
         if(Password==existingUser.Password)
            return res.json({message:"Username Found"});
      }
      
     
      res.json({message:"User not Found"});
    } catch (error) {
      console.error("Error creating user:", error);
      res.json({message:"Server error"});
    }
}

module.exports = {
    register,
    login
};
