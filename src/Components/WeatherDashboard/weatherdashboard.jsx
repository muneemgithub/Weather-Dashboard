// WeatherDashboard.js
import React, { useState } from "react";
import CitySearch from "./citysearch";
import CurrentWeather from "./currentweather";
import WeatherForecast from "./weatherforcaste";
import TemperatureToggle from "./temperaturetoggle";

// Dummy weather data
const sindhCities = [
  "Karachi",
  "Hyderabad",
  "Sukkur",
  "Larkana",
  "Mirpurkhas"
];

const dummyWeatherData = {
  current: { temperature: 28, humidity: 70, windSpeed: 15 },
  forecast: [
    { day: "Monday", temperature: 30 },
    { day: "Tuesday", temperature: 31 },
    { day: "Wednesday", temperature: 29 },
    { day: "Thursday", temperature: 32 },
    { day: "Friday", temperature: 28 },
  ],
};

function WeatherDashboard() {
  const [city, setCity] = useState(sindhCities[0]);
  const [weatherData, setWeatherData] = useState(dummyWeatherData);
  const [isCelsius, setIsCelsius] = useState(true);

  const handleCityChange = (newCity) => {
    setCity(newCity);
    setWeatherData(dummyWeatherData);
  };

  const handleToggle = () => {
    setIsCelsius(!isCelsius);
  };

  return (
    <div className="weather-dashboard">
      <h1>سندھ موسم ڈیش بورڈ</h1>
      <CitySearch onCityChange={handleCityChange} />
      <TemperatureToggle onToggle={handleToggle} isCelsius={isCelsius} />
      <CurrentWeather data={weatherData.current} city={city} isCelsius={isCelsius} />
      <WeatherForecast forecast={weatherData.forecast} isCelsius={isCelsius} />
    </div>
  );
}

export default WeatherDashboard;
