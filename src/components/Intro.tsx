import '../css/Intro.css';
import { useAppSelector } from "../app/hooks";
import type { RootState } from '../app/store';

export const Intro = () => {

   //redux states
   /**
   * Gets location state from redux store.
   */
   const currentLocation = useAppSelector((state: RootState) => {
    return state.location;
  });


  return (
    <header>
      <h1>
        Weather dashboard by{" "}
        <a
          target="_blank"
          href="https://github.com/joeglDev"
          aria-label="link to developer's github"
        >
          Joe Gilbert
        </a>
      </h1>
      <h2>{`Your current location is: ${currentLocation.name}`}</h2>
    </header>
  );
};
