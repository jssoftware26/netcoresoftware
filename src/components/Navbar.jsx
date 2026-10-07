import React, { useState, useEffect} from "react";
import { NavLink, useNavigate} from "react-router-dom";
import "./Navbar.css";
import netcorelogo from "../assets/netcore-logo.png";
import { Moon, Sun, Menu, X, UserRound, SquareText, LogOut, Mail, Phone} from "lucide-react";
//Use Theme Components
import { useTheme } from "../contexts/ThemeContext.jsx";
//Use Language Components
import { useLanguage } from "../contexts/LanguageContext.jsx";
//API
import api from "../service/API.jsx";

function Navbar(){
    const { theme, toggleTheme } = useTheme();
    const { t } = useLanguage();
    //For Mobile Size Menu Open
    const [ menuOpen, setMenuOpen ] = useState(false);
    //Change Language
    const { language, changeLanguage } = useLanguage("mm");
    //Navigate
    const navigation = useNavigate();
    //Get username from LocalStorage
    const username = localStorage.getItem("NetCore_Username");
    //State For Account Dropdown Menu
    const [ showAccMenu, setShowAccMenu ] = useState(false);
    //State for Fetch Account Datas
    const [ accData, setAccData ] = useState("");

    const handleLogOut = ()=>{
        localStorage.removeItem("NetCore_UserId");
        localStorage.removeItem("NetCore_Token");
        localStorage.removeItem("NetCore_Username");
        window.location.reload();        
    }

    useEffect(()=>{
        const fetchAccDatas = async()=>{
            const res = await api.get("/fetchaccdatas");
            setAccData(res.data);
        }
        fetchAccDatas();
    }, []);

    return(
        <div className="nav-bar-container">
            <nav className="nav-bar">
                {/*============================ Desktop Nav-bar ==========================*/}
                <div className="nav-logo">
                    <NavLink to="/"><img src={netcorelogo} alt="NetCore-Logo"/></NavLink>
                </div>                
                <div className="nav-links">
                    <NavLink to="/services">{t("services")}</NavLink>
                    <NavLink to="/yourinquiry">{t("yourinquiry")}</NavLink>
                    <NavLink to="/aboutme">{t("aboutme")}</NavLink>                    
                    <NavLink to="/contact">{t("contact")}</NavLink>
                    <NavLink to="/faq" className="nav-faq-link">FAQ</NavLink>
                </div>

                <div className="nav-login">
                    <button onClick={()=>changeLanguage(language === "mm" ? "en" : "mm")} className="lang-btn">
                        {language === "mm" ? "EN" : "မြန်မာ"}
                    </button>
                    <a onClick={toggleTheme}>
                        {theme === "light" ? (
                            <><Moon size={20}/></>
                        ):(
                            <><Sun size={20}/></>
                        )}
                    </a>
                    {
                        localStorage.getItem("NetCore_UserId") ? (
                            <span>
                                <a onClick={()=>setShowAccMenu(!showAccMenu)} style={{fontWeight:"bold", fontSize:"18px"}}>
                                    {username}
                                </a>
                                {/*Account Dropdown Menu*/}
                                {showAccMenu && (
                                    <div className="acc-dropdown-menu">
                                        <p>Account Information</p>
                                        <button><UserRound size={20}/>{accData.username}</button>
                                        <button><Mail size={20}/>{accData.emailaddress}</button>
                                        <button><Phone size={20}/>{accData.phonenumber}</button>
                                        <p>Inquiry Information</p>
                                        <button onClick={()=>navigation("/yourinquiry")}><SquareText size={20}/>Your Inquiry</button>
                                        <p>Account Logout</p>
                                        <button onClick={handleLogOut}><LogOut size={20}/>Logout</button> 
                                    </div>
                                )}                                
                            </span>                 
                        ):(
                            <button className="create-btn" onClick={()=>navigation("/createaccount")}>{t("createaccount")}</button>
                        )
                    }
                </div>

                {/*============================ Mobile Nav-bar ==========================*/}
                <div className="mobile-menu">
                    <button onClick={()=>changeLanguage(language === "mm" ? "en" : "mm")} className="lang-btn">
                        {language === "mm" ? "EN" : "မြန်မာ"}
                    </button>
                    <a onClick={toggleTheme}>
                        {theme === "light" ? (
                            <><Moon size={20}/></>
                        ):(
                            <><Sun size={20}/></>
                        )}
                    </a>
                    <button
                        onClick={()=>setMenuOpen(!menuOpen)}
                        className="menu-btn"
                    >
                        {menuOpen ? <X size={25}/> : <Menu size={25}/>}
                    </button>
                </div>        
                {/*Mobile Nav-Links*/}
                {menuOpen && (
                    <div className="mobile-nav-links">
                        {
                            localStorage.getItem("NetCore_UserId") ? (
                                <div className="mobile-nav-items">
                                    <p style={{
                                        marginBottom: "22px",
                                        fontWeight: "bold",
                                        fontSize: "18px"
                                    }}>
                                        {username}
                                    </p>
                                    <a><Mail size={20}/>{accData.emailaddress}</a>
                                    <a><Phone size={20}/>{accData.phonenumber}</a>
                                    <a onClick={()=>navigation("/yourinquiry")}>
                                        <SquareText size={20}/>Your Inquiry
                                    </a>
                                    <a onClick={handleLogOut}>
                                        <LogOut size={20}/>Logout
                                    </a>                                    
                                </div>
                            ):(
                                <button className="create-btn" onClick={()=>navigation("/createaccount")}>{t("createaccount")}</button>
                            )
                        }                        
                        <NavLink to="/services">{t("services")}</NavLink>
                        <NavLink to="/yourinquiry">{t("yourinquiry")}</NavLink>
                        <NavLink to="/aboutme">{t("aboutme")}</NavLink>                     
                        <NavLink to="/contact">{t("contact")}</NavLink>
                        <div style={{
                            borderTop: "0.5px solid gray",
                            paddingTop: "30px"
                        }}>
                            <NavLink to="/faq">FAQ</NavLink>
                        </div>                        
                    </div>
                )}
            </nav>
        </div>
    )
}

export default Navbar;