import React from 'react';
import logo from "../../assets/images/BBQ logo.png";
import {Link} from "react-router-dom";
import './Logo.css'

function Logo() {
    return (

            <span className="logo-container"><Link to="/"><img src={logo} alt="logo"/></Link></span>
    );
}

export default Logo;