import React from "react";

const WeatherCardItem = ({ data }) => {
  return (
    <div className="backdrop-blur-2xl bg-white/10 border border-gray-400 rounded-xl p-5 space-y-1 md:min-w-56">
      <p className="text-xs">{data.title}</p>
      <p className="text-xl font-bold">{data.value}</p>
    </div>
  );
};

export default WeatherCardItem;
