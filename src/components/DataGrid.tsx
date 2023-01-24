import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { CurrentLocationBlock } from "./CurrentLocationBlock"
import { CurrentWeather } from "./CurrentWeather"

export const DataGrid = () => {

    return (
        <section>
            <Grid2>
                <CurrentLocationBlock></CurrentLocationBlock>
                <CurrentWeather></CurrentWeather>
            </Grid2>
        </section>
    )
}