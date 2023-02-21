import { RainfallBarChart } from "./RainfallBarChart";
import { RainfallTable } from "./RainfallTable";
import { Card } from "@mui/material";

export const RainfallData = ({displayRainfall} : {displayRainfall: boolean}) => {
    if (displayRainfall) {
      return (
        <Card
          style={{
            border: "none",
            boxShadow: "none",
            margin: "0",
            padding: "0",
            backgroundColor: "#18191a",
          }}
        >
          
          <RainfallBarChart></RainfallBarChart>
          <RainfallTable></RainfallTable>
        </Card>
      );
    } else {
      return  <Card
      style={{
        border: "none",
        boxShadow: "none",
        margin: "0",
        padding: "0",
        backgroundColor: "#18191a",
      }}
      sx={{width: '15rem', height: '15rem'}}
    />
    }
  };