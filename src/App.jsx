import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import CPosts from "./Create-Post";
import Homepage from "./Homepage";
import Signup from "./Signup";
import Login from "./login";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage isLogged={isLogged} />} />
        <Route path="Create_Post" element={<CPosts />} />
        <Route path="About" element={<About />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="Login" element={<Login setIsLogged={setIsLogged} />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
