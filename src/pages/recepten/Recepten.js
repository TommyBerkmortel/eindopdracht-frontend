import React from 'react';
import './Recepten.css';
import imageOne from '../../assets/images/Tatakisalade van diamanthaas.png';
import imageTwo from '../../assets/images/Bavette van de barbeque.png';
import imageThree from '../../assets/images/Pulled pork.png';
import imageFour from '../../assets/images/Kalfskebab.png';
import imageFive from '../../assets/images/Varkenshaas sate.png';
import imageSix from '../../assets/images/Rundvlees burger.png';
import ArticleRecipe from "../../components/articleRecipe/ArticleRecipe";

function Recepten() {
    return (
        <section className="content">
            <h1>Recepten</h1>
            <div className="article-container">
                <ArticleRecipe
                    title="Tatakisalade van diamanthaas"
                    picture={imageOne}
                />

                <ArticleRecipe
                    title="Bavette van de barbecue"
                    picture={imageTwo}
                />

                <ArticleRecipe
                    title="pulled pork met chimichurri saus"
                    picture={imageThree}
                />

                <ArticleRecipe
                    title="Kruidige kalfskebab"
                    picture={imageFour}
                />

                <ArticleRecipe
                    title="Varkenshaas saté van de barbeque"
                    picture={imageFive}
                />

                <ArticleRecipe
                    title="Rundvlees burger met gegrilde groenten van de BBq"
                    picture={imageSix}
                />
            </div>
        </section>
    );
}

export default Recepten;