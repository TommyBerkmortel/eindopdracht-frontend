import React from 'react';
import './Result-tile.css'


let testScore = 85;
function ResultTile({score, day, dateAndTime}) {


    return (
        <div className="result-tile">
            <h3>score:</h3>
            <p className="score">{score}</p>
            <p>{day}</p>
            <p>{dateAndTime}</p>

        </div>
    );
}

function scoreColor(testScore) {

    switch (testScore) {
        case (testScore < 56):
            return 'red';
            break;
        case (testScore > 55):
            return 'orange';
            break;
        case (testScore > 79):
            return 'green';
            break;

    }
}

export default ResultTile;