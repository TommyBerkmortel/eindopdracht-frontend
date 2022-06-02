import React from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <header className="outer-container">
            <div className="inner-container">
                <ul>
                    {/*<li><NavLink to="/" activeClassName="active-link">Barbeque-score</NavLink></li>
                    <li><NavLink to="/" activeClassName="active-link">Recepten</NavLink></li>
                    <li><NavLink to="/" activeClassName="active-link">Tips & tricks</NavLink></li>
                    <li><NavLink to="/" activeClassName="active-link">Contact</NavLink></li>
                    <li><NavLink to="/" activeClassName="active-link">Registreren</NavLink></li>*/}
                </ul>
            </div>
        </header>
    );
}

export default Header;