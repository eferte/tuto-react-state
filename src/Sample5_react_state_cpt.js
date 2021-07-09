import { useState } from "react";
import LogNbRenders from "./LogNbRenders";

/**
 *
 * Le problème des closures avec plusieurs renders en React.
 *
 */

export default function SampleStateCpt() {
  const [cpt, setCpt] = useState(0);

  const handleBtnClick = () => {
    setCpt(cpt + 1);
    setTimeout(() => {
      setCpt(cpt + 1);
    }, 2000);

    /*setTimeout(() => {
      setCpt(cpt => cpt + 1);
    }, 2000);*/
  };
  return (
    <div className="sample sampleState">
      <h1 className="title is-5">Sample 5 : Have a counter</h1>
      <button className="button" onClick={handleBtnClick}>
        Compteur +2
      </button>
      <div>Valeur du compteur : {cpt}</div>

      <LogNbRenders />
    </div>
  );
}
