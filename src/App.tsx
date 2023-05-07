import './App.scss';

import CityCard from './components/cards/CityCard';
import WeatherCard from './components/cards/WeatherCard';
import { selectWeather } from './features/weatherSlice';
import { useSelector } from 'react-redux';

const WeatherApp = () => {
  const data = useSelector(selectWeather);

  return (
    <div className='App'>
      {Object.keys(data).length ? <WeatherCard /> : <CityCard />}
    </div>
  );
};

export default WeatherApp;
