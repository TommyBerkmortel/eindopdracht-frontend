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
                    website="https://www.vlees.nl/recept/tatakisalade-van-diamanthaas-v-h-jodenhaas/"
                />

                <ArticleRecipe
                    title="Bavette van de barbecue"
                    picture={imageTwo}
                    website="https://www.vlees.nl/recept/bavette-van-de-barbecue/"
                />

                <ArticleRecipe
                    title="pulled pork met chimichurri saus"
                    picture={imageThree}
                    website="https://www.vlees.nl/recept/pulled-pork-met-chimichurri-saus/"
                />

                <ArticleRecipe
                    title="Kruidige kalfskebab"
                    picture={imageFour}
                    website="https://www.vlees.nl/recept/kruidige-kalfskebab/"
                />

                <ArticleRecipe
                    title="Varkenshaas saté van de barbeque"
                    picture={imageFive}
                    website="https://www.vlees.nl/recept/varkenshaas-sate-van-de-barbecue/"
                />

                <ArticleRecipe
                    title="Rundvlees burger met gegrilde groenten van de BBq"
                    picture={imageSix}
                    website="https://www.vlees.nl/recept/rundvlees-burger-met-gegrilde-groenten-van-de-bbq/"
                />
            </div>
        </section>
    );
}

export default Recepten;