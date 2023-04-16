import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";

// css
import './css/Account.css';
import './css/Header.css';
import './css/module.css';
import './css/Footer.css';
// end


import Home from "./Components/Home";

import Login from "./Components/Account/Login";
import SignUp from "./Components/Account/SignUp";
import Courses from "./Components/Courses/Courses";
import Exam from "./Components/Exam/Exam";


function App(){
    return(
 <div>
  <BrowserRouter>
  <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/Account/LogIn" element={<Login/>}/>
<Route path="/Account/SignUp" element={<SignUp/>}/>
<Route path="/Courses" element={<Courses/>}/>
<Route path="/Exam" element={<Exam/>}/>
<Route path="/" element={<Home/>}/>
  </Routes>
  
  </BrowserRouter>
 </div>
    )
}
export default App;