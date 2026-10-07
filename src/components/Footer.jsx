import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { MapPinned, Mail, Phone } from "lucide-react";

function Footer(){
    return(
        <div className="footer-container">
            <div className="footer-firstrow">
                <div className="brand-section">
                    <h3>NetCore Software Service</h3>
                    <p>We create reliable and modern software solutions that help businesses grow, connect, and work efficiently.</p>             
                </div>
                <div className="services-section">
                    <h3>Services</h3>                
                    <p>Web Development</p>
                    <p>Mobile Development</p>
                    <p>Desktop Development</p>
                    <p>Custom Software</p>
                    <p>UI/UX Design</p>
                    <p>Maintenance & Support</p>                
                </div>            
                <div className="company-section">
                    <h3>Company</h3>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/services">Services</Link>                    
                    <Link to="/contact">Contact</Link>
                </div>
                <div className="contact">
                    <h3>Contact</h3>
                    <div className="contact-items">
                        <a><MapPinned size={20}/><p>Yangon, Myanmar</p></a>
                        <a><Mail size={20}/><p>netcore.office@gmail.com</p></a>
                        <a><Phone size={20}/><p>+95 09 680830173</p></a>
                    </div>
                </div>
            </div>
            <div className="footer-secondrow">
                <p>2026 NetCore Software Service. All Rights Reserved. <Link to="">Privacy Policy | Terms & Conditions</Link></p>
            </div>
        </div>
    )
}

export default Footer;