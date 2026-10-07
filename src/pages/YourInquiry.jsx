import React, {useState, useEffect} from "react";
import "./YourInquiry.css";
//Import Components
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import api from "../service/API.jsx";
import PriceAds from "../components/PriceAds.jsx";
//Import Custom Alert Style
import CustomAlert from "../customalert/customalert.jsx";

function YourInquiry(){
    const [ inquiryData, setInquiryData ] = useState([]);

    //State for Custom Alert
    const [ showAlert, setShowAlert ] = useState(false);
    const [ alertMessage, setAlertMessage ] = useState("");
    const [ alertType, setAlertType ] = useState("success");

    useEffect(()=>{
        const fetchInquiryData = async()=>{
            const res = await api.get("/fetchinquirydatas");
            setInquiryData(res.data);
        }
        fetchInquiryData();
    }, []);

    //Clear Inuqiry History
    const clearInquiryHistory = async()=>{
        try{
            const res = await api.delete("/clearinquiryhistory");
            setAlertMessage(res.data.message);
            setAlertType("success");
            setShowAlert(true);
            
            setInquiryData([]);
        }catch(err){
            setAlertMessage(err.response?.data?.message || err.message || "Something went wrong");
            setAlertType("error");
            setShowAlert(true);
        }
    }

    return(
        <div className="yourinquiry-container">
            <div className="yourinquiry-top-nav">
                <Navbar />
            </div>

            <div className="yourinquiry-main-section">
                <div className="prices-ads">
                    <PriceAds />
                </div>
                <div className="inquiry-records-titlebar">
                    <h3>Your Inquiry History</h3>
                    <button onClick={clearInquiryHistory}>Clear History</button>
                </div>
                <div className="inquiry-records">
                    {inquiryData && inquiryData.length > 0? (
                        inquiryData.map((inquiry, index)=>(
                            <div className="inquiry-record-card" key={inquiry._id}>
                                <h3>Inquiry #{index + 1}</h3>
                                <p>Date: {new Date(inquiry.createdAt).toLocaleDateString()}</p>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Full Name</td>
                                            <td>{inquiry.fullname}</td>
                                        </tr>
                                        <tr>
                                            <td>Email Address</td>
                                            <td>{inquiry.email}</td>
                                        </tr>
                                        <tr>
                                            <td>Phone Number</td>
                                            <td>{inquiry.phone}</td>
                                        </tr>
                                        <tr>
                                            <td>Job/Company/Organization Name</td>
                                            <td>{inquiry.jobname}</td>
                                        </tr>
                                        <tr>
                                            <td>Service Required:</td>
                                            <td>{inquiry.services.join(", ")}</td>
                                        </tr>
                                        <tr>
                                            <td>Estimated Budget</td>
                                            <td>{inquiry.estimate} MMK</td>
                                        </tr>
                                        <tr>
                                            <td>Project Details</td>
                                            <td>{inquiry.projectdetail}</td>
                                        </tr>
                                    </tbody>
                                </table>                            
                            </div>
                        ))
                    ):(
                        <p className="nothinginquiry">Nothing in your inquiry history here!</p>
                    )}                    
                </div>
            </div>

            <div>
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

export default YourInquiry;