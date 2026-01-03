import { useState } from "react";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

//

export default function useWeather() {
  const [weatherData, setWeatherData] = useState(null);
  const [weatherLoading, setWeatherLoading] = useState(false);
  const [weatherError, setWeatherError] = useState("");

  const fetchWeather = async (city) => {
    if (!city.trim()) {
      setWeatherError("Please enter a city name.");
      return;
    }
    try {
      setWeatherData(null);
      setWeatherLoading(true);
      setWeatherError("");
      const res = await fetch(
        `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!res.ok) throw new Error("CITY_NOT_FOUND");
      const data = await res.json();
      setWeatherData(data);
    } catch {
      setWeatherError("City not found. Please enter a valid city name.");
    } finally {
      setWeatherLoading(false);
    }
  };
  return { fetchWeather, weatherData, weatherLoading, weatherError };
}
