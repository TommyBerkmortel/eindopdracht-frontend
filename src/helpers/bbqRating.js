import createRating from "./createRating";
import roundNumber from "./roundNumber";


function bbqRating(temperature, windspeed, rain) {
    const kelvinToCelsius = temperature - 273

    const temperatureRating = createRating(kelvinToCelsius, 23, 20);
    const windRating = createRating(windspeed, 0, 10);
    const rainRating = createRating(rain, 0, 5);

    return roundNumber((temperatureRating + windRating + rainRating) / 0.3, 0)
}

export default bbqRating;