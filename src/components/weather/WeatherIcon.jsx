import {
  Cloud,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSnow,
  Sun,
  Wind,
} from "lucide-react";

const WeatherIcon = ({ condition, ...props }) => {
  switch (condition) {
    case "Clear":
      return <Sun {...props} />;
    case "Clouds":
      return <Cloud {...props} />;
    case "Rain":
    case "Drizzle":
      return <CloudRain {...props} />;
    case "Thunderstorm":
      return <CloudLightning {...props} />;
    case "Snow":
      return <CloudSnow {...props} />;
    case "Mist":
    case "Fog":
    case "Haze":
    case "Smoke":
      return <CloudFog {...props} />;
    case "Dust":
    case "Sand":
    case "Ash":
      return <Wind {...props} />;
    default:
      return <Cloud {...props} />;
  }
};

export default WeatherIcon;
