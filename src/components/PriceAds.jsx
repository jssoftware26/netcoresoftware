import React, { useState, useEffect} from "react";
import "./PriceAds.css";

//Import Ads Images
import websiteads from "../assets/adsimages/website-webapplication-ads.jpg";
import mobileads from "../assets/adsimages/mobile-application-ads.jpg";
import desktopads from "../assets/adsimages/desktop-application-ads.jpg";
import customads from "../assets/adsimages/custom-software-ads.jpg";

function PriceAds(){
    const adsImages = [websiteads, mobileads, desktopads, customads ];
    //State for ADS Images slide show
    const [ currentAdsImage, setCurrentAdsImage ] = useState(0);
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentAdsImage((prev)=>
                ( prev + 1 ) % adsImages.length
            );
        }, 3000);
        return ()=> clearInterval(interval);
    }, []);

    return(
        <div className="priceads-container">
            <img src={adsImages[currentAdsImage]} alt="Ads Images"/>
        </div>
    )
}

export default PriceAds;