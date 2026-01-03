import { Calendar } from "lucide-react";
import React from "react";
import HourlyForecastItem from "./HourlyForecastItem";

const HourlyForecast = ({ data }) => {
  return (
    <div className="bg-[#1a1a2e] mt-5 p-5 rounded-2xl">
      <div className="flex items-center gap-2">
        <Calendar size={20} className="text-[#00d3f3]" />
        <h1 className="text-lg font-bold">Hourly Forecast</h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5 mt-5">
        {data.slice(0, 6).map((item, i) => (
          <HourlyForecastItem key={i} data={item} />
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;
