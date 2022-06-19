import React from 'react';
import './Home.css'
import Button from "../../components/button/Button";
import {useHistory} from "react-router-dom";

function Home() {
    const history = useHistory()
    return (
        <>
            <section className="content">
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

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, enim expedita fuga harum nam non officia quidem sit vitae voluptas. Corporis cum eaque eligendi est excepturi exercitationem harum hic illo ipsa iste magni minus, nisi odit quisquam quos reiciendis repellat saepe sed tempora tenetur vitae voluptas voluptatem voluptatibus? A aliquid amet animi at deleniti dolores, excepturi, exercitationem expedita facilis fuga id in iusto labore laboriosam laborum libero, magni modi molestiae molestias nam necessitatibus neque nesciunt nihil nobis odio odit porro quaerat quibusdam quo sequi tempora temporibus vero voluptates. Adipisci, ea esse excepturi impedit necessitatibus quo ratione sit veniam! Laudantium, sapiente.
                </p>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, enim expedita fuga harum nam non officia quidem sit vitae voluptas. Corporis cum eaque eligendi est excepturi exercitationem harum hic illo ipsa iste magni minus, nisi odit quisquam quos reiciendis repellat saepe sed tempora tenetur vitae voluptas voluptatem voluptatibus? A aliquid amet animi at deleniti dolores, excepturi, exercitationem expedita facilis fuga id in iusto labore laboriosam laborum libero, magni modi molestiae molestias nam necessitatibus neque nesciunt nihil nobis odio odit porro quaerat quibusdam quo sequi tempora temporibus vero voluptates. Adipisci, ea esse excepturi impedit necessitatibus quo ratione sit veniam! Laudantium, sapiente.
                </p>

            </section>

        </>
    );
}

export default Home;