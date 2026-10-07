import { createContext, useContext, useState } from "react";

//Import Language files
import en from "../languages/en.js";
import mm from "../languages/mm.js";

const languages = { en, mm };

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) =>{
    const [ language, setLanguage ] = useState(
        localStorage.getItem("language") || "mm"
    );
    const changeLanguage = (lang) =>{
        setLanguage(lang);
        localStorage.setItem("language", lang);
    };

    const t = (key)=>{
        return languages[language][key] || key;
    };

    return(
        <LanguageContext.Provider
            value={{
                language, changeLanguage, t
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = ()=>{
    return useContext(LanguageContext);
};