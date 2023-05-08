import { Button, TextField } from '@mui/material';

import API_KEY from '../../../secrets';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { setWeather } from '../../features/weatherSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const CityCard = () => {
  const [city, setCity] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const date = new Date();
  const seconds = date.getSeconds().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();
  const formattedDate = `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;

  const fetchWeather = () => {
    const fetchData = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

      await axios
        .get(url)
        .then((res) => {
          dispatch(setWeather(res.data));
        })
        .catch((err) => {
          setError(err.message);
        });
    };

    fetchData();
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title='React Weather App'
        subheader={formattedDate}
      />
      <CardMedia
        component='img'
        height='194'
        image='https://images.unsplash.com/photo-1609130059772-3f0a7de9d08c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1544&q=80'
        alt='Paella dish'
      />
      <CardContent>
        <Typography
          variant='body1'
          color='text.secondary'
        >
          Find weather of your city
        </Typography>
      </CardContent>
      <CardContent className='city__input__container'>
        <TextField
          className={`city__input `}
          label='city'
          value={city}
          onChange={(e) => {
            setCity(e.target.value),
              localStorage.setItem('city', e.target.value);
          }}
          variant='outlined'
          error={!!error}
        />
        <Button
          className='button'
          variant='contained'
          onClick={() => {
            fetchWeather();
          }}
        >
          Search
        </Button>
      </CardContent>
    </Card>
  );
};

export default CityCard;
