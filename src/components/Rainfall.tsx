import { Card, CardContent } from "@mui/material";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import type { RootState } from "../app/store";
import { updateRainfall } from "../features/rainfall/rainfallSlice";
import { fetchRainfall } from "../models/apiQueries";

export const Rainfall = () => {
  //redux states
  /**
   * Gets location state from redux store.
   * 
   * @returns {locationType} - Object represnting a specific location.
   */
  const currentLocation = useAppSelector((state: RootState) => {
    return state.location;
  });

  /**
   * Gets rainfall state state from redux store.
   * 
   * @returns {number[]} Array representing rainfall values of the day from midnight to 11pm
   */
  const currentRainfall = useAppSelector((state: RootState) => {
    return state.rainfall;
  });
  console.log("STATE:", currentRainfall);

  //variables
  const dispatch = useAppDispatch();

  //methods
  useEffect(() => {
    const currentRainfall = async () => {
      const fetchedData = await fetchRainfall(
        currentLocation.latitude,
        currentLocation.longitude
      );
      const todaysRainfallArr = fetchedData.hourly.precipitation.slice(0, 24);
      //assign to state
      dispatch(updateRainfall(todaysRainfallArr));
    };
    currentRainfall();
  }, [currentLocation, dispatch]);

  return (
    <section>
      <Card>
        <CardContent
          style={{ backgroundColor: "#18191a" }}
          sx={{ width: "30rem", height: "15rem" }}
        ></CardContent>
      </Card>
    </section>
  );
};
