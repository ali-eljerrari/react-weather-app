import WeatherIcons, { weatherInfo } from "./icons/icons";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import useWeatherStore from "../../store/store";
import WeatherCardInfo from "./WeatherCardInfo";

const WeatherCard = () => {
  const { weather } = useWeatherStore();

  const info = {
    sunrise: weather?.sys?.sunrise,
    wind: weather?.wind?.speed,
    humidity: weather?.main?.humidity,
    pressure: weather?.main?.pressure,
  };

  return (
    <Card
      className="flex flex-col items-center px-32"
      style={{ maxWidth: "600px" }}
    >
      <CardHeader
        title="React Weather App"
        subheader={weather?.name + ", " + weather?.sys?.country}
        className="w-full text-center"
        style={{ width: "400px" }}
      />
      <CardMedia
        component="img"
        image={WeatherIcons[weather?.weather[0]?.icon]}
        alt="Paella dish"
        style={{ maxWidth: "200px" }}
      />
      <CardContent style={{ width: "200px" }}>
        <Typography
          variant="body1"
          color="text.secondary"
          className="text-center"
        >
          {Math.round(weather?.main?.temp - 273.15)}&deg;C |{" "}
          {weather?.weather[0]?.description}
        </Typography>
      </CardContent>
      <CardContent className="flex flex-col">
        <Typography
          variant="body1"
          color="text.secondary"
          className="text-center"
        >
          Weather info
        </Typography>
        <div className="flex items-center mt-4">
          {weatherInfo.map((item, index) => {
            return <WeatherCardInfo key={index} data={item} value={info} />;
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
