import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherCardItem from "./WeatherCardItem";

const WeatherCard = ({ data }) => {
  const weatherItems = [
    {
      title: "Humidity",
      value: `${data.main.humidity}%`,
    },
    {
      title: "Wind Speed",
      value: `${data.wind.speed} m/s`,
    },
    {
      title: "Visibility",
      value: `${(data.visibility / 1000).toFixed(1)} km`,
    },
    {
      title: "Pressure",
      value: `${data.main.pressure} hPa`,
    },
  ];

  return (
    <div className="mt-5 bg-gradient-to-br from-[#5954e5] to-[#7505c6] p-5 rounded-2xl space-y-5">
      <h1 className="text-sm font-bold">
        {data.name}, {data.sys.country}
      </h1>
      <div className="md:flex md:justify-between md:items-center">
        <div className="flex justify-center items-center gap-10 md:gap-5">
          <WeatherIcon condition={data.weather[0].main} size={96} />
          <div className="space-y-2">
            <h1 className="text-5xl sm:text-6xl font-bold">
              {Math.round(data.main.temp)}°
            </h1>
            <p className="text-sm sm:text-lg">{data.weather[0].main}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {weatherItems.map((item, i) => (
            <WeatherCardItem key={i} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
