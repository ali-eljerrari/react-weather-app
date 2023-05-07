import { useState, useEffect } from 'react';
import axios from 'axios';
import API_KEY from '../secrets';
import CityCard from './CityCard';
import WeatherCard from './WeatherCard';
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
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    };

    if (city && state) {
      fetchData();
    }
  }, [city, state]);

  return (
    <div className='App'>
      {!state ? (
        <CityCard
          city={city}
          handleCityInputChange={handleCityInputChange}
          setState={setState}
        />
      ) : null}
      {Object.keys(data).length ? <WeatherCard data={data} /> : null}
    </div>
  );
};

export default WeatherApp;
