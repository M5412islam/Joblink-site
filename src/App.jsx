import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CPosts from "./Create-Post";
import Homepage from "./Homepage";
import About from "./About";
import Signup from "./Signup";
import Login from "./login";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage isLogged={isLogged} />} />
        <Route path="Create_Post/:isLogged" element={<CPosts />} />
        <Route path="About" element={<About />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="Login" element={<Login setIsLogged={setIsLogged} />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
