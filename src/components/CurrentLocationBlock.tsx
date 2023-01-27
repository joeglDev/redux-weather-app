import { useAppSelector } from "../app/hooks";
import type { RootState } from '../app/store';
import Card from '@mui/material/Card';
import { CardContent, Typography } from "@mui/material";



export const CurrentLocationBlock = () => {
      //redux states
   /**
   * Gets location state from redux store.
   */
   const currentLocation = useAppSelector((state: RootState) => {
    return state.location;
  });

  return (
    <section>
       <Card />
       <CardContent  style={{backgroundColor:'#18191a'}} sx={{width: '15rem', height: '15rem'}}>
       <Typography style={{backgroundColor:'#18191a', color: 'white', fontSize: 30 }} variant="h1">Current Location</Typography>
        <Typography style={{backgroundColor:'#18191a', color: 'white', fontSize: 40, textAlign: 'center'}} variant="body1">{`${currentLocation.name}, ${currentLocation.country}`}</Typography>
       </CardContent>
      <Card />
      
    </section>
  )
};