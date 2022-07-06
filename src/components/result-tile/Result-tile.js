import React from 'react';
import './Result-tile.css'



function ResultTile({score, day, dateAndTime, celsius, description}) {


    return (
        <div className="result-tile">
            <span><p>{celsius}° C, {description}</p></span>
            <h3>score:</h3>
            <p className={`${setColor(score)}`}>{score}</p>
            <p>{day}</p>
            <p>{dateAndTime}</p>
        </div>
    );
}

const setColor = (scores) => {
    if(scores < 56){
        return'red';
    } else if(scores >= 56 && scores < 80){
        return 'orange';
    } else if (scores >= 80) {
        return 'green';
    }
}

export default ResultTile;