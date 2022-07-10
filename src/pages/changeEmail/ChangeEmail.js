import React, {useState} from 'react';
import Button from "../../components/button/Button";
import axios from "axios";
import {useHistory} from "react-router-dom";

function ChangePassword({togglePopup, setPopupText}) {
    const [email, setEmail] = useState('');
    const jwt = localStorage.getItem("token");
    const history = useHistory()

    async function changePassword(e) {
        e.preventDefault();
        try {
            await axios.put('https://frontend-educational-backend.herokuapp.com/api/user', {
                email: email
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwt}`,
                }
            })
            history.push("/barbeque-score")
            togglePopup(true);
            setPopupText("Uw gebruikersnaam is gewijzigd!");
        } catch (e) {
            console.error(e);
            togglePopup(true);
            setPopupText("Er is iets mis gegaan! Probeer het opnieuw.");
        }
    }
    return (
        <div className="content">
            <h1>Wijzig e-mailadres</h1>
            <form className="registration-form" onSubmit={changePassword}>
                <label htmlFor="details-email">
                    <p>Nieuw e-mailadres</p>
                    <input
                        type="email"
                        id="details-email"
                        onChange={(event) => setEmail(event.target.value)}
                        value={email}
                        name="details-email"
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