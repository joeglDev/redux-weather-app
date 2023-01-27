import React, { useState } from "react";
import "../css/Location.css";
import { fetchLocation } from "../models/apiQueries";
import { locationData } from "../../interfaces";
import { useAppDispatch } from "../app/hooks";
import { updateCurrentLocation } from "../features/location/locationSlice";
import { Button, MenuItem, Select } from "@mui/material";

export const Location = () => {
  //redux states

  //states

  //errir for get location api query
  const [isError, setIsError] = useState(false);
  // types location for initial search
  const [location, setLocation] = useState("");
  // selected final location id
  const [selectedLocation, setSelectedLocation] = useState("Default");
  //array of returned location objects
  const [possibleLocations, setPossibleLocations] = useState([
    {
      admin1: "",
      admin1_id: 1,
      admin2: "",
      admin2_id: 1,
      country: "",
      country_code: "",
      country_id: 1,
      elevation: 1,
      feature_code: "",
      id: 1,
      latitude: 1,
      longitude: 1,
      name: "",
      population: 1,
      timezone: "",
    },
  ]);

  //methods
  const dispatch = useAppDispatch();

  /**
   * Calls api fetch for location object and populates possibleLocations state
   *
   * @param {React.MouseEvent} e - react click event
   */
  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    const fetchedData: locationData[] = await fetchLocation(location);
    if (fetchedData) {
      setPossibleLocations(fetchedData);
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  /**
   * Filters possibleLocations state to a specific city object
   *
   * @param {React.MouseEvent} e - react mouseclick event
   */
  const pickSpecificLocation = (e: React.MouseEvent) => {
    e.preventDefault();
    //filter city objects to get lattitude and longitude of target
    if (selectedLocation === "") {
      const finalLocation = {
        name: possibleLocations[0].name,
        country: possibleLocations[0].country,
        latitude: possibleLocations[0].latitude,
        longitude: possibleLocations[0].longitude,
      };
      //assign this object to redux state
      dispatch(updateCurrentLocation(finalLocation));
    } else {
      const location = possibleLocations.filter((city) => {
        if (city.id === parseInt(selectedLocation)) {
          return city;
        } else return null
      });

      const finalLocation = {
        name: location[0].name,
        country: location[0].country,
        latitude: location[0].latitude,
        longitude: location[0].longitude,
      };
      //assign this object to redux state
      dispatch(updateCurrentLocation(finalLocation));
    }
  };

  return (
    <section>
      <h2
        className={
          isError ? "location__h2__error" : "location__h2__error hidden"
        }
      >
        Location not found. Please check spelling and try again.
      </h2>
      <form className="Location__form">
        <label htmlFor="location__input">Location: </label>
        <input
          id="location__input"
          type="text"
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        ></input>
        <Button
          variant="contained"
          color="primary"
          aria-label="search location"
          onClick={handleSubmit}
        >
          Search Location
        </Button>

        <label htmlFor="location__select">Select your city</label>
        <Select
        value={""}
        label="location__select"
          id="location__select"
          onChange={(e) => {
            setSelectedLocation(e.target.value);
          }}
        >
          {possibleLocations.map((location) => {
            return (
              <MenuItem
                key={location.id}
                value={location.id}
              >{`${location.name}, ${location.country}`}
              </MenuItem>
            );
          })}
        </Select>

        <Button
          variant="contained"
          color="primary"
          aria-label="get weather for this location"
          onClick={pickSpecificLocation}
        >
          Get the weather
        </Button>
      </form>
    </section>
  );
};
