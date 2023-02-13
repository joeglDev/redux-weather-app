import { useAppDispatch, useAppSelector } from "../app/hooks";
import type { RootState } from "../app/store";
import Card from "@mui/material/Card";
import { CardContent, Typography } from "@mui/material";
import { useEffect } from "react";
import { fetchCurrentWeather } from "../models/apiQueries";
import { updateCurrentWeather } from "../features/weather/currentWeatherSlice";

export const CurrentWeather = () => {
  //redux states

  /**
   * Gets location state from redux store.
   *
   * * @returns {locationType} - Object represnting a specific location.
   */
  const currentLocation = useAppSelector((state: RootState) => {
    return state.location;
  });

  /**
   * Gets currentWeather state from redux store.
   *
   * @returns {currentWeatherType} - Object representing current weather.
   */
  const currentWeather = useAppSelector((state: RootState) => {
    return state.currentWeather;
  });
  //states

  //variables
  const dispatch = useAppDispatch();

  //methods
  /**
   * useEffect to run every render. Each render gets weather forecast and assigns to redux state.
   *
   */
  useEffect(() => {
    try {
      const currentWeather = async () => {
        const fetchedData = await fetchCurrentWeather(
          currentLocation.latitude,
          currentLocation.longitude
        );

        //modify weathercode
        const condition = fetchedData.weathercode;
        if (condition === 0) {
          fetchedData.weathercode = "Clear Skies";
        } else if (condition === 1) {
          fetchedData.weathercode = "Mainly clear";
        } else if (condition === 2) {
          fetchedData.weathercode = "Partly cloudy";
        } else if (condition === 3) {
          fetchedData.weathercode = "Overcast";
        } else if (condition === 45) {
          fetchedData.weathercode = "Fog";
        } else if (condition === 48) {
          fetchedData.weathercode = "Depositing rime fog";
        } else if (condition === 51) {
          fetchedData.weathercode = "Light drizzle";
        } else if (condition === 53) {
          fetchedData.weathercode = "Moderate drizzle";
        } else if (condition === 55) {
          fetchedData.weathercode = "Intense drizzle";
        } else if (condition === 56) {
          fetchedData.weathercode = "Light freezing drizzle";
        } else if (condition === 57) {
          fetchedData.weathercode = "Dense freezing drizzle";
        } else if (condition === 61) {
          fetchedData.weathercode = "Light rainfall";
        } else if (condition === 63) {
          fetchedData.weathercode = "Moderate rainfall";
        } else if (condition === 65) {
          fetchedData.weathercode = "Intense rainfall";
        } else if (condition === 66) {
          fetchedData.weathercode = "Light freezing rainfall";
        } else if (condition === 67) {
          fetchedData.weathercode = "Intense freezing rainfall";
        } else if (condition === 71) {
          fetchedData.weathercode = "Light snowfall";
        } else if (condition === 73) {
          fetchedData.weathercode = "Moderate snowfall";
        } else if (condition === 75) {
          fetchedData.weathercode = "Intense snowfall";
        } else if (condition === 77) {
          fetchedData.weathercode = "Snow grains";
        } else if (condition === 80) {
          fetchedData.weathercode = "Light rain showers";
        } else if (condition === 81) {
          fetchedData.weathercode = "Moderate rain showers";
        } else if (condition === 82) {
          fetchedData.weathercode = "Intense rain showers";
        } else if (condition === 85) {
          fetchedData.weathercode = "Light snow shower";
        } else if (condition === 86) {
          fetchedData.weathercode = "Intense snow shower";
        } else if (condition === 95) {
          fetchedData.weathercode = "Thunderstorm";
        } else if (condition === 96) {
          fetchedData.weathercode = "Thunderstorm with light hail";
        } else if (condition === 99) {
          fetchedData.weathercode = "Thunderstorm with intense hail";
        } else {
          fetchedData.weathercode = "Unknown weather type";
        }

        //finish off next time

        //assign to global state here
        dispatch(updateCurrentWeather(fetchedData));
      };

      currentWeather();
    } catch (e: any) {
      console.log(e.message);
    }
  }, [currentLocation, dispatch]);

  return (
    <section>
      <Card className="currentweather__section__card" />
      <CardContent
        style={{ backgroundColor: "#18191a" }}
        sx={{ width: "15rem", height: "15rem" }}
      >
        <Typography
          tabIndex={0}
          style={{ backgroundColor: "#18191a", color: "white", fontSize: 30 }}
          variant="h1"
        >
          Today's weather forecast
        </Typography>

        <Typography
          tabIndex={0}
          style={{
            backgroundColor: "#18191a",
            color: "white",
            fontSize: 40,
            textAlign: "center",
          }}
          variant="body1"
        >
          {`${currentWeather.temperature}℃`}
        </Typography>

        <Typography
          tabIndex={0}
          style={{
            backgroundColor: "#18191a",
            color: "white",
            fontSize: 20,
            textAlign: "center",
          }}
          variant="body1"
        >
          {`💨 ${currentWeather.winddirection}' / ${currentWeather.windspeed} km/h`}
        </Typography>

        <Typography
          tabIndex={0}
          style={{
            backgroundColor: "#18191a",
            color: "white",
            fontSize: 20,
            textAlign: "center",
          }}
          variant="subtitle1"
        >
          {`${currentWeather.weathercode}`}
        </Typography>
      </CardContent>
      <Card />
    </section>
  );
};
