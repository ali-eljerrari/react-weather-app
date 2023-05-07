import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';

const CityCard = ({ city, handleCityInputChange, setState }) => {
  const date = new Date();
  const seconds = date.getSeconds().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();
  const formattedDate = `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title='React Weather App'
        subheader={formattedDate}
      />
      <CardMedia
        component='img'
        height='194'
        image='https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
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
          className='city__input'
          label='city'
          value={city}
          onChange={(e) => handleCityInputChange(e.target.value)}
          variant='outlined'
        />
        <Button
          className='button'
          variant='contained'
          onClick={() => setState(true)}
        >
          Search
        </Button>
      </CardContent>
    </Card>
  );
};

export default CityCard;
