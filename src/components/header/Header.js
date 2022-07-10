import React, {useContext, useState} from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";
import Button from "../button/Button";
import {AuthContext} from "../../context/AuthContext";

function Header({togglePopup, setPopupText}) {
    const {isAuth, logout} = useContext(AuthContext);
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 70) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);

    function logoutActions() {
        logout();
        togglePopup(true);
        setPopupText("Je bent succesvol uitgelogd!");
    }
    return (
        <header className={navbar ? 'navbar active' : 'navbar'}>
            <nav>
                <ul className="ul-container">

                    <li><NavLink to="/barbeque-score" activeClassName="active-link">
                        <span className="full-text">Barbeque-score</span>
                        <span className="short-text">BBQ-score</span>
                    </NavLink></li>
                    <li><NavLink to="/recepten" activeClassName="active-link">Recepten</NavLink></li>
                    <li><NavLink to="/tips-tricks" activeClassName="active-link">Tips & tricks</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="active-link">Contact</NavLink></li>
                    {isAuth ?
                        <li>
                            <Button
                                type="button"
                                clickAction={logoutActions}
                            >
                                uitloggen
                            </Button>
                        </li>
                        :
                        <li><NavLink to="/login" activeClassName="active-link">inloggen</NavLink></li>
                    }
                </ul>
            </nav>
        </header>
    );
}

export default Header;