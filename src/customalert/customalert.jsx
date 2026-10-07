import React, { useEffect } from "react";
import "./customalert.css";

function CustomAlert({message, type="success", onClose}){

    useEffect(()=>{
        const timer = setTimeout(()=>{
            onClose();
        }, 5000);  //close after 5s
        return ()=> clearTimeout(timer);
    }, [onClose]);

    return(
        <div className="alert-overlay">
            <div className={`custom-alert ${type}`}>
                <p>{message}</p>
                <button onClick={onClose}>OK</button>
            </div>
        </div>
    )
}

export default CustomAlert;