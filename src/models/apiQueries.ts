
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
    return data.results ;
  } catch (error) {
    console.log(error);
  }
};
