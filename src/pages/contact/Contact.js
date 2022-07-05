import React, {useState}  from 'react';
import Button from "../../components/button/Button";
import './Contact.css'


function Contact() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [websiteLink, setWebsiteLink] = useState('');


    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className="content">
            <h1>Contact</h1>
            <form className="registration-form" onSubmit={handleSubmit}>


                <label htmlFor="details-email">
                    <p>Emailadres (verplicht)</p>
                    <input
                        type="email"
                        id="details-email"
                        onChange={(event) => setEmail(event.target.value)}
                        value={email}
                        name="details-email"
                    />
                </label>

                <label htmlFor="details-message">
                    <p>Bericht (verplicht)</p>
                    <textarea
                        type="text"
                        id="details-message"
                        onChange={(event) => setMessage(event.target.value)}
                        value={message}
                        name="details-message"
                        rows="10"
                        cols="50"
                    />
                </label>

                <label htmlFor="details-websiteLink">
                    <p>Link naar een website (optie)</p>
                    <input
                        type="url"
                        id="details-websiteLink"
                        onChange={(event) => setWebsiteLink(event.target.value)}
                        value={websiteLink}
                        name="details-websiteLink"
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