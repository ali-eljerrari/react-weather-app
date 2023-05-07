import { CardMedia, Typography } from '@mui/material';

const WeatherCardInfo = (props: any) => {
  const date = props.value?.sunrise;

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);

    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    return `${hours}:${minutes}`;
  };

  const formattedDate = formatDate(date);

  return (
    <div className='weather__info__grid__item'>
      <CardMedia
        component='img'
        image={props.data.icon}
        alt='Paella dish'
        style={{ width: 50 }}
      />
      <div>
        <Typography
          variant='body1'
          color='text.secondary'
        >
          {props.data.name === 'sunrise' && formattedDate}
          {props.data.name === 'wind' && props.value.wind}
          {props.data.name === 'pressure' && props.value.pressure}
          {props.data.name === 'humidity' && props.value.humidity}
        </Typography>
        <Typography
          variant='body1'
          color='text.secondary'
        >
          {props.data.name}
        </Typography>
      </div>
    </div>
  );
};

export default WeatherCardInfo;
