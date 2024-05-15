const express = require("express");
const mongoose = require("mongoose");
const Signuprouter=require("./routes/Signuprouter");
const LoginRouter=require("./routes/LoginRouter");
const jobcreateRoute=require("./routes/jobcreateRoute");
const FindJobRoute=require("./routes/FindJobRoute");
const myPosts=require("./routes/findMyPostRoute")

const app = express();
const cors=require("cors");
app.use(express.urlencoded({ extended: true }));
// app.use(cors);
mongoose.connect("mongodb://127.0.0.1:27017/JobLink")
    .then(() => {
        console.log("MongoDB connected successfully");
        
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });

app.use("/Signup",Signuprouter);
app.use("/Login",LoginRouter);
app.use("/create_job",jobcreateRoute); 
app.use("/Findjobs",FindJobRoute);
app.use("/Findjobs",FindJobRoute);
app.use("/Myposts",myPosts);
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});