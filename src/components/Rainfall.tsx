import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import type { RootState } from "../app/store";
import { updateRainfall } from "../features/rainfall/rainfallSlice";
import { fetchRainfall } from "../models/apiQueries";
import "../css/Rainfall.css";
import { Card } from "@mui/material";
//bar
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
} from "react-vis";

export const Rainfall = () => {
  //variables

  //states
  const [chartRainfallData, setChartRainfallData] = useState([
    { x: "default", y: 1 },
  ]);

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

  //update rainfall data from store for bar chart
  useEffect(() => {
    const labels = [
      "00:00",
      "01:00",
      "02:00",
      "03:00",
      "04:00",
      "05:00",
      "06:00",
      "07:00",
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
      "24:00",
    ];
console.log("rerender2")
    const processedData = currentRainfall.map((rainfall, index) => {
      return { x: labels[index], y: rainfall };
    });
    setChartRainfallData(processedData);
  }, [currentRainfall]);

  return (
    <section>
      <Card style={{ border: "none", boxShadow: "none" }}>
        <XYPlot xType="ordinal" width={1200} height={250}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <VerticalBarSeries
            barWidth={1}
            className="vertical-bar-series-example"
            data={chartRainfallData}
          />
        </XYPlot>
      </Card>
    </section>
  );
};
