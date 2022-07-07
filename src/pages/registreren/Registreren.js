import React from 'react';
import {Link, useHistory} from "react-router-dom";
import './Registreren.css'
import Button from "../../components/button/Button";
import axios from "axios";
import { useForm } from "react-hook-form";

function Registreren({togglePopup, setPopupText}) {
    const history = useHistory();
    const {register, handleSubmit, formState: {errors}} = useForm();

    async function onFormSubmit(data) {
        try {
            await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup',
                {
                    "username": data.username,
                    "email" : data.email,
                    "password" : data.password,
                    "role": ["user"]
                })
            history.push("/login");
            togglePopup(true);
            setPopupText("Je bent succesvol geregistreerd!");
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div className="content">
            <h1>Registreren</h1>
            <form className="registration-form" onSubmit={handleSubmit(onFormSubmit)}>

                <label htmlFor="details-username">
                    <p>Gebruikersnaam</p>
                    <input
                        type="text"
                        id="details-username"
                        {...register("username", {
                            required: {
                                value: true,
                                message: "Dit veld is verplicht!"
                            },
                            minLength: {
                                value: 6,
                                message: "Dit veld moet minimaal 6 karakters lang zijn!"
                            }
                        })}
                    />
                    {errors.username && <p className="form-error">{errors.username.message}</p>}
                </label>

                <label htmlFor="details-email">
                    <p>Emailadres</p>
                    <input
                        type="email"
                        id="details-email"
                        {...register("email", {
                            required: {
                                value: true,
                                message: "Dit veld is verplicht!"
                            },
                        })}
                    />
                    {errors.email && <p className="form-error">{errors.email.message}</p>}
                </label>

                <label htmlFor="details-password">
                    <p>Wachtwoord</p>
                    <input
                        type="password"
                        id="details-password"
                        {...register("password", {
                            required: {
                                value: true,
                                message: "Dit veld is verplicht!"
                            },
                            minLength: {
                                value: 6,
                                message: "Dit veld moet minimaal 6 karakters lang zijn!"
                            }
                        })}
                    />
                    {errors.password && <p className="form-error">{errors.password.message}</p>}
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