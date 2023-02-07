import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import type { RootState } from "../app/store";
import { updateRainfall } from "../features/rainfall/rainfallSlice";
import { fetchRainfall } from "../models/apiQueries";
import '../css/Rainfall.css';
//chart js
import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { Card, CardContent } from "@mui/material";

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
  console.log(currentRainfall);

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

  //Bar chart
  const options = {
    responsive: true,
    
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Today's Rainfall",
        color: 'white',
      },
     
        labels: {font: {fontColor: 'white'},}
    
    },
  };

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

  const data = {
    labels,
    datasets: [
      {
        label: "Rainfall/ mm",
        data: currentRainfall,
        backgroundColor: "#4169E1",
      },
    ],
  
  };

  const plugin = [{
    beforeDraw: function(Bar: any) {
      const ctx = Bar.ctx;

      const chartArea = Bar.chartArea;

  
      // Chart background
     
    
      ctx.fillStyle = '#18191a';
      ctx.fillRect(chartArea.left - chartArea.left, 8 * (chartArea.left) ,
        chartArea.right , -10*(chartArea.top) );
    }, 
    id: 'Bar',
  }];

  return (
    <section>
     <Card style={{ border: "none", boxShadow: "none" }}>
      <CardContent style={{backgroundColor:'#18191a' }} sx={{width: '30rem', height: '15rem'}}>
          <Bar plugins={plugin} options={options} data={data} />
          </CardContent>
          </Card>
    </section>
  );
};
