import { CardMedia, Typography } from "@mui/material";

const WeatherCardInfo = ({ data, value }) => {
  const date = value?.sunrise;

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);

    const hours = ("0" + date.getHours()).slice(-2);
    const minutes = ("0" + date.getMinutes()).slice(-2);
    return `${hours}:${minutes}`;
  };

  const formattedDate = formatDate(date);

  return (
    <div className="flex flex-col items-center justify-center mx-4">
      <CardMedia
        component="img"
        image={data.icon}
        alt="Paella dish"
        style={{ width: "50px", maxWidth: "100px" }}
      />
      <div className="flex flex-col items-center justify-center ">
        <Typography variant="body1" color="text.secondary">
          {data.name === "sunrise" && formattedDate}
          {data.name === "wind" && value.wind}
          {data.name === "pressure" && value.pressure}
          {data.name === "humidity" && value.humidity}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {data.name}
        </Typography>
      </div>
    </div>
  );
};

export default WeatherCardInfo;
