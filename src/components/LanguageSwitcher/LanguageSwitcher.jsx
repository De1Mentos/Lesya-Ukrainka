import { useLanguage } from "../context/LanguageContext";
import "./LanguageSwitcher.css";

const LanguageSwitcher = () => {
    const { language, changeLanguage } = useLanguage();

    return (
        <select
            value={language}
            onChange={(e) => changeLanguage(e.target.value)}
            className="form-select form-select-sm lang-switcher"
        >
            <option value="en">EN</option>
            <option value="ua">UA</option>
        </select>
    );
};

export default LanguageSwitcher;
