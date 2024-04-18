export type Weather = {
  temperature: string
  windSpeed: string
  humidity: string
  description: WeatherCode,
  date: string
}

export type Data = {
  weather?: Weather & {
    forecast?: Weather[]
  }
  loading: boolean
}

export type Geolocation = {
  name: string,
  latitude: string,
  longitude: string,
  country_code: string,
  timezone: string,
  country: string,
}

export type SearchResults = Geolocation[]

export type WeatherCode = "Sunny" | "Sunny Cloudy" | "Fog" | "Drizzle" | "Freezing Drizzle" | "Rain" | "Freezing Rain" | "Snow fall" | "Snow grains" | "Rain showers" | "Snow showers" | "Thunderstorm"
