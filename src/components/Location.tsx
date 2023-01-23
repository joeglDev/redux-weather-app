import React, { useState } from "react";
import "../css/Location.css";
import { fetchLocation } from "../models/apiQueries";
import { locationData } from "../../interfaces";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import type { RootState } from '../app/store';
import { updateCurrentLocation } from "../features/location/locationSlice";

export const Location = () => {

  //redux states
   /**
   * Gets location state from redux store.
   */
   const currentLocation = useAppSelector((state: RootState) => {
    return state;
  });


  //states

  // types location for initial search
  const [location, setLocation] = useState("");
  // selected final location id
  const [selectedLocation, setSelectedLocation] = useState("");
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
    setPossibleLocations(fetchedData);
  };

  /**
   * Filters possibleLocations state to a specific city object
   *
   * @param {React.MouseEvent} e - react mouseclick event
   */
  const getWeatherData = (e: React.MouseEvent) => {
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
    }  else {
      const location = possibleLocations.filter((city) => {
        if (city.id === parseInt(selectedLocation)) {
          return city;
        }
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
      <form>
        <label htmlFor="location__input">Location: </label>
        <input
          id="location__input"
          type="text"
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        ></input>
        <button aria-label="search weather" onClick={handleSubmit}>
          Search
        </button>

        <label htmlFor="location__select">Select your city</label>
        <select
          id="location__select"
          onChange={(e) => {
            setSelectedLocation(e.target.value);
          }}>
          {possibleLocations.map((location) => {
            return (
              <option
                key={location.id}
                value={location.id}
              >{`${location.name}, ${location.country}`}</option>
            );
          })}
        </select>
        <button
          aria-label="get weather for this location"
          onClick={getWeatherData}
        >
          Get the weather
        </button>
      </form>
    </section>
  );
};
