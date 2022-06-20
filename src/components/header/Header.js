import React, {useContext} from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";
import Button from "../button/Button";
import {AuthContext} from "../../context/AuthContext";

function Header() {
    const {isAuth, logout} = useContext(AuthContext);
    return (
        <header>
            <nav>
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
            </nav>
        </header>
    );
}

export default Header;