'use client';

import { WeatherData } from '@/types/weather';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Cloud,
  Sun,
  CloudRain,
  Snowflake,
  Zap,
  Droplets,
  Wind,
  Gauge,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface WeatherCardProps {
  data: WeatherData;
}

const getWeatherIcon = (weatherMain: string) => {
  const iconProps = { className: 'h-16 w-16' };
  
  switch (weatherMain.toLowerCase()) {
    case 'clear':
      return <Sun {...iconProps} className={cn(iconProps.className, 'text-yellow-400')} />;
    case 'clouds':
      return <Cloud {...iconProps} className={cn(iconProps.className, 'text-gray-400')} />;
    case 'rain':
      return <CloudRain {...iconProps} className={cn(iconProps.className, 'text-blue-400')} />;
    case 'snow':
      return <Snowflake {...iconProps} className={cn(iconProps.className, 'text-blue-200')} />;
    case 'thunderstorm':
      return <Zap {...iconProps} className={cn(iconProps.className, 'text-yellow-500')} />;
    default:
      return <Cloud {...iconProps} className={cn(iconProps.className, 'text-gray-400')} />;
  }
};

export default function WeatherCard({ data }: WeatherCardProps) {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1.5">
            <CardTitle className="text-2xl font-bold">
              {data.name}, {data.sys.country}
            </CardTitle>
            <CardDescription className="text-base capitalize">
              {data.weather[0].description}
            </CardDescription>
          </div>
          <div className="flex-shrink-0">
            {getWeatherIcon(data.weather[0].main)}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <div className="text-5xl font-bold mb-2">
            {Math.round(data.main.temp)}°C
          </div>
          <p className="text-muted-foreground text-lg">
            Feels like {Math.round(data.main.feels_like)}°C
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-4 border-t">
          <div className="flex flex-col items-center text-center space-y-2">
            <Droplets className="h-5 w-5 text-blue-500" />
            <div>
              <p className="text-xs text-muted-foreground mb-1">Humidity</p>
              <p className="font-semibold text-lg">
                {data.main.humidity}%
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <Wind className="h-5 w-5 text-gray-500" />
            <div>
              <p className="text-xs text-muted-foreground mb-1">Wind</p>
              <p className="font-semibold text-lg">
                {Math.round(data.wind.speed)} m/s
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <Gauge className="h-5 w-5 text-purple-500" />
            <div>
              <p className="text-xs text-muted-foreground mb-1">Pressure</p>
              <p className="font-semibold text-lg">
                {data.main.pressure}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
