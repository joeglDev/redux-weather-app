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

  //variables
  const labels = [
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "24:00",
  ];

    return (
        <section>
            <h3 className="RainfallTable__h3">{"Hourly rainfall (tabular)"}</h3>
            <table>
                <caption>Hourly rainfall of the day in mm of rain per hour.</caption>
  <tr>
    {labels.map((label) => {
        return (
            <th>{label}</th>
        )
    })}
  </tr>
  <tr>
    {currentRainfall.map((data) => {
        return (
            <td>{data}</td>
        )
    })}
  </tr>
  </table>
        </section>
    )
}