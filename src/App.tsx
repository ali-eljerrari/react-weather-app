import "./App.css";
import CityCard from "./components/cards/CityCard";
import WeatherCard from "./components/cards/WeatherCard";
import useWeatherStore from "./store/store";

const WeatherApp = () => {
  const { weather } = useWeatherStore();

  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden pt-5  bg-gradient-to-r from-sky-400 to-blue-500">
      <>
        <div style={{ padding: "0 0.5rem" }} className="flex justify-center">
          {!weather ? <CityCard /> : <WeatherCard />}
        </div>
      </>
    </div>
  );
};

export default WeatherApp;
