import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import { CurrentLocationBlock } from "./CurrentLocationBlock"

export const DataGrid = () => {

    return (
        <section>
            <Grid2>
                <CurrentLocationBlock></CurrentLocationBlock>
            </Grid2>
        </section>
    )
}