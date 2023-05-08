import './App.scss';

import { selectWeather, setWeather } from './features/weatherSlice';
import { useDispatch, useSelector } from 'react-redux';

import API_KEY from '../secrets';
import APY_KEY from '../secrets';
import CityCard from './components/cards/CityCard';
import WeatherCard from './components/cards/WeatherCard';
import axios from 'axios';
import { useEffect } from 'react';

const WeatherApp = () => {
  const data = useSelector(selectWeather);
  const dispatch = useDispatch();

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const fetchData = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${APY_KEY}`;
            await axios
              .get(url)
              .then((res) => {
                dispatch(setWeather(res.data));
              })
              .catch((err) => {
                console.log(err.message);
              });
          };
          fetchData();
        },
        () => {
          const fetchData = async () => {
            if (localStorage.getItem('city') !== null) {
              const url = `https://api.openweathermap.org/data/2.5/weather?q=${localStorage.getItem(
                'city'
              )}&appid=${API_KEY}`;

              await axios
                .get(url)
                .then((res) => {
                  dispatch(setWeather(res.data));
                })
                .catch((err) => {
                  console.log(err.message);
                });
            }
          };
          fetchData();
        }
      );
    }
  }, []);

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
