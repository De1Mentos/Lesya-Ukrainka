import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { appRoutes } from "../../routes/routes";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import "./Navbar.css";

const Navbar = () => {
    const { t } = useTranslation();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-3 py-2">

            <NavLink className="navbar-brand fw-bold" to="/">
                Lesya Ukrainka
            </NavLink>

            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">

                    {appRoutes.map((route) =>
                            route.showInMenu && (
                                <li key={route.path} className="nav-item">
                                    <NavLink
                                        to={route.path}
                                        className={({ isActive }) =>
                                            "nav-link px-3" + (isActive ? " active-nav-link fw-bold" : "")
                                        }
                                    >
                                        {t(`pages.${route.i18nKey}.nav`)}
                                    </NavLink>
                                </li>
                            )
                    )}

                    <li className="nav-item ms-3 d-flex align-items-center">
                        <LanguageSwitcher />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
