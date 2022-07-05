import React, {useContext, useState} from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";
import Button from "../button/Button";
import {AuthContext} from "../../context/AuthContext";

function Header() {
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

    return (
        <header className={navbar ? 'navbar active' : 'navbar'}>
            <nav>

                <div id="normalMenu">
                <ul>
                    <li><NavLink to="/barbeque-score" activeClassName="active-link">Barbeque-score</NavLink></li>
                    <li><NavLink to="/recepten" activeClassName="active-link">Recepten</NavLink></li>
                    <li><NavLink to="/tips-tricks" activeClassName="active-link">Tips & tricks</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="active-link">Contact</NavLink></li>
                    {isAuth ?
                        <li>
                            <Button
                                type="button"
                                clickAction={logout}
                            >
                                uitloggen
                            </Button>
                        </li>
                        :
                        <li><NavLink to="/login" activeClassName="active-link">inloggen</NavLink></li>
                    }
                </ul>
                </div>

                {/*<div id="menuToggle">
                    <input type="checkbox" />

                    <span></span>
                    <span></span>
                    <span></span>

                    <ul id="menu">
                        <li><NavLink to="/barbeque-score" activeClassName="active-link">Barbeque-score</NavLink></li>
                        <li><NavLink to="/recepten" activeClassName="active-link">Recepten</NavLink></li>
                        <li><NavLink to="/tips-tricks" activeClassName="active-link">Tips & tricks</NavLink></li>
                        <li><NavLink to="/contact" activeClassName="active-link">Contact</NavLink></li>
                    </ul>
                </div>*/}
            </nav>
        </header>
    );
}

export default Header;