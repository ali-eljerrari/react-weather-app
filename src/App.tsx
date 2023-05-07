import { useState, useEffect } from 'react';
import axios from 'axios';
import API_KEY from '../secrets';
import CityCard from './CityCard';
import WeatherCard from './WeatherCard';
import './App.scss';

const WeatherApp = () => {
  const [city, setCity] = useState('driouch');
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchdata = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

      await axios
        .get(url)
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    };
    fetchdata();
  }, [city]);

  return (
    <div className='App'>
      {!city && (
        <CityCard
          city={city}
          setCity={setCity}
        />
      )}
      {Object.keys(data).length && <WeatherCard data={data} />}
    </div>
  );
};

export default WeatherApp;
