import { Button, TextField } from "@mui/material";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useState } from "react";
import useWeatherStore from "../../store/store";

const CityCard = () => {
  const [city, setCity] = useState("");
  const date = new Date();
  const seconds = date.getSeconds().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();
  const formattedDate = `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;

  const { setWeather } = useWeatherStore();

  const fetchWeather = () => {
    const fetchData = async () => {
      if (!city) return;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
        import.meta.env.VITE_API_KEY
      }`;

      try {
        const response = await axios.get(url);

        if (response.data) {
          setWeather(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  };

  return (
    <Card className="flex flex-col items-center" style={{ maxWidth: "600px" }}>
      <CardHeader
        title="React Weather App"
        subheader={formattedDate}
        className="text-center"
      />
      <CardMedia
        component="img"
        style={{ width: "100%", maxWidth: "600px" }}
        image="https://images.unsplash.com/photo-1609130059772-3f0a7de9d08c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1544&q=80"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body1">Find weather of your city</Typography>
      </CardContent>
      <CardContent className="flex w-full">
        <TextField
          label="city"
          className="flex-1"
          sx={{ marginRight: "5px" }}
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          variant="outlined"
        />
        <Button
          variant="contained"
          onClick={() => {
            fetchWeather();
          }}
        >
          Search
        </Button>
      </CardContent>
    </Card>
  );
};

export default CityCard;
