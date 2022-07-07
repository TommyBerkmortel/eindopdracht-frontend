import React, {useContext, useEffect, useState} from 'react';
import './Barbeque-score.css'
import {AuthContext} from "../../context/AuthContext";
import SearchBar from "../../components/searchBar/SearchBar";
import axios from "axios";
import kelvinToCelsius from "../../helpers/kelvinToCelsius";
import ResultTile from "../../components/result-tile/Result-tile";
import {Link} from "react-router-dom";
import bbqRating from "../../helpers/bbqRating";

function BarbequeScore({togglePopup, setPopupText}) {
    const {user} = useContext(AuthContext);
    const [location, setLocation] = useState('');
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');
    const [weatherData, setWeatherData] = useState('');
    const [currentDate, setCurrentDate] = useState('');
    const [currentDay, setCurrentDay] = useState('');



    useEffect(() => {
        async function fetchLocationGeo() {

            try {
                const LocationResult = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${location},NL&appid=${process.env.REACT_APP_API_KEY}`);
                setLat(LocationResult.data[0].lat);
                setLon(LocationResult.data[0].lon);
            } catch (e) {
                console.error(e);
                togglePopup(true);
                setPopupText("Plaats/dorpnaam niet gevonden!")
            }
        }

        if (location) {
            fetchLocationGeo();
        }
    }, [location]);

    useEffect(() => {
        async function fetchCurrentWeather() {

            try {
                const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&lang=nl`);
                console.log(result.data);
                setWeatherData(result.data)
            } catch (e) {
                console.error(e);
            }
        }

        if (lat && lon) {
            fetchCurrentWeather();
        }
    }, [lat, lon])

    useEffect(() => {
        async function fetchForecastData() {

            try {
                const forecastData = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&lang=nl`);
                console.log(forecastData);
            } catch (e) {
                console.error(e);
            }
        }

        if (lat && lon) {
            fetchForecastData();
        }
    }, [lat, lon])

    useEffect(() => {
        const d = new Date();
        const date = d.getDate();
        const month = d.getMonth() + 1;
        const year = d.getFullYear();
        const hours = d.getHours();
        const minutes = d.getMinutes();
        const weekDay = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag']
        const day = weekDay[d.getDay()];

        setCurrentDay(day);

        setCurrentDate(
            date + '/' + month + '/' + year + ' ' + hours + ':' + minutes
        );
    }, []);


    return (
        <div>
            <section className="content">
                <h1>Barbeque-score</h1>
                <SearchBar
                    setLocationHandler={setLocation}
                />
                {Object.keys(weatherData).length === 0 &&
                <>
                    <p>Hallo {user.username},</p>
                    <p>Welkom op de Barbeque-score-pagina. Voer jouw stad/dorp hierboven in om de resultaten te
                        weergeven.</p>
                    <fieldset className="change-data">
                        <legend>Gegevens wijzigen</legend>
                       <Link to="/changepassword">Wachtwoord wijzigen</Link>
                        <Link to="/changeemail">Email wijzigen</Link>
                    </fieldset>

                </>}

                {Object.keys(weatherData).length > 0 &&
                    <>
                    <div className="result-container">
                        <h2>Op dit moment:</h2>
                        <div className="inner-result-container">
                            <ResultTile
                                celsius={kelvinToCelsius(weatherData.main.temp)}
                                description={weatherData.weather[0].description}
                                score={bbqRating(weatherData.main.temp, weatherData.wind.speed,0)}
                                day={currentDay}
                                dateAndTime={currentDate}
                            />
                            <div className="result-tile">
                                <a href="https://www.buienradar.nl" target="_blank"><img border="0"
                                                                                         src="https://image.buienradar.nl/2.0/image/single/RadarMapRainNL?height=270&width=275&renderBackground=True&renderBranding=False&renderText=True"/></a>
                            </div>
                        </div>
                    </div>

                        <div className="result-container">
                            <h2>top 3:</h2>
                            <div className="inner-result-container">
                                <ResultTile
                                    title="#1"
                                    celsius={kelvinToCelsius(288)}
                                    description="geen idee"
                                    score={bbqRating(288, 3,0)}
                                    day="Een dag?"
                                    dateAndTime="Een datum?"
                                />

                                <ResultTile
                                    title="#2"
                                    celsius={kelvinToCelsius(288)}
                                    description="geen idee"
                                    score={bbqRating(288, 3,0)}
                                    day="Een dag?"
                                    dateAndTime="Een datum?"
                                />

                                <ResultTile
                                    title="#3"
                                    celsius={kelvinToCelsius(288)}
                                    description="geen idee"
                                    score={bbqRating(288, 3,0)}
                                    day="Een dag?"
                                    dateAndTime="Een datum?"
                                />

                            </div>
                        </div>

                        <div className="result-container">
                            <h2>De eerstvolgende BBQ-dag:</h2>
                            <div className="inner-result-container">
                                <ResultTile
                                    title="#1"
                                    celsius={kelvinToCelsius(288)}
                                    description="geen idee"
                                    score={bbqRating(288, 3,0)}
                                    day="Een dag?"
                                    dateAndTime="Een datum?"
                                />

                            </div>
                        </div>
                    </>}


            </section>
        </div>
    );
}

export default BarbequeScore;