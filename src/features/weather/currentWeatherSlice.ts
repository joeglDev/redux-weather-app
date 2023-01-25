import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import type { PayloadAction } from "@reduxjs/toolkit";
import { currentWeatherType} from "../../../interfaces";

// Define the initial state using that type
const initialState: currentWeatherType = {
  temperature: 26.5,
  time: "2023-01-25T17:00",
  weathercode: 2,
  winddirection: 39,
  windspeed: 27.2,
};

export const currentWeatherSlice = createSlice({
  name: "currentWeather",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  //hook actions = reducers
  reducers: {
    //reducer to add a update location
    
    updateCurrentWeather: (
      state: currentWeatherType,
      action: PayloadAction<currentWeatherType>
    ) => {
      state.temperature = action.payload.temperature;
      state.time = action.payload.time;
      state.weathercode = action.payload.weathercode;
      state.winddirection = action.payload.winddirection;
      state.windspeed = action.payload.windspeed;
      
    },
  
  },
  
});

//export reducer actions
export const { updateCurrentWeather } = currentWeatherSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectcurrentWeather = (state: RootState) => state.currentWeather;

export default currentWeatherSlice.reducer;
