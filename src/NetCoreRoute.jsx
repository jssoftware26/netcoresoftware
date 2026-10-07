import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Import Pages
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Aboutme from "./pages/Aboutme.jsx";
import Contact from "./pages/Contact.jsx";
import FAQ from "./pages/FAQ.jsx";
import CreateAccount from "/src/pages/CreateAccount.jsx";
import LoginAccount from "/src/pages/LoginAccount.jsx";
import YourInquiry from "./pages/YourInquiry.jsx";

function NetCoreRoute(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />                
                <Route path="/aboutme" element={<Aboutme />} />                
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/createaccount" element={<CreateAccount />} />
                <Route path="/loginaccount" element={<LoginAccount />} />                
                <Route path="/yourinquiry" element={<YourInquiry />} />
            </Routes>
        </Router>
    )
}

export default NetCoreRoute;