import React, { useState } from "react";
import "./LoginAccount.css";
import { Link, useNavigate} from "react-router-dom";
import { ArrowLeft, Eye, EyeClosed } from "lucide-react";
//Import Assets images
import map from "../assets/map.png";
import netcorelogo from "../assets/netcore-logo.png";
//Import Custom Alert Style
import CustomAlert from "../customalert/customalert.jsx";
//Import API
import api from "../service/API.jsx";

function LoginAccount(){
    //Custom Alert Style
    const [ showAlert, setShowAlert ] = useState(false);
    const [ alertMessage, setAlertMessage ] = useState("");
    const [ alertType, setAlertType ] = useState("success");
    //State for create account input datas
    const [ input, setInput ] = useState({ emailaddress: "", password: ""});
    //Hide/Show Password InputBox
    const [ showPassword, setShowPassword ] = useState(false);
    //Navigation
    const navigate = useNavigate();

    const handleChange = (e)=>{
        setInput({...input, [e.target.name]:e.target.value});
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();

        try{
            const res = await api.post("/loginaccount", {
                emailaddress: input.emailaddress, password: input.password
            });
            localStorage.setItem("NetCore_Token", res.data.accessToken);            
            localStorage.setItem("NetCore_UserId", res.data.user.id);
            //Separate to username only from res.data.user.id for account profile name
            localStorage.setItem("NetCore_Username", res.data.user.username);

            setAlertMessage(res.data.message || "Successful");
            setAlertType("success");
            setShowAlert(true);

            //Navigate after showing the alert
            setTimeout(()=>{
                navigate("/");
            }, 2000);

        }catch(err){
            setAlertMessage(err.response?.data?.message || err.message || "Something went wrong");
            setAlertType("error");
            setShowAlert(true);
        }
    }
    

    return(
        <div className="login-account-container">
            <div className="login-account-card">
                <div className="login-logo">
                    <div className="back-to-home">
                        <ArrowLeft size={20}/><Link to="/">Back To Home Page</Link>
                    </div>
                    <img className="netcore-img" src={netcorelogo} alt="NetCore Logo" />
                    <p>BEST CHOICE FOR YOURS BUSINESS</p>                    
                    <img className="map-img" src={map} alt="Myanmar Map Background" />
                </div>
                <div className="login-form">          
                    <h1>Login Account</h1>
                    <div className="alreadyhave">
                        <p>I don't have an account?</p>
                        <Link to="/createaccount">create account</Link>                        
                    </div>
                    <form onSubmit={handleSubmit} className="input-form-datas">                        
                        <input
                            type="text"
                            placeholder="Email Address"
                            name="emailaddress"
                            value={input.emailaddress}
                            onChange={handleChange}
                            maxLength={40}
                            required
                        />
                        <input
                            type={showPassword? "text" : "password"}
                            placeholder="Password"
                            name="password"
                            value={input.password}
                            onChange={handleChange}
                            maxLength={10}
                            required
                        />
                        <span className="logintoggle-password" onClick={()=>setShowPassword(!showPassword)}>
                            {!showPassword? <EyeClosed size={20}/> : <Eye size={20}/>}
                        </span>
                        <button type="submit">Login</button>
                    </form>                   
                </div>
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

export default LoginAccount;