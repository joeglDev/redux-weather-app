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

 //methods
 let keyValueForTable = 0;
let count = 0;
let tabIndexValue = 1;
/**
 * calculates the tabIndex of the table cells so that tabIndex increments in a down one than up right diagonal up manner. 
 * THis means that when table is navigated using the tab key than hour label followed by rainfall label is displayed.
 * 
 * @returns {number} tabIndexValue - a number representing the value of the table cell's tabIndex
 */
 const changeTabIndexValue = () => {
   if (count === 0) { count++;} else if (count <= 23 && count > 0) {count++; tabIndexValue +=2;} else if (count === 24 ) {count++;tabIndexValue = 1} else if (count > 24) {tabIndexValue +=2};
   return tabIndexValue
 }

    return (
        <section className="RainfallTable__section">
            <table className="RainfallTable__section__table">
                <caption className="RainfallTable__section__table__caption">Hourly rainfall of the day in mm of rain per hour.</caption>
  <tr>
    {labels.map((label) => {
        keyValueForTable++;
        return (
            <th key={keyValueForTable}tabIndex={changeTabIndexValue()}>{label}</th>
        )
    })}
  </tr>
  <tr>
    {currentRainfall.map((data) => {
          keyValueForTable++;
        return (
            <td className={`RainfallTable__table__cell__${data < 5 ? "low": data < 10 ? "mid" : "high"}`} key={keyValueForTable} tabIndex={changeTabIndexValue()}>{data}</td>
        )
    })}
  </tr>
  </table>
        </section>
    )
}