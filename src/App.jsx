import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import CPosts from "./Create-Post";
import Homepage from "./Homepage";
import Signup from "./Signup";
import Login from "./login";
import FindJobs from "./FindJobs";
import Details from "./details";
import Myposts from "./myposts";
import EditPost from "./editpost"
function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="Create_Post" element={<CPosts />} />
        <Route path="About" element={<About />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="FindJobs" element={<FindJobs/>}/>
        <Route path="detail/:result" element={<Details />} />
        <Route path="MyPosts" element={<Myposts/>}/>
        <Route path="EditPost/:result" element={<EditPost/>}/>
        <Route path="Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
