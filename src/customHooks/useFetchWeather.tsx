import API_KEY from '../../secrets';
import axios from 'axios';
import { setWeather } from '../features/weatherSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const useFetchWeather = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const fetchData = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${API_KEY}`;
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
};

export default useFetchWeather;
