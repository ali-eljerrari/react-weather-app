import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import cloudy from './icons/cloudy-night.svg';
import sun from './icons/sunny.svg';
import humidity from './icons/humidity.svg';
import wind from './icons/wind.svg';
import pressure from './icons/pressure.svg';
import sunny from './icons/sunny.svg';
import night from './icons/night.svg';
import day from './icons/day.svg';
import cloudyNight from './icons/cloudy-night.svg';
import perfectDay from './icons/perfect-day.svg';
import rain from './icons/rain.svg';
import rainNight from './icons/rain-night.svg';
import storm from './icons/storm.svg';
import { IconButton } from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

const WeatherCard = ({ data, setCity, setState }) => {
  const date = data?.sys?.sunrise;

  function formatDate(timestamp: number) {
    const date = new Date(timestamp * 1000);

    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    return `${hours}:${minutes}`;
  }

  const formattedDate = formatDate(date);

  const WeatherIcons = {
    '01d': sunny,
    '01n': night,
    '02d': day,
    '02n': cloudyNight,
    '03d': cloudy,
    '03n': cloudy,
    '04d': perfectDay,
    '04n': cloudyNight,
    '09d': rain,
    '09n': rainNight,
    '10d': rain,
    '10n': rainNight,
    '11d': storm,
    '11n': storm,
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title='React Weather App'
        subheader={data?.name + ', ' + data?.sys?.country}
        action={
          <IconButton
            aria-label='settings'
            color='error'
            size='large'
            onClick={() => {
              setState(false);
              setCity('');
            }}
          >
            <ArrowCircleLeftIcon fontSize='large' />
          </IconButton>
        }
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
          <div className='weather__info__grid__item'>
            <CardMedia
              component='img'
              image={sun}
              alt='Paella dish'
              style={{ width: 50 }}
            />
            <div>
              <Typography
                variant='body1'
                color='text.secondary'
              >
                {formattedDate}
              </Typography>
              <Typography
                variant='body1'
                color='text.secondary'
              >
                Sunrise
              </Typography>
            </div>
          </div>
          <div className='weather__info__grid__item'>
            <CardMedia
              component='img'
              image={humidity}
              alt='Paella dish'
              style={{ width: 50 }}
            />
            <div>
              <Typography
                variant='body1'
                color='text.secondary'
              >
                {data?.main?.humidity}%
              </Typography>
              <Typography
                variant='body1'
                color='text.secondary'
              >
                Humidity
              </Typography>
            </div>
          </div>
          <div className='weather__info__grid__item'>
            <CardMedia
              component='img'
              image={wind}
              alt='Paella dish'
              style={{ width: 50 }}
            />
            <div>
              <Typography
                variant='body1'
                color='text.secondary'
              >
                {data?.wind?.speed} &uarr;
              </Typography>
              <Typography
                variant='body1'
                color='text.secondary'
              >
                Wind
              </Typography>
            </div>
          </div>
          <div className='weather__info__grid__item'>
            <CardMedia
              component='img'
              image={pressure}
              alt='Paella dish'
              style={{ width: 50 }}
            />
            <div>
              <Typography
                variant='body1'
                color='text.secondary'
              >
                {data?.main?.pressure} hPa
              </Typography>
              <Typography
                variant='body1'
                color='text.secondary'
              >
                Pressure
              </Typography>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
