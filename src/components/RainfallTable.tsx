import type { RootState } from "../app/store";
import { useAppSelector} from "../app/hooks";
import '../css/RainfallTable.css';

export const RainfallTable = () => {

     //redux states
  /**
   * Gets rainfall state state from redux store.
   *
   * @returns {number[]} Array representing rainfall values of the day from midnight to 11pm
   */
  const currentRainfall = useAppSelector((state: RootState) => {
    return state.rainfall;
  });
    return (
        <section>
            <h3 className="RainfallTable__h3">{"Hourly rainfall (tabular)"}</h3>
        </section>
    )
}