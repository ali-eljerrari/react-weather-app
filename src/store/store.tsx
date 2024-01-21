import { SetState, create } from "zustand";

interface WeatherStore {
  weather: any; // Replace 'any' with the actual type of your weather data
}

interface WeatherActions {
  setWeather: (weather: any) => void; // Replace 'any' with the actual type of your weather data
}

const useWeatherStore = create<WeatherStore & WeatherActions>(
  (set: SetState<WeatherStore>) => ({
    weather: null,
    setWeather: (weather) => set({ weather }),
  })
);
export default useWeatherStore;
