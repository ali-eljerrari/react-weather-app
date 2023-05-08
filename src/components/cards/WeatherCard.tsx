import WeatherIcons, { weatherInfo } from './icons/icons';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import WeatherCardInfo from './WeatherCardInfo';
import { selectWeather } from '../../features/weatherSlice';
import { useSelector } from 'react-redux';

const WeatherCard = () => {
  const data = useSelector(selectWeather);

  const info = {
    sunrise: data.sys.sunrise,
    wind: data.wind.speed,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title='React Weather App'
        subheader={data?.name + ', ' + data?.sys?.country}
      />
      <CardMedia
        component='img'
        height='194'
        image={WeatherIcons[data?.weather[0]?.icon]}
        alt='Paella dish'
        style={{ objectFit: 'inherit' }}
      />
      <CardContent>
        <Typography
          variant='body1'
          color='text.secondary'
        >
          {Math.round(data?.main?.temp - 273.15)}&deg;C |{' '}
          {data?.weather[0]?.description}
        </Typography>
      </CardContent>
      <CardContent className='weather__info'>
        <Typography
          variant='body1'
          color='text.secondary'
        >
          Weather info
        </Typography>
        <div className='weather__info__grid'>
          {weatherInfo.map((item, index) => {
            return (
              <WeatherCardInfo
                key={index}
                data={item}
                value={info}
              />
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
