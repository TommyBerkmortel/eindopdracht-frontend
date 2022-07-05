import React, {useContext, useEffect, useState} from 'react';
import './Barbeque-score.css'
import {AuthContext} from "../../context/AuthContext";
import SearchBar from "../../components/searchBar/SearchBar";
import axios from "axios";
import kelvinToCelsius from "../../helpers/kelvinToCelsius";
import ResultTile from "../../components/result/Result-tile";

function BarbequeScore() {
    const {user} = useContext(AuthContext);
    const apiKey = 'aedc56390099fc6f9692b80ac58be0bb';
    const [location, setLocation] = useState('');
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');
    const [weatherData, setWeatherData] = useState('');
    const [currentDate, setCurrentDate] = useState('');
    const [currentDay, setCurrentDay] = useState('');

    useEffect(() => {
        async function fetchLocationGeo() {

            try {
                const LocationResult = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${location},NL&appid=${apiKey}`);
                setLat(LocationResult.data[0].lat);
                setLon(LocationResult.data[0].lon);
            } catch (e) {
                console.error(e);
                console.log("Gefaald op ophalen LON LAN")
            }
        }

        if (location) {
            fetchLocationGeo();
        }
    }, [location]);

    useEffect(() => {
        async function fetchData() {

            try {
                const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=nl`);
                console.log(result.data);
                setWeatherData(result.data)
            } catch (e) {
                console.error(e);
            }
        }

        if (lat && lon) {
            fetchData();
        }
    }, [lat, lon])

    useEffect(() => {
        async function fetchForecastData() {

            try {
                const forecastData = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=nl`);
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

                </>}

                {Object.keys(weatherData).length > 0 &&
                    <div className="result-container">
                        <h2>Op dit moment:</h2>
                        <div className="inner-result-container">
                            <ResultTile
                                score="87"
                                day={currentDay}
                                dateAndTime={currentDate}
                            />
                            <div className="result-tile">
                                <a href="https://www.buienradar.nl" target="_blank"><img border="0"
                                                                                         src="https://image.buienradar.nl/2.0/image/single/RadarMapRainNL?height=270&width=275&renderBackground=True&renderBranding=False&renderText=True"/></a>
                            </div>
                        </div>
                    </div>}


            </section>
        </div>
    );
}

export default BarbequeScore;