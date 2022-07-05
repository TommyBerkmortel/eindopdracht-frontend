import './ArticleRecipe.css'
import React from 'react';


function ArticleRecipe({title, picture, website}) {
    return (

        <article className="article-recipe">
            <a href={website} target="_blank">
                <img src={picture} alt="foto van gerecht" className="article-image"/>
                <div className="article-title">
                    <h3>{title}</h3>
                </div>
            </a>
        </article>
    );
}

export default ArticleRecipe;