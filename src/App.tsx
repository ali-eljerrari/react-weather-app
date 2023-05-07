import { useState, useEffect } from 'react';
import axios from 'axios';
import API_KEY from '../secrets';
import CityCard from './components/cards/CityCard';
import WeatherCard from './components/cards/WeatherCard';
import './App.scss';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [data, setData] = useState({});
  const [state, setState] = useState(false);

  const handleCityInputChange = (city: string) => {
    setCity(city);
  };

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

      await axios
        .get(url)
        .then((res) => {
          setData(res.data);
          // setState(true);
        })
        .catch((err) => setState(false));
    };

    if (city && state) {
      fetchData();
      console.log(city, state);
    }
  }, [city, state]);

  return (
    <div className='App'>
      {!state ? (
        <CityCard
          city={city}
          handleCityInputChange={handleCityInputChange}
          setState={setState}
          setCity={setCity}
        />
      ) : null}
      {Object.keys(data).length && state ? (
        <WeatherCard
          data={data}
          setCity={setCity}
          setState={setState}
        />
      ) : null}
    </div>
  );
};

export default WeatherApp;
