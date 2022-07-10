import React, {useState} from 'react';
import Button from "../../components/button/Button";
import axios from "axios";
import {useHistory} from "react-router-dom";

function ChangePassword({togglePopup, setPopupText}) {
    const [password, setPassword] = useState('');
    const [repeatedPassword, setRepeatedPassword] = useState('');
    const jwt = localStorage.getItem("token");
    const history = useHistory()

    async function changePassword(e) {
        e.preventDefault();
        try {
            await axios.put('https://frontend-educational-backend.herokuapp.com/api/user', {
                password: password,
                repeatedPassword: repeatedPassword
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwt}`,
                }
            })
            history.push("/barbeque-score");
            togglePopup(true);
            setPopupText("Uw wachtwoord is gewijzigd!");
        } catch (e) {
            console.error(e);
            togglePopup(true);
            setPopupText("Er is iets mis gegaan! U dient 2x hetzelfde wachtwoord in te vullen");
        }
    }

    return (
        <div className="content">
            <h1>Wijzig wachtwoord</h1>
            <form className="registration-form" onSubmit={changePassword}>
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

                <label htmlFor="details-repeatedPassword">
                    <p>Herhaal wachtwoord</p>
                    <input
                        type="password"
                        id="details-repeatedPassword"
                        onChange={(event) => setRepeatedPassword(event.target.value)}
                        value={repeatedPassword}
                        name="details-repeatedPassword"
                    />
                </label>

                <div className="button-container">
                    <Button
                        type="submit"
                    >
                        Wijzig
                    </Button>
                    <Button
                        type="button"
                        clickAction={() => history.push("/barbeque-score")}
                    >
                        Annuleren
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default ChangePassword;