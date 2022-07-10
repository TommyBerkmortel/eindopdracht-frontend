import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import Button from "../../components/button/Button";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";

function Login({togglePopup, setPopupText}) {
    const {login} = useContext(AuthContext);
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const result = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
                username: username,
                password: password
            })
            login(result.data.accessToken);
            togglePopup(true);
            setPopupText("Je bent succesvol ingelogd!");
        } catch (e) {
            console.error(e);
            togglePopup(true);
            setPopupText("De combinatie gebruikersnaam/wachtwoord is niet juist!");
        }
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