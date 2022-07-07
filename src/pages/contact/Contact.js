import React from 'react';
import Button from "../../components/button/Button";
import './Contact.css'
import { useForm } from "react-hook-form";


function Contact({togglePopup, setPopupText}) {
    const {register, handleSubmit, formState: {errors}} = useForm();

    function onFormSubmit(data) {
        console.log(data);
        togglePopup(true);
        setPopupText("Het contact formulier is (zogenaamd) verstuurd!")

    }

    return (
        <div className="content">
            <h1>Contact</h1>
            <form className="registration-form" onSubmit={handleSubmit(onFormSubmit)}>


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

                <label htmlFor="details-message">
                    <p>Bericht (verplicht)</p>
                    <textarea
                        type="text"
                        id="details-message"
                        rows="10"
                        cols="50"
                        {...register("message", {
                            required: {
                                value: true,
                                message: "Dit veld is verplicht!"
                            },
                        })}
                    />
                    {errors.message && <p className="form-error">{errors.message.message}</p>}
                </label>


                <label htmlFor="details-websiteLink">
                    <p>Link naar een website (optie)</p>
                    <input
                        type="url"
                        id="details-websiteLink"
                        {...register("url")}
                    />
                </label>



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

export default Contact;