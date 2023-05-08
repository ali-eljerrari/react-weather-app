import cloudy from './cloudy-night.svg';
import cloudyNight from './cloudy-night.svg';
import day from './day.svg';
import night from './night.svg';
import perfectDay from './perfect-day.svg';
import rain from './rain.svg';
import rainNight from './rain-night.svg';
import storm from './storm.svg';
import sunny from './sunny.svg';

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
  {
    name: 'sunrise',
    icon: `https://img.icons8.com/bubbles/50/null/sunrise.png`,
  },

  { name: 'wind', icon: `https://img.icons8.com/ios/50/null/wind--v1.png` },
  ,
  {
    name: 'humidity',
    icon: `https://img.icons8.com/color-glass/48/null/humidity.png`,
  },
  ,
  {
    name: 'pressure',
    icon: `https://img.icons8.com/color-glass/48/null/pressure.png`,
  },
];

export default WeatherIcons;
