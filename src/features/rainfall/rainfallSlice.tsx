import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define the initial state using that type
const initialState: number[] = [
  0, 0, 0, 0, 0, 0, 0, 1, 2, 4, 4, 5, 4, 4, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0,
];

export const rainfallSlice = createSlice({
  name: "rainfall",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  //hook actions = reducers
  reducers: {
    //reducer to add a update rainfall array.

    updateRainfall: (state: number[], action: PayloadAction<number[]>) => {
      return [...action.payload];
    },
  },
});

//export reducer actions
export const { updateRainfall } = rainfallSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectRainfall = (state: RootState) => state.rainfall;

export default rainfallSlice.reducer;
