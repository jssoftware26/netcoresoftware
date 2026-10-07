import React from "react";
import "./Services.css";
//Use Theme Components
import { useTheme } from "../contexts/ThemeContext.jsx";
//Use Language Components
import { useLanguage } from "../contexts/LanguageContext.jsx";
//Import public images
import sfrlight from "/sfr-light.jpg";
import sfrdark from "/sfr-dark.jpg";
//Import Assets Icons
import viewwebicon from "../assets/view-web.png";
import viewmobileicon from "../assets/view-mobile.png";
import viewdesktopicon from "../assets/view-desktop.png";
import viewcustomeicon from "../assets/view-custome.png";
//Import Components
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import PriceAds from "../components/PriceAds.jsx";
//Import Lucide Icon
import { CircleCheckBig } from "lucide-react";
//Navigation
import { useNavigate } from "react-router-dom";

function Services(){
    const { theme } = useTheme();
    const { t } = useLanguage();
    const navigate = useNavigate();
        
    return(
        <div className="services-container">
            <div className="services-top-nav">
                <Navbar />
            </div>
            
            <div className="service-main-section">
                <div className="service-first-row">
                    <div className="sfr-contents">
                        <h2>{t("sfrcontentsh2")}</h2>
                        <p>{t("sfrcontentsp")}</p>
                        <button onClick={()=>navigate("/contact")}>{t("inquirynow")}</button>
                    </div>
                    <div className="sfr-image">
                        <img
                            src={theme === "light" ? sfrlight : sfrdark}
                            alt="Software Service Illustration Photo"
                        />
                    </div>
                </div>
                <div className="services-price-ads">
                    <PriceAds/>
                </div>
                <div className="service-second-row">
                    <h2 className="service-second-row-title">{t("whatIbuilt")}</h2>
                    {/*What I built*/}
                    <div className="app-types">
                        <a className="view-web">
                            <CircleCheckBig size={15} className="checkicon" />
                            <img src={viewwebicon} alt="" />
                            <p>{t("webp")}</p>
                        </a>
                        <a className="view-mobile">
                            <CircleCheckBig size={15} className="checkicon" />
                            <img src={viewmobileicon} alt="" />
                            <p>{t("mobilep")}</p>
                        </a>
                        <a className="view-desktop">
                            <CircleCheckBig size={15} className="checkicon" />
                            <img src={viewdesktopicon} alt="" />
                            <p>{t("desktopp")}</p>
                        </a>
                        <a className="view-small-customize-project">
                            <CircleCheckBig size={15} className="checkicon" />
                            <img src={viewcustomeicon} alt="" />
                            <p>{t("projectp")}</p>
                        </a>
                    </div>

                    {/*Features & Use case*/}
                    <div className="feature-usecase">
                        <p style={{fontWeight:"bold", fontSize:"18px"}}>{t("webp")}</p>
                        <div className="web-service-details">                            
                            <div className="feature">
                                <h4>{t("webfeatureh4")}</h4>
                                <p>{t("webfeaturep")}</p>
                            </div>
                            <div className="usecase">
                                <h4>{t("webusecaseh4")}</h4>
                                <p>{t("webusecasep")}</p>
                            </div>
                        </div>

                        <p style={{fontWeight:"bold", fontSize:"18px"}}>{t("mobilep")}</p>
                        <div className="mobile-service-details">
                            <div className="feature">
                                <h4>{t("mobilefeatureh4")}</h4>
                                <p>{t("mobilefeaturep")}</p>
                            </div>
                            <div className="usecase">
                                <h4>{t("mobileusecaseh4")}</h4>
                                <p>{t("mobileusecasep")}</p>
                            </div>
                        </div>

                        <p style={{fontWeight:"bold", fontSize:"18px"}}>{t("desktopp")}</p>
                        <div className="desktop-service-details">
                            <div className="feature">
                                <h4>{t("desktopfeatureh4")}</h4>
                                <p>{t("desktopfeaturep")}</p>
                            </div>
                            <div className="usecase">
                                <h4>{t("desktopusecaseh4")}</h4>
                                <p>{t("desktopusecasep")}</p>
                            </div>
                        </div>

                        <p style={{fontWeight:"bold", fontSize:"18px"}}>{t("projectp")}</p>
                        <div className="custome-service-details">
                            <div className="feature">
                                <h4>{t("customefeatureh4")}</h4>
                                <p>{t("customefeaturep")}</p>
                            </div>
                            <div className="usecase">
                                <h4>{t("customeusecaseh4")}</h4>
                                <p>{t("customeusecasep")}</p>
                            </div>
                        </div>
                    </div>
                    {/*Techanical Explaining*/}
                    <div className="tech-explain">
                        <h2>{t("techexplainh2")}</h2>
                        <h3>{t("frontendh3")}</h3>
                        <p>{t("frontendp")}</p>
                        <ul>
                            <li>{t("frontendli1")}</li>
                            <li>{t("frontendli2")}</li>
                            <li>{t("frontendli3")}</li>
                        </ul><br/>

                        <h3>{t("backendh3")}</h3>
                        <p>{t("backendp")}</p>
                        <ul>
                            <li>{t("backendli1")}</li>
                            <li>{t("backendli2")}</li>
                            <li>{t("backendli3")}</li>
                        </ul><br/>

                        <h3>{t("domainh3")}</h3>
                        <p>{t("domainp")}</p>
                        <ul>
                            <li>{t("domainli1")}</li>
                            <li>{t("domainli2")}</li>                            
                        </ul><br/>

                        <h3>{t("lifetimeh3")}</h3>
                        <p>{t("lifetimep")}</p>
                        <ol>
                            <li>{t("lifetimeli1")}</li>
                            <li>{t("lifetimeli2")}</li>
                            <li>{t("lifetimeli3")}</li>
                        </ol>
                    </div>
                </div>                
            </div>

            {/*--------------------------------- Mobile Size ------------------------------*/}

            <div className="service-footer">
                <Footer />                
            </div>
        </div>
    )
}

export default Services;