import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  weather: {},
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeather: (state, action) => {
      state.weather = action.payload;
    },
    removeWeather: (state) => {
      state.weather = {};
    },
  },
});

export const { setWeather, removeWeather } = weatherSlice.actions;

export const selectWeather = (state: any) => state.weather.weather;

export default weatherSlice.reducer;
