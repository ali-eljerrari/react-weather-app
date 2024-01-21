import { create } from "zustand";

const useWeatherStore = create((set) => ({
  weather: null,
  setWeather: (weather) => set({ weather }),
}));

export default useWeatherStore;
