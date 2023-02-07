// issue to many rerenders on useEffect on boot
import '../css/RainfallBarChart.css';
import { useState, useEffect } from "react";
import type { RootState } from "../app/store";
import { useAppSelector} from "../app/hooks";
//bar
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries,
    ChartLabel,
  } from "react-vis";

export const RainfallBarChart = () => {
//states
const [chartRainfallData, setChartRainfallData] = useState([
    { x: "default", y: 1 },
  ]);

  //redux states
  /**
   * Gets rainfall state state from redux store.
   *
   * @returns {number[]} Array representing rainfall values of the day from midnight to 11pm
   */
  const currentRainfall = useAppSelector((state: RootState) => {
    return state.rainfall;
  });

      //methods
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
    
    const processedData = currentRainfall.map((rainfall, index) => {
      return { x: labels[index], y: rainfall };
    });
    setChartRainfallData(processedData);
  }, [currentRainfall]);

  return (
    <XYPlot className="RainfallBarChart__XYPlot" margin={{left: 100, bottom: 100}} xType="ordinal" width={1200} height={250} xDistance={100} yDistance={100}>
    <VerticalGridLines />
    <HorizontalGridLines />
    <XAxis />
    <YAxis />
    <ChartLabel
    text="Rainfall/mm"
    className="alt-y-label"
    includeMargin={false}
    xPercent={-0.06}
    yPercent={0.2}
    style={{
      transform: 'rotate(-90)',
      textAnchor: 'end'
    }}
    />
      <ChartLabel
    text="Time of day/ hour"
    className="alt-x-label"
    includeMargin={false}
    xPercent={0.5}
    yPercent={1.5}
    style={{
      textAnchor: 'end'
    }}
    />
    <VerticalBarSeries
      barWidth={0.8}
      className="vertical-bar-series-example"
      data={chartRainfallData}
      color={"blue"}
    />
  </XYPlot>
  )
};

