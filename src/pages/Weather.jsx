import React from "react";
import SearchWeather from "../components/weather/SearchWeather";
import WeatherCard from "../components/weather/WeatherCard";
import useWeather from "../hooks/useWeather";
import useForecast from "../hooks/useForecast";
import HourlyForecast from "../components/weather/HourlyForecast";
import WeeklyForecast from "../components/weather/WeeklyForecast";

const Weather = () => {
  const { fetchWeather, weatherData, weatherLoading, weatherError } =
    useWeather();
  const { forecastData, fetchForecast, forecastLoading, forecastError } =
    useForecast();

  const handleSearch = (city) => {
    fetchWeather(city);
    fetchForecast(city);
  };

  const weeklyForecastData =
    forecastData && forecastData.filter((d) => d.dt_txt.includes("12:00:00"));

  return (
    <div className="p-5 md:max-w-5xl md:mx-auto">
      <SearchWeather handleSearch={handleSearch} />
      {weatherLoading && (
        <p className="text-center mt-5 text-lg">Loading current weather...</p>
      )}
      {forecastLoading && weatherData && (
        <p className="text-center mt-5 text-lg">Loading forecast...</p>
      )}
      {weatherError && (
        <p className="text-center mt-5 text-lg text-red-400">{weatherError}</p>
      )}
      {forecastError && weatherData && (
        <p className="text-center mt-5 text-lg text-red-400">{forecastError}</p>
      )}
      {!weatherData && !forecastData && !weatherLoading && !weatherError && (
        <p className="text-center text-gray-400 mt-10">
          Search a city to see weather
        </p>
      )}
      {weatherData && <WeatherCard data={weatherData} />}
      {forecastData && <HourlyForecast data={forecastData} />}
      {forecastData && <WeeklyForecast data={weeklyForecastData} />}
    </div>
  );
};

export default Weather;
