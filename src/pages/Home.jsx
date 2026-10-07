import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
//Use Theme Components
import { useTheme } from "../contexts/ThemeContext.jsx";
//Import assets items
import map from "../assets/map.png";
import netcorelogo from "../assets/netcore-logo.png";
//Import public images
import webservicelight from "/web-service-light.jpg";
import webservicedark from "/web-service-dark.jpg";
import mobileservicelight from "/mobile-service-light.jpg";
import mobileservicedark from "/mobile-service-dark.jpg";
import desktopservicelight from "/desktop-service-light.jpg";
import desktopservicedark from "/desktop-service-dark.jpg";
//Import Components
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import PriceAds from "../components/PriceAds.jsx";
//Use Language Components
import { useLanguage } from "../contexts/LanguageContext.jsx";

import { useEffect, useRef } from "react";

function Home(){
    const { theme } = useTheme();
    const { t } = useLanguage();

    /*Animation  in Show Section*/
    const itemsRef = useRef([]);
    useEffect(()=>{
        const observer = new IntersectionObserver(
            (entries)=>{
                entries.forEach((entry)=>{
                    if(entry.isIntersecting){
                        entry.target.classList.add("show");
                    }else{
                        entry.target.classList.remove("show");
                    }
                });
            },
            {
                threshold: 0.2
            }
        );
        itemsRef.current.forEach((item)=>{
            if(item) observer.observe(item);
        });
        return ()=> observer.disconnect();
    }, []);
    /*-------------------------*/

    return(
        <div className="home-container">
            <div className="nav-bar">
                <Navbar />
            </div>

            <div className="first-row"
                ref={(el)=>{
                    if(el && !itemsRef.current.includes(el)){
                        itemsRef.current.push(el);
                    }
                }}
            >
                <div className="main-leftside">                    
                    <h1>JOIN ME TO GET SATISFY, SAFE & SAVE YOUR TIMES</h1>
                    <h2>From Concept to Code: Scalable Full-Stack Web, <br/>Mobile & Desktop Applications</h2>         
                </div>
                <div className="main-rightside">
                    <img className="netcore-logo" src={netcorelogo} alt="NetCore Logo" />
                    <img className="myanmar-map" src={map} alt="Myanmar Map"/>
                </div>
            </div>

            {/*Price Ads Section*/}
            <div className="home-price-ads">
                <PriceAds/>
            </div>
            
            <div className="second-row">
                <div className="items-row"
                    ref={(el)=>{
                        if(el && !itemsRef.current.includes(el)){
                            itemsRef.current.push(el);
                        }
                    }}
                >
                    <div className="items-row-content">
                        <h2>{t("webh2")}</h2>
                        <p>{t("webp")}</p>
                        <div className="items-row-btn">                            
                            <Link to="/services">View More Details</Link>
                        </div>
                    </div>
                    <div className="items-row-image">
                        <img
                            src={theme === "light" ? webservicelight : webservicedark}
                            alt="Web Service Images"                        
                        />
                    </div>
                </div>
                <div className="items-row"
                    ref={(el)=>{
                        if(el && !itemsRef.current.includes(el)){
                            itemsRef.current.push(el);
                        }
                    }}
                >
                    <div className="items-row-content">
                        <h2>{t("mobileh2")}</h2>                        
                        <p>{t("mobilep")}</p>
                        <div className="items-row-btn">                            
                            <Link to="/services">View More Details</Link>
                        </div>
                    </div>
                    <div className="items-row-image">
                        <img
                            src={theme === "light" ? mobileservicelight : mobileservicedark}
                            alt="Web Service Images"                        
                        />
                    </div>                
                </div>
                <div className="items-row"
                    ref={(el)=>{
                        if(el && !itemsRef.current.includes(el)){
                            itemsRef.current.push(el);
                        }
                    }}
                >
                    <div className="items-row-content">
                        <h2>{t("desktoph2")}</h2>
                        <p>{t("desktopp")}</p>
                        <div className="items-row-btn">                            
                            <Link to="/services">View More Details</Link>
                        </div>
                    </div>
                    <div className="items-row-image">
                        <img
                            src={theme === "light" ? desktopservicelight : desktopservicedark}
                            alt="Web Service Images"                        
                        />
                    </div>
                </div>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default Home;