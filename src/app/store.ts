import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import locationReducer from '../../src/features/location/locationSlice';
import currentWeatherReducer from '../../src/features/weather/currentWeatherSlice';
import rainfallReducer from '../../src/features/rainfall/rainfallSlice';

export const store = configureStore({
  reducer: {
    location: locationReducer,
    currentWeather: currentWeatherReducer,
    rainfall: rainfallReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

