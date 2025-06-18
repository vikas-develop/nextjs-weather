'use client';

import { WeatherData } from '@/types/weather';
import {
  CloudIcon,
  SunIcon,
  MoonIcon,
  CloudIcon as RainIcon,
  SparklesIcon as SnowIcon,
  BoltIcon,
} from '@heroicons/react/24/outline';

interface WeatherCardProps {
  data: WeatherData;
}

const getWeatherIcon = (weatherMain: string) => {
  switch (weatherMain.toLowerCase()) {
    case 'clear':
      return <SunIcon className="h-16 w-16 text-yellow-400" />;
    case 'clouds':
      return <CloudIcon className="h-16 w-16 text-gray-400" />;
    case 'rain':
      return <RainIcon className="h-16 w-16 text-blue-400" />;
    case 'snow':
      return <SnowIcon className="h-16 w-16 text-blue-200" />;
    case 'thunderstorm':
      return <BoltIcon className="h-16 w-16 text-yellow-500" />;
    default:
      return <CloudIcon className="h-16 w-16 text-gray-400" />;
  }
};

export default function WeatherCard({ data }: WeatherCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-sm w-full mx-auto">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {data.name}, {data.sys.country}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {data.weather[0].description}
          </p>
        </div>
        {getWeatherIcon(data.weather[0].main)}
      </div>

      <div className="mb-4">
        <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          {Math.round(data.main.temp)}°C
        </div>
        <p className="text-gray-600 dark:text-gray-300">
          Feels like {Math.round(data.main.feels_like)}°C
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-600 dark:text-gray-400">Humidity</p>
          <p className="font-semibold text-gray-900 dark:text-white">
            {data.main.humidity}%
          </p>
        </div>
        <div>
          <p className="text-gray-600 dark:text-gray-400">Wind Speed</p>
          <p className="font-semibold text-gray-900 dark:text-white">
            {Math.round(data.wind.speed)} m/s
          </p>
        </div>
        <div>
          <p className="text-gray-600 dark:text-gray-400">Pressure</p>
          <p className="font-semibold text-gray-900 dark:text-white">
            {data.main.pressure} hPa
          </p>
        </div>
      </div>
    </div>
  );
} 