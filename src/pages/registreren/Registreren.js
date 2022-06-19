import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './Registreren.css'
import Button from "../../components/button/Button";

function Registreren() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        console.log(username, email, password);
    }

    return (
        <div className="content">
            <h1>Registreren</h1>
            <form className="registration-form" onSubmit={handleSubmit}>

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