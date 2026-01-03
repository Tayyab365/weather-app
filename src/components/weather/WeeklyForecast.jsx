import React from "react";
import WeeklyForecastItem from "./WeeklyForecastItem";
import { CalendarDays } from "lucide-react";

const WeeklyForecast = ({ data }) => {
  return (
    <div className="bg-[#1a1a2e] mt-5 p-5 rounded-2xl">
      <div className="flex items-center gap-2 mb-5">
        <CalendarDays size={20} className="text-[#00d3f3]" />
        <h1 className="text-lg font-bold">Weekly Forecast</h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
        {data.map((item, i) => (
          <WeeklyForecastItem key={i} data={item} />
        ))}
      </div>
    </div>
  );
};

export default WeeklyForecast;
