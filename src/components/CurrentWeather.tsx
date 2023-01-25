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
   */
  const currentLocation = useAppSelector((state: RootState) => {
    return state.location;
  });


   /**
   * Gets currentWeather state from redux store.
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
      if (condition === 0) {fetchedData.weathercode = "Clear Skies"} 
      else if (condition === 1 || condition === 2 || condition === 3) {fetchedData.weathercode = "Mainly clear, partly cloudy, and overcast"} 
        //finish off next time

      //assign to global state here
      dispatch(updateCurrentWeather(fetchedData))

      
    };

    currentWeather();

    
  } catch(e : any) {console.log(e.message)}
  }, [currentLocation, dispatch]);



  return (
    <section>
      <Card />
      <CardContent style={{ backgroundColor: "#18191a" }}>
        <Typography
          style={{ backgroundColor: "#18191a", color: "white" }}
          variant="subtitle1"
        >
          Today's weather forecast
        </Typography>

        <Typography
          style={{ backgroundColor: "#18191a", color: "white" }}
          variant="body1"
        >
          {`Temperature: ${currentWeather.temperature}'C`}
        </Typography>

        <Typography
          style={{ backgroundColor: "#18191a", color: "white" }}
          variant="body1"
        >
          {`Wind Direction: ${currentWeather.winddirection}'`}
        </Typography>

        <Typography
          style={{ backgroundColor: "#18191a", color: "white" }}
          variant="body1"
        >
          {`Windspeed: ${currentWeather.windspeed} Km/h`}
        </Typography>

        <Typography
          style={{ backgroundColor: "#18191a", color: "white" }}
          variant="body1"
        >
          {`Weather: ${currentWeather.weathercode}`}
        </Typography>
    
      </CardContent>
      <Card />
    </section>
  );
};
