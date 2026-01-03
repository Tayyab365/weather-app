import { useState } from "react";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast";

export default function useForecast() {
  const [forecastData, setForecastData] = useState(null);
  const [forecastLoading, setForecastLoading] = useState(false);
  const [forecastError, setForecastError] = useState("");
  const fetchForecast = async (city) => {
    if (!city.trim()) return;
    try {
      setForecastData(null);
      setForecastLoading(true);
      setForecastError("");
      const res = await fetch(
        `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!res.ok) throw new Error("CITY_NOT_FOUND");
      const data = await res.json();
      setForecastData(data.list);
    } catch (err) {
      setForecastError("Unable to load forecast data.");
    } finally {
      setForecastLoading(false);
    }
  };
  return { forecastData, fetchForecast, forecastLoading, forecastError };
}
