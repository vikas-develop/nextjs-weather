'use client';

import { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import { getWeatherByCity } from '@/services/weatherService';
import { WeatherData } from '@/types/weather';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, CloudSun } from 'lucide-react';

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
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] p-4 space-y-6">
      <SearchBar onSearch={handleSearch} isLoading={loading} />
      
      {loading && (
        <div className="text-center text-muted-foreground">
          Loading weather data...
        </div>
      )}

      {error && (
        <Alert variant="destructive" className="max-w-md">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {weather && <WeatherCard data={weather} />}

      {!weather && !loading && !error && (
        <Alert className="max-w-md border-dashed">
          <CloudSun className="h-4 w-4" />
          <AlertTitle>Welcome!</AlertTitle>
          <AlertDescription>
            Enter a city name to get the weather information
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
