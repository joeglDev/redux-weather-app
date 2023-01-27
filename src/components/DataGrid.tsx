import Grid from "@mui/material/Unstable_Grid2/Grid2"
import { CurrentLocationBlock } from "./CurrentLocationBlock"
import { CurrentWeather } from "./CurrentWeather"
import { Rainfall } from "./Rainfall"

export const DataGrid = () => {

    return (
        <section>
            <Grid container spacing={1} justifyContent="center">
                <CurrentLocationBlock></CurrentLocationBlock>
                <CurrentWeather></CurrentWeather>
                <Rainfall></Rainfall>
            </Grid>
        </section>
    )
}