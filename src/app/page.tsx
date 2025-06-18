'use client';

import { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import { getWeatherByCity } from '@/services/weatherService';
import { WeatherData, WeatherError } from '@/types/weather';

export default function Home() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async (city: string) => {
    setLoading(true);
    setError('');
    try {
      const data = await getWeatherByCity(city);
      setWeather(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch weather data');
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] p-4">
      <SearchBar onSearch={handleSearch} isLoading={loading} />
      
      {loading && (
        <div className="text-center text-gray-600 dark:text-gray-400">
          Loading weather data...
        </div>
      )}

      {error && (
        <div className="text-center text-red-500 mb-4">
          {error}
        </div>
      )}

      {weather && <WeatherCard data={weather} />}

      {!weather && !loading && !error && (
        <div className="text-center text-gray-600 dark:text-gray-400">
          Enter a city name to get the weather information
        </div>
      )}
    </div>
  );
}
