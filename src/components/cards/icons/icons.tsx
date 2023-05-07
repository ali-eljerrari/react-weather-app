import cloudy from './cloudy-night.svg';
import cloudyNight from './cloudy-night.svg';
import day from './day.svg';
import humidity from './humidity.svg';
import night from './night.svg';
import perfectDay from './perfect-day.svg';
import pressure from './pressure.svg';
import rain from './rain.svg';
import rainNight from './rain-night.svg';
import storm from './storm.svg';
import sun from './sunny.svg';
import sunny from './sunny.svg';
import wind from './wind.svg';

const WeatherIcons: any = {
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

export const weatherInfo = [
  { name: 'sunrise', icon: sun, value: 'a' },

  { name: 'wind', icon: wind, value: 'b' },
  ,
  { name: 'humidity', icon: humidity, value: 'c' },
  ,
  { name: 'pressure', icon: pressure, value: 'd' },
];

export default WeatherIcons;
