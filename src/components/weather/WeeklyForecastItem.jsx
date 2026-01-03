import { CloudRain } from "lucide-react";
import WeatherIcon from "./WeatherIcon";

const WeeklyForecastItem = ({ data }) => {
  const weekDay = new Date(data.dt_txt).toLocaleDateString([], {
    weekday: "long",
  });
  const monthDate = new Date(data.dt_txt).toLocaleDateString([], {
    month: "short",
    day: "numeric",
  });
  return (
    <div className="bg-[#0f0f23] p-5 rounded-2xl transform transition-transform duration-200 hover:-translate-y-1 hover:scale-105 shadow-lg">
      <div>
        <p className="text-xs font-bold">{weekDay}</p>
        <p className="text-xs">{monthDate}</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-3 mt-3">
        <WeatherIcon
          condition={data.weather[0].main}
          size={32}
          className="text-[#00d3f3]"
        />
        <div className="flex items-center gap-3">
          <p className="text-lg font-bold">{Math.round(data.main.temp_max)}°</p>
          <p className="text-sm">{Math.round(data.main.temp_min)}°</p>
        </div>
        <div className="flex items-center gap-1">
          <CloudRain size={14} className="text-[#00d3f3]" />
          <p className="text-xs">{data.pop * 100}%</p>
        </div>
      </div>
    </div>
  );
};

export default WeeklyForecastItem;
