import React, {useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import './Registreren.css'
import Button from "../../components/button/Button";
import axios from "axios";

function Registreren() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(username, email, password);

        try {
            const result = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup',
                {
                    "username": username,
                    "email" : email,
                    "password" : password,
                    "role": ["user"]
                })
            console.log(result);
            history.push("/login");
            console.log("De gebruiker is ingelogd op de server en ontvangt een token")
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div className="content">
            <h1>Registreren</h1>
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

                <label htmlFor="details-email">
                    <p>Emailadres</p>
                    <input
                        type="email"
                        id="details-email"
                        onChange={(event) => setEmail(event.target.value)}
                        value={email}
                        name="details-email"
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

                <p>Heb je al een account? Je kunt je <Link to="/login">hier</Link> inloggen.</p>
                <div className="button-container">
                    <Button
                        type="submit"
                    >
                        Verzenden
                    </Button>
                </div>
            </form>


        </div>
    );
}

export default Registreren;