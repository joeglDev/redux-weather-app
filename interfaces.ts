export interface locationData {
  admin1: string;
  admin1_id: number;
  admin2: string;
  admin2_id: number;
  country: string;
  country_code: string;
  country_id: number;
  elevation: number;
  feature_code: string;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  population: number;
  timezone: string;
}

export interface locationType {
  name: string;
  country: string;
  latitude: number;
  longitude: number;
}

export interface currentWeatherType {
  temperature: number;
  windspeed: number;
  winddirection: number;
  weathercode: number | string;
  time: string;
}

export interface weatherType {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_weather: currentWeatherType;
}
