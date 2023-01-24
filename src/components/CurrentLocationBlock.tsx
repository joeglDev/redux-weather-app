import { useAppSelector } from "../app/hooks";
import type { RootState } from '../app/store';
import Card from '@mui/material/Card';
import { CardContent, Typography } from "@mui/material";
import { green } from "@mui/material/colors";


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
       <Card  />
       <CardContent  style={{backgroundColor:'#18191a'}}>
       <Typography style={{backgroundColor:'#18191a', color: 'white'}} variant="subtitle1">Current Location</Typography>
        <Typography style={{backgroundColor:'#18191a', color: 'white'}} variant="body1">{currentLocation.name}</Typography>
        <Typography style={{backgroundColor:'#18191a', color: 'white'}} variant="body2">{currentLocation.country}</Typography>
       </CardContent>
      <Card />
      
    </section>
  )
};