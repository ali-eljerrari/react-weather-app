import './App.scss';

import CityCard from './components/cards/CityCard';
import WeatherCard from './components/cards/WeatherCard';
import { selectWeather } from './features/weatherSlice';
import useFetchWeather from './customHooks/useFetchWeather';
import { useSelector } from 'react-redux';

const WeatherApp = () => {
  const data = useSelector(selectWeather);
  useFetchWeather();

  return (
    <div className='App'>
      {Object.keys(data).length ? (
        <>
          <CityCard />
          <WeatherCard />
        </>
      ) : (
        <>
          <CityCard />
        </>
      )}
    </div>
  );
};

export default WeatherApp;
