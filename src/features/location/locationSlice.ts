import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import type { PayloadAction } from "@reduxjs/toolkit";
import { locationType } from "../../../interfaces";

// Define the initial state using that type
const initialState: locationType = {
  name: "Manchester",
  country: "United Kingdom",
  latitude: 53.48,
  longitude: 2.24,
};

export const locationSlice = createSlice({
  name: "location",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  //hook actions = reducers
  reducers: {
    //reducer to add a update location
    updateCurrentLocation: (
      state: locationType,
      action: PayloadAction<locationType>
    ) => {
      state.name = action.payload.name;
      state.country = action.payload.country;
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
    },
  },
});

//export reducer actions
export const { updateCurrentLocation } = locationSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectLocation = (state: RootState) => state.location;

export default locationSlice.reducer
