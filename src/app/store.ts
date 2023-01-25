import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import locationReducer from '../../src/features/location/locationSlice';
import currentWeatherReducer from '../../src/features/weather/currentWeatherSlice';

export const store = configureStore({
  reducer: {
    location: locationReducer,
    currentWeather: currentWeatherReducer,
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

