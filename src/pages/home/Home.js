import React from 'react';
import './Home.css'
import Button from "../../components/button/Button";
import {useHistory} from "react-router-dom";

function Home() {
    const history = useHistory()

    return (
        <>
            <section className="home-content">
                <h1>Welkom!</h1>
                <p>Vind jij het ook lastig om te beoordelen of vandaag, morgen of misschien een dag ergens volgende week
                    de
                    juiste ingrediënten bevat om lekker te kunnen barbecuen. Of ben je gewoon benieuwd wanneer de
                    eerstvolgende dag is wanneer je jouw heerlijke barbeque gerechten kan laten proeven aan
                    vrienden/familie?</p>
                <p>Registreer en log in voor de barbeque-score, recepten en de tips & tricks pagina's!</p>
                <Button
                    type="button"
                    clickAction={() => history.push('/registratie')}
                >
                    registreren
                </Button>
            </section>
        </>
    );
}

export default Home;