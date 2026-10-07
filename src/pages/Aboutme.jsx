import React from "react";
import "./Aboutme.css";
//Use Language Components
import { useLanguage } from "../contexts/LanguageContext.jsx";
//Import Components
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
//Import Assets
import myprofile from "../assets/myprofile.png";

function About(){
    const { t } = useLanguage();

    return(
        <div className="aboutme-container">
            <div className="aboutme-top-nav">
                <Navbar />
            </div>
            <div className="aboutme-main-section">
                <div className="aboutme-firstrow">
                    <div className="aboutme-content">
                        <h2>{t("AMFh2")}</h2><br/>
                        <h3>{t("AMFh3")}</h3><br/>
                        <p>{t("AMFp")}</p>
                    </div>
                    <div className="aboutme-profile">
                        <img src={myprofile} alt="My Profile Photo" />
                    </div>
                </div>
                <div className="aboutme-secondrow">
                    {/*What Drives Me*/}
                    <div className="whatdrivesme">
                        <h3>{t("AMSh3")}</h3>
                        <ul style={{marginLeft: "50px"}}>
                            <li>{t("AMSli1")}</li>
                            <li>{t("AMSli2")}</li>
                            <li>{t("AMSli3")}</li>
                        </ul>
                    </div>
                    {/*Table*/}
                    <div className="table">
                        <h3>How I Work</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Phase</th>
                                    <th>What I Do</th>
                                    <th>Core Deliverable</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1. Strategy & Architecture</td>
                                    <td>Understand business logic, plan domain and database structures, and map user flows.</td>
                                    <td>Technical Roadmap & System Design</td>
                                </tr>
                                <tr>
                                    <td>2. Development & Engineering</td>
                                    <td>Build responsive front-ends and secure back-end APIs across web, mobile, or desktop.</td>
                                    <td>Functional Core System Demos</td>
                                </tr>
                                <tr>
                                    <td>3. Deployment & Launch</td>
                                    <td>Configure cloud environments, DNS, SSL security, and app store submissions.</td>
                                    <td>Production-Ready Software</td>
                                </tr>
                                <tr>
                                    <td>4. Lifetime Support</td>
                                    <td>Provide continuous performance monitoring, bug fixes, and OS compatibility updates.</td>
                                    <td>Worry-Free System Continuity</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/*Why work with me*/}
                    <div className="why">
                        <h3>{t("whyh3")}</h3>
                        <ol style={{marginLeft: "50px"}}>
                            <li>{t("whyli1")}</li>
                            <li>{t("whyli2")}</li>
                            <li>{t("whyli3")}</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className="aboutme-footer">
                <Footer />
            </div>
        </div>
    )
}

export default About;