<<<<<<< HEAD
import React,{ useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CPosts from "./Create-Post";
import Homepage from "./Homepage";
import About from "./About";
 import Signup from "./Signup";
 import Login from "./login";
=======
import React from "react";

// import About from "./About";
// import CreatePost from "./Create-Post";
// import Homepage from "./Homepage";
// import Signup from "./Signup";
import Login from "./login";

>>>>>>> f4d6b036fd8cc8e41f81e85a6d9b10b9b750d725
function App() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          <Route index element={<Homepage setIsLogged={isLogged}/>} />
          <Route path="Create_Post" element={<CPosts/>} />
          <Route path="About" element={<About/>}/>
          <Route path="Signup" element={<Signup/>}/>
          <Route path="Login" element={<Login setIsLogged={setIsLogged}/>}/>
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
