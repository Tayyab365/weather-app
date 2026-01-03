import { Cloud } from "lucide-react";
import React from "react";
import WeatherIcon from "./WeatherIcon";

const HourlyForecastItem = ({ data }) => {
  const time = new Date(data.dt_txt).toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
  return (
    <div className="bg-[#0f0f23] p-5 flex flex-col items-center gap-2 rounded-xl transform transition-transform duration-200 hover:-translate-y-2 hover:scale-105 shadow-lg">
      <p className="text-xs leading-none">{time}</p>
      <WeatherIcon
        condition={data.weather[0].main}
        size={28}
        className="text-[#00d3f3]"
      />
      <p className="text-lg font-bold">{Math.round(data.main.temp)}°</p>
    </div>
  );
};

export default HourlyForecastItem;
