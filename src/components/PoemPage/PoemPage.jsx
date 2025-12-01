import React from "react";
import { useTranslation } from "react-i18next";
import TypewriterText from "../TypewriterText";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PoemPage.css";

const PoemPage = ({ pageKey, image }) => {
    const { t } = useTranslation();

    return (
        <div className="container py-5 poem-page">
            <div className="row align-items-start">

                {/* IMAGE LEFT */}
                <div className="col-md-5 text-center">
                    <img
                        src={image}
                        className="img-fluid poem-image"
                        alt={t(`pages.${pageKey}.title`)}
                    />
                </div>

                <div className="col-md-7">
                    <h1 className="poem-title">
                        {t(`pages.${pageKey}.title`)}
                    </h1>

                    <TypewriterText
                        text={t(`pages.${pageKey}.description`)}
                        speed={35}
                    />
                </div>

            </div>
        </div>
    );
};

export default PoemPage;