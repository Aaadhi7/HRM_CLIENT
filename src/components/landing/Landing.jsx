import React, { useState } from "react";
import Landingpage from "./Landingpage";
import LandingNav from "./LandingNav";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Adminlogin from "../adminlogin/Adminlogin";
import Adduser from "../adduser/Adduser";


function Landing() {
  

    return (
        <Router>
            <>
                <Routes>
                <Route path="/" exact element={<LandingNav/>} />
                <Route path="/" exact element={<Landingpage/>} />
                <Route path="/adminlogin" exact element={<Adminlogin/>} />
                <Route path="/adduser" exact element={<Adduser/>} />
                </Routes>
            </>
        </Router>
    )
}

export default Landing;