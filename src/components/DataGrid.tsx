import Grid from "@mui/material/Unstable_Grid2/Grid2"
import { CurrentLocationBlock } from "./CurrentLocationBlock"
import { CurrentWeather } from "./CurrentWeather"

export const DataGrid = () => {

    return (
        <section>
            <Grid container spacing={2} justifyContent="center">
                <CurrentLocationBlock></CurrentLocationBlock>
                <CurrentWeather></CurrentWeather>
            </Grid>
        </section>
    )
}