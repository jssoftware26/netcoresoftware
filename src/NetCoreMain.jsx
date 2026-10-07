import { createRoot } from "react-dom/client";
import NetCoreRoute from "./NetCoreRoute.jsx";
import "./Theme.css";
//Wrap Theme
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
//Wrap Language
import { LanguageProvider } from "./contexts/LanguageContext.jsx";

createRoot(document.getElementById("root")).render(
    <ThemeProvider>
        <LanguageProvider>
            <NetCoreRoute/>
        </LanguageProvider>        
    </ThemeProvider>
)