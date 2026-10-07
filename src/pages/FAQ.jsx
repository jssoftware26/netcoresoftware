import React from "react";
import "./FAQ.css";
//Use Language Components
import { useLanguage } from "../contexts/LanguageContext.jsx";
//Import Components
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

function FAQ(){
    const { t } = useLanguage();

    return(
        <div className="faq-container">
            <div className="faq-top-nav">
                <Navbar />
            </div>
            
            <div className="faq-main-section">                
                <h2>General & Process <a style={{color:"#ff7700"}}>FAQs</a></h2>
                <p className="FAQ-Question">{t("Q1")}</p>
                <p>{t("A1")}</p>
                <br/>

                <p className="FAQ-Question">{t("Q2")}</p>
                <p>{t("A2")}</p>
                    <ul>
                        <li>{t("A2a1")}</li>
                        <li>{t("A2a2")}</li>
                        <li>{t("A2a3")}</li>
                        <li>{t("A2a4")}</li>
                        <li>{t("A2a5")}</li>
                        <li>{t("A2a6")}</li>
                    </ul>
                <br/>

                <p className="FAQ-Question">{t("Q3")}</p>
                <p>{t("A3")}</p>
                    <ul>
                        <li>{t("A3a1")}</li>
                        <li>{t("A3a2")}</li>
                        <li>{t("A3a3")}</li>
                    </ul>
                <br/>
                
                <p className="FAQ-Question">{t("Q4")}</p>
                <p>{t("A4")}</p>                
            </div>

            <div className="faq-footer">
                <Footer />
            </div>
        </div>
    )
}

export default FAQ;