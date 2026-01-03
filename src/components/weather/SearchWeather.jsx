import React, { useState } from "react";

const SearchWeather = ({ handleSearch }) => {
  const [city, setCity] = useState("");
  const onSearch = () => {
    handleSearch(city);
    setCity("");
  };
  return (
    <div className="flex items-center justify-center gap-5 backdrop-blur-sm sticky top-5 left-0 z-10">
      <input
        type="text"
        autoFocus
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSearch()}
        placeholder="Enter City"
        className="border border-gray-600 px-5 py-2 sm:py-3 text-sm sm:text:lg outline-none rounded-lg w-full"
      />
      <button
        onClick={onSearch}
        className="bg-cyan-400 px-3 py-2 sm:px-3 md:px-4 sm:py-3 text-sm font-bold outline-none rounded-lg"
      >
        Search
      </button>
    </div>
  );
};

export default SearchWeather;
