import './ArticleRecipe.css'
import React from 'react';


function ArticleRecipe({title, picture}) {
    return (
        <article className="article-recipe">
            <img src={picture} alt="foto van gerecht" className="article-image"/>
            <div className="article-title">
                <h2>{title}</h2>
            </div>
        </article>
    );
}

export default ArticleRecipe;