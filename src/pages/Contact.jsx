import React, {useState} from "react";
import "./Contact.css";
//Use Language Components
import { useLanguage } from "../contexts/LanguageContext.jsx";
//Import Components
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
//Lucide Icon
import { Mail, PhoneCall, MapPin, Clock9 } from "lucide-react";
//Import API
import api from "../service/API.jsx";
//Import Custom Alert Style
import CustomAlert from "../customalert/customalert.jsx";

function Contact(){
    const { t } = useLanguage();
    //Custom Alert Style
    const [ showAlert, setShowAlert ] = useState(false);
    const [ alertMessage, setAlertMessage ] = useState("");
    const [ alertType, setAlertType ] = useState("success");

    const handleSubmit = async(e)=>{
        e.preventDefault();

        const netcoreToken = localStorage.getItem("NetCore_Token");
        if(!netcoreToken){
            setAlertMessage("Please login first before submitting an inquiry");
            setAlertType("error");
            setShowAlert(true);
            return;
        }

        const formData = new FormData(e.target);
        const inquiryDatas = {
            fullname: formData.get("fullname"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            jobname: formData.get("jobname"),
            services: formData.getAll("services"),
            estimate: formData.get("estimate"),
            projectdetail: formData.get("projectdetail")
        }
        
        try{
            const res = await api.post("/sendinquiryformdata", inquiryDatas);
            setAlertMessage(res.data.message || "Successful");
            setShowAlert(true);
            setAlertType("success");
            //Clear form after successful submission
            e.target.reset();

        }catch(err){
            setAlertMessage(err.response?.data?.message || err.message || "Something went wrong");
            setAlertType("error");
            setShowAlert(true);
        }

    }

    return(
        <div className="contact-container">
            <div className="contact-top-nav">
                <Navbar />
            </div>

            <div className="contact-main-section">
                <div className="letcontactme">
                    <h2 style={{margin:"10px 0"}}>{t("contactme")}</h2>
                    <h3 style={{margin:"10px 0"}}>{t("letbuild")}</h3>
                    <p>{t("looking")}</p>
                </div>
                <div className="contact-submit-form">
                    <div className="direct-contact">
                        <h3>{t("directcontact")}</h3>
                        <a><Mail size={18}/><p>Email : netcore.office@gmail.com</p></a>
                        <a><PhoneCall size={18}/><p>Phone : +95 09680830173</p></a>
                        <a><MapPin size={18}/><p>Address : No.(563/A), 8-Ward, U Ponya Str, Hlaing Thayar Tsp, Yangon.</p></a>
                        <a><Clock9 size={18}/><p>Working Hours : 9:00AM - 9:00PM</p></a>

                        <div className="map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4330.784541404199!2d96.05688592829146!3d16.87678098491618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smm!4v1788958406678!5m2!1sen!2smm"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                    <div className="inquiry-form">
                        <h3>{t("projectinquiryform")}</h3>
                        <p style={{marginBottom: "15px"}}>Tell me about your project,</p>
                        <form className="formdatas" onSubmit={handleSubmit}>
                            <p>Full name</p>
                            <input
                                type="text"
                                name="fullname"
                            />
                            <p>Email Address</p>
                            <input
                                type="text"
                                name="email"
                            />
                            <p>Phone Number</p>
                            <input
                                type="text"
                                name="phone"
                            />
                            <p>Job/Company/Organization Name</p>
                            <input
                                type="text"
                                name="jobname"
                            />
                            <p style={{marginTop: "13px"}}>Service Required:</p>
                            <div className="servicerequires">
                                <a><input
                                    type="checkbox"
                                    name="services"
                                    value="Web Application / Web Site "
                                />
                                    <p>Web Application / Web Site</p>
                                </a> 
                                <a><input
                                    type="checkbox"
                                    name="services"
                                    value="Mobile Application"
                                />
                                    <p>Mobile Application</p>
                                </a>
                                <a><input
                                    type="checkbox"
                                    name="services"
                                    value="Desktop Application"
                                />
                                    <p>Desktop Application</p>
                                </a>
                                <a><input
                                    type="checkbox"
                                    name="services"
                                    value="UI/UX Design & Custom Software"
                                />
                                    <p>UI/UX Design & Custom Software</p>
                                </a>
                                <a><input
                                    type="checkbox"
                                    name="services"
                                    value="Maintenance & Problem Solving"
                                />
                                    <p>Maintenance & Problem Solving</p>
                                </a>  
                            </div>
                            <p style={{marginTop: "13px"}}>Estimated Budget:</p>
                            <input
                                type="text"
                                name="estimate"
                            />
                            <p style={{marginTop: "13px"}}>Project Details</p>
                            <textarea
                                type="text"
                                name="projectdetail"
                            />
                            <button type="submit" className="send-btn">Submit</button>
                        </form>
                    </div>
                </div>                           
            </div>

            <div className="contact-footer">
                <Footer />
            </div>

            {/*Custom Alert Style Container*/}
            {
                showAlert && (
                    <CustomAlert
                        message={alertMessage}
                        type={alertType}
                        onClose={()=>setShowAlert(false)}
                    />
                )
            }
        </div>
    )
}

export default Contact;