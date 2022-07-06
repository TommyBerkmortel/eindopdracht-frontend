import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import Button from "../../components/button/Button";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";

function Login({togglePopup, setPopupText}) {
    const { login } = useContext(AuthContext);
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        console.log(username, password);
        login()
    }
    return (
        <div className="content">
            <h1>inloggen</h1>
            <form className="registration-form" onSubmit={handleSubmit}>

                <label htmlFor="details-username">
                    <p>Gebruikersnaam</p>
                    <input
                        type="text"
                        id="details-username"
                        onChange={(event) => setUsername(event.target.value)}
                        value={username}
                        name="details-username"
                    />
                </label>

                <label htmlFor="details-password">
                    <p>Wachtwoord</p>
                    <input
                        type="password"
                        id="details-password"
                        onChange={(event) => setPassword(event.target.value)}
                        value={password}
                        name="details-password"
                    />
                </label>

                <p>Heb je nog geen account? Je kunt je <Link to="/registratie">hier</Link> registreren.</p>
                <div className="button-container">
                    <Button
                        type="submit"
                    >
                        Inloggen
                    </Button>
                </div>
            </form>


        </div>
    );
}

export default Login;