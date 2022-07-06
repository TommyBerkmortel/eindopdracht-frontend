import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from "axios";
import Tile from "../components/tiles/Tile";
import {useForm} from "react-hook-form";

function SignUp() {

    const {register, handleSubmit, formState: {errors}} = useForm()
    const history = useHistory()

    async function onFormSubmit(data) {


        try {
            const check = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup',
                {
                    email: data.emailId,
                    password: data.passwordId,
                    username: data.userId,
                })
            history.push('/signin')
            console.log(check)

        } catch (data) {
            console.error(data)
        }
    }


    return (
        <>
            <h2>Registreren</h2>

            <div className="GeneralPage">

                <Tile title="Registratie gegevens"
                      colspan={3}
                      rowspan={3}>
                    <p>Voeg je toe aan ons groeiende aantal ZonneZoekers!</p>
                    <p>In onderstaande privacyverklaring wordt uitgelegd welke gegevens worden verwerkt, wat er met uw
                        gegevens wordt gedaan en welke rechten u heeft. ZonneZoeker verzamelt slechts tot personen
                        herleidbare informatie die uitdrukkelijk en vrijwillig door de bezoeker ter beschikking is
                        gesteld.</p>

                    <p>Wil je weten wat we doen aan je privacy? Je kunt onze privacy verklaring <Link
                        to="/privacy">hier</Link> inzien.</p>

                    <form onSubmit={handleSubmit(onFormSubmit)}>
                        <fieldset>
                            <legend>Gegevens</legend>

                            <label htmlFor="details-email">
                                email adres:
                                <input
                                    type="email"
                                    id="details-email"
                                    {...register("emailId", {
                                        required: {
                                            value: true,
                                            message: "Dit veld is verplicht!"
                                        },
                                    })}
                                />
                                {errors.emailId && <p>{errors.emailId.message}</p>}
                            </label>

                            <label htmlFor="details-password">
                                Wachtwoord:
                                <input
                                    type="password"
                                    id="details-password"
                                    {...register("passwordId", {
                                        required: {
                                            value: true,
                                            message: "Dit veld is verplicht!"
                                        },
                                        minLength: {
                                            value: 3,
                                            message: "Moet minimaal 3 karakters lang zijn!"
                                        }
                                    })}
                                />
                                {errors.passwordId && <p>{errors.passwordId.message}</p>}
                            </label>

                            <label htmlFor="details-userName">
                                Gebruikersnaam:
                                <input
                                    type="text"
                                    id="details-userName"
                                    {...register("userId", {
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
                                {errors.userId && <p>{errors.userId.message}</p>}
                            </label>
                            <button
                                type="submit">
                                Versturen
                            </button>
                        </fieldset>
                    </form>

                    <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>

                </Tile>
            </div>
        </>
    );
}

export default SignUp;