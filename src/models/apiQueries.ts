
/**
 * Fetches the locations matching the input.
 * 
 * @param {string} location - location input
 * @returns 
 */
export const fetchLocation = async (location: string) => {
  try {
    const rawData = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${location}`
    );
    const data = await rawData.json();
    console.log(data.results)
    return data.results ;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCurrentWeather = async (latitude: number, longitude: number) => {
  try {
    //daily https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max&timezone=auto&daily=temperature_2m_min&daily=weathercode&daily=precipitation_sum
    const rawData = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    const data = await rawData.json();
    if (!data.current_weather) {
      console.log(data.error, data.reason)
    }
    return data.current_weather;
  } catch (error) {
    console.log(error);
  }
};
