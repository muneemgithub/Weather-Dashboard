// WeatherForecast.js
import React from "react";

function WeatherForecast({ forecast, isCelsius }) {
  return (
    <div className="forecast">
      <h2>5 دن کی پیشگوئی</h2>
      <ul>
        {forecast.map((day, index) => {
          const temperature = isCelsius ? day.temperature : (day.temperature * 9) / 5 + 32;
          return (
            <li key={index} className="forecast-item">
              {day.day}: {temperature}°{isCelsius ? "C" : "F"}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default WeatherForecast;
