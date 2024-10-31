// CurrentWeather.js
import React from "react";

function CurrentWeather({ data, city, isCelsius }) {
  const temperature = isCelsius ? data.temperature : (data.temperature * 9) / 5 + 32;

  return (
    <div className="current-weather">
      <h2>موجودہ موسم: {city}</h2>
      <p>درجہ حرارت: {temperature}°{isCelsius ? "C" : "F"}</p>
      <p>ہوا کی نمی: {data.humidity}%</p>
      <p>ہوا کی رفتار: {data.windSpeed} km/h</p>
    </div>
  );
}

export default CurrentWeather;
