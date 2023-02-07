// do not render bar chart if no rainfall?

import { useEffect} from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import type { RootState } from "../app/store";
import { updateRainfall } from "../features/rainfall/rainfallSlice";
import { fetchRainfall } from "../models/apiQueries";
import "../css/Rainfall.css";
import { Card, CardContent } from "@mui/material";
import { RainfallBarChart } from "./RainfallBarChart";


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
      //assign to redux state
      dispatch(updateRainfall(todaysRainfallArr));
    };
    currentRainfall();
  }, [currentLocation, dispatch]);



  return (
    <section>
      <Card style={{ border: "none", boxShadow: "none" }}>
      <CardContent
        style={{ backgroundColor: "#18191a" }}
        sx={{ width: "75rem", height: "15rem" }}
      >
       <RainfallBarChart></RainfallBarChart>
       </CardContent>
      </Card>
    </section>
  );
};
