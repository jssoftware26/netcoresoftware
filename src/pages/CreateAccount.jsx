import React, { useState } from "react";
import "./CreateAccount.css";
import { Link, useNavigate} from "react-router-dom";
import { ArrowLeft, Eye, EyeClosed } from "lucide-react";
//Import Assets images
import map from "../assets/map.png";
import netcorelogo from "../assets/netcore-logo.png";
//Import API
import api from "../service/API.jsx";
//Import CustomAlert Style
import CustomAlert from "../customalert/customalert.jsx";

function CreateAccount(){
    //State for show Verify Form
    const [ showVerify, setShowVerify ] = useState(false);
    //State for create account input datas
    const [ input, setInput ] = useState({
        username: "", emailaddress: "", password: "", phonenumber: ""
    })
    //State for verify OTP Code input and email address
    const [ otp , setOTP ] = useState("");
    //Navigation
    const navigate = useNavigate();

    //Custom Alert Style
    const [ showAlert, setShowAlert ] = useState(false);
    const [ alertMessage, setAlertMessage ] = useState("");
    const [ alertType, setAlertType ] = useState("success");

    //Hide/Show Password InputBox
    const [ showPassword, setShowPassword ] = useState(false);


    const handleChange = (e)=>{
        const { name, value } = e.target;
        if(name === "phonenumber"){
            const onlyNumbers = value.replace(/\D/g, "");
            setInput({...input, [name]:onlyNumbers});
            return;
        }
        //Not Allow special characters
        const specialCharRegex = /[~!$%^&*()\-_=``+{}\\|":;?\/<>]/;
        if(specialCharRegex.test(value)){
            setAlertMessage("Special characters are not allowed");
            setAlertType("error");
            setShowAlert(true);
            return;
        }
        setInput({...input, [name]:value});
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{            
            //Check password must be at least 6 characters
            if(input.password.length < 6){
                setAlertMessage("Password must be at least 6 characters");
                setAlertType("error");
                setShowAlert(true);
                return;
            }            
            //Check phonenumber must contain at least 11 digits
            if(!/^\d{11,}$/.test(input.phonenumber)){
                setAlertMessage("Phone Number must contain at least 11 digits");
                setAlertType("error");
                setShowAlert(true);
                return;
            }

            const res = await api.post("/createaccount", {
                username: input.username,
                emailaddress: input.emailaddress,
                password: input.password,
                phonenumber: input.phonenumber
            });            
            setAlertMessage(res.data.message);
            setAlertType("success");
            setShowAlert(true);

            //Show Verify Page
            setShowVerify(true);
        }catch(err){
            setAlertMessage(err.response?.data?.message || err.message || "Something went wrong");
            setAlertType("error");
            setShowAlert(true);
        }        
    }

    const handleBackToCreate = ()=>{
        setShowVerify(false);
    }

    //OTP Verify
    const handleVerifyOTP = async()=>{
        try{
            if(otp.length !== 6){
                setAlertMessage("Please enter 6-digit OTP");
                setAlertType("error");
                setShowAlert(true);
                return
            }
            const res = await api.post("/verifyotp", {
                username: input.username,
                emailaddress: input.emailaddress,
                password: input.password,
                phonenumber: input.phonenumber,
                otp: otp
            });
            setAlertMessage(res.data.message);
            setAlertType("success");
            setShowAlert(true);

            //Navigate after showing the alert
            setTimeout(()=>{
                navigate("/loginaccount");
            }, 2000);

        }catch(err){
            setAlertMessage(err.response?.data?.message || err.message || "Something went wrong");
            setAlertType("error");
            setShowAlert(true);           
        }
    }
    

    return(
        <div className="create-account-container">
            <div className="create-account-card">
                <div className="create-logo">
                    <div className="back-to-home">
                        <ArrowLeft size={20}/><Link to="/">Back To Home Page</Link>
                    </div>
                    <img className="netcore-img" src={netcorelogo} alt="NetCore Logo" />
                    <p>BEST CHOICE FOR YOURS BUSINESS</p>                    
                    <img className="map-img" src={map} alt="Myanmar Map Background" />
                </div>
                <div className="create-form">                    
                    {!showVerify ? (
                        <>
                            <h1>Create Account</h1>
                            <div className="alreadyhave">
                                <p>Already have an account?</p>
                                <Link to="/loginaccount">Login</Link>                        
                            </div>
                            <form onSubmit={handleSubmit} className="input-form-datas">
                                <input
                                    type="text"
                                    name="username"
                                    value={input.username}
                                    onChange={handleChange}
                                    placeholder="Username"
                                    autoFocus
                                    maxLength={35}
                                    required
                                />
                                <input
                                    type="text"
                                    name="emailaddress"
                                    value={input.emailaddress}
                                    onChange={handleChange}
                                    placeholder="Email Address"
                                    maxLength={40}
                                    required
                                />
                                <input
                                    type={showPassword? "text" : "password"}
                                    name="password"
                                    value={input.password}
                                    onChange={handleChange}
                                    placeholder="Password"
                                    maxLength={10}
                                    required
                                />
                                <span className="createtoggle-password" onClick={()=>setShowPassword(!showPassword)}>
                                    {!showPassword? <EyeClosed size={20}/> : <Eye size={20}/>}
                                </span>
                                <input
                                    type="text"
                                    name="phonenumber"
                                    value={input.phonenumber}
                                    onChange={handleChange}
                                    placeholder="Phone Number"                                    
                                    maxLength={11}                                    
                                    required
                                />
                                <button type="submit">Create</button>
                            </form>
                        </>
                    ):(
                        <>                           
                            <div className="backtocreatebtn">
                                <button onClick={handleBackToCreate}>Back to Create</button>
                            </div>
                            <h1>Please verify your email</h1>
                            <p style={{marginTop: "20px", textAlign:"center", color:"var(--second-text)"}}>
                                You're almost there! We sent 6 Digits OTP code to {""}<strong>{input.emailaddress}</strong>.
                                please check in your email's inbox and then enter to complete your create account.
                            </p>
                            <div className="otp-inputs">
                                <input
                                    type="text"
                                    placeholder="------"
                                    inputMode="numeric"
                                    autoFocus
                                    maxLength={6}
                                    name="otp"
                                    value={otp}
                                    onChange={(e)=>{
                                        const value = e.target.value;
                                        //Allow numbers only
                                        if(/^\d*$/.test(value)){
                                            setOTP(value);
                                        }
                                    }}
                                />                                                                
                            </div>                            
                            <button
                                className="otp-verify-btn"
                                onClick={handleVerifyOTP}
                            >
                                Verify
                            </button>
                        </>
                    )}
                </div>
            </div>
            {/*Custom Alert Style Container*/}
            {
                showAlert && (
                    <CustomAlert
                        message={alertMessage}
                        type={alertType}
                        onClose={()=> setShowAlert(false)}
                    />
                )                
            }
        </div>
    )
}

export default CreateAccount;