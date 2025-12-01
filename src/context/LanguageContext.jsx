import { createContext, useContext, useState } from "react";
import i18n from "../i18n/i18n";

export const LanguageContext = createContext({
    language: "en",
    changeLanguage: () => {},
});

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(localStorage.getItem("lang") || "en");

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setLanguage(lang);
        localStorage.setItem("lang", lang);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
