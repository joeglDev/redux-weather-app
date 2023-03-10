//fix issue with height when hidden
import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import type { RootState } from "../app/store";
import { updateRainfall } from "../features/rainfall/rainfallSlice";
import { fetchRainfall } from "../models/apiQueries";
import "../css/Rainfall.css";
import { Card, CardContent, Typography } from "@mui/material";
import { RainfallData } from "./RainfallData";

export const Rainfall = () => {
  //states
  const [isRaining, setIsRaining] = useState(false);
  const [displayRainfall, setDisplayRainfall] = useState(true);

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

      //check if precipitation occurs
      const sumRainfall = todaysRainfallArr.reduce((av: number, cv: number) => {
        return av + cv;
      }, 0);
      sumRainfall > 0 ? setIsRaining(true) : setIsRaining(false);
    };
    currentRainfall();
  }, [currentLocation, dispatch]);

  if (isRaining) {
    return (
      <section className="Rainfall__section">
        <h3 className="Rainfall__Card__h3">Hourly Rainfall</h3>
        <button
          className={`Rainfall__section__button ${!displayRainfall ? 'clicked' : ''}`}
          onClick={() => {
            setDisplayRainfall(!displayRainfall);
          }}
        >
          Hide hourly rainfall
        </button>
        <RainfallData displayRainfall={displayRainfall}></RainfallData>
      </section>
    );
  } else {
    return (
      <section>
        <Card style={{ border: "none", boxShadow: "none" }}>
          <CardContent
            style={{ backgroundColor: "#18191a" }}
            sx={{ width: "15rem", height: "15rem" }}
          >
            <Typography
              tabIndex={0}
              style={{
                backgroundColor: "#18191a",
                color: "white",
                fontSize: 30,
              }}
              variant="h1"
            >
              It is not currectly raining.
            </Typography>
          </CardContent>
        </Card>
      </section>
    );
  }
};
