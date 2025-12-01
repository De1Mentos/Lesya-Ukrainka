import React from "react";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./InfoPage.css";

const InfoPage = ({ pageKey, image }) => {
    const { t } = useTranslation();

    return (
        <div className="container py-5 info-page">
            <div className="row align-items-start">

                <div className="col-md-5 text-center">
                    <img
                        src={image}
                        className="img-fluid info-image"
                        alt={t(`pages.${pageKey}.title`)}
                    />
                </div>

                <div className="col-md-7">
                    <h1 className="info-title">{t(`pages.${pageKey}.title`)}</h1>

                    <p className="info-text">
                        {t(`pages.${pageKey}.description`)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InfoPage;
