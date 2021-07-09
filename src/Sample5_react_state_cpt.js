import { useState } from "react";
import LogNbRenders from "./LogNbRenders";

export default function SampleStateCpt() {
  const [value, setValue] = useState("");
  const [cpt, setCpt] = useState(0);

  const handleChange = ({ target }) => {
    setValue(target.value.toUpperCase());
  };
  const handleBtnClick = () => {
    setCpt(cpt + 1);
    /*setTimeout(() => {
      setCpt(cpt + 1);
    }, 2000);*/

    /*setTimeout(() => {
      setCpt(cpt => cpt + 1);
    }, 2000);*/
  };
  return (
    <div className="sample sampleState">
      <h1 className="title is-5">Sample 5 : Have a counter</h1>
      <button className="button" onClick={handleBtnClick}>
        Compteur
      </button>
      <div>Vous avez cliqué : {cpt} fois</div>
      <div>
        <input
          className="input"
          name="test1"
          value={value}
          onChange={handleChange}
        />
      </div>

      <LogNbRenders />
    </div>
  );
}
