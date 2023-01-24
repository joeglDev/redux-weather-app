import { useAppSelector } from "../app/hooks";
import type { RootState } from "../app/store";
import Card from "@mui/material/Card";
import { CardContent, Typography } from "@mui/material";
import { useEffect } from "react";
import { fetchCurrentWeather } from "../models/apiQueries";

export const CurrentWeather = () => {
  //root states
  /**
   * Gets location state from redux store.
   */
  const currentLocation = useAppSelector((state: RootState) => {
    return state.location;
  });

  //states

  //variables

  //methods
  /**
   * useEffect to run every render. Each render gets weather forecast and assigns to Root state.
   *
   */
  useEffect(() => {
    const currentWeather = async () => {
       const fetchedData = await fetchCurrentWeather(
        currentLocation.latitude,
        currentLocation.longitude
      );
      console.log("hi", fetchedData)
      console.log("in tsx",Object.keys( fetchedData));

      //assign to global state here
      return fetchedData
      
    };

    const weatherData = currentWeather();
   
   
  }, [currentLocation]);

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
      </CardContent>
      <Card />
    </section>
  );
};
