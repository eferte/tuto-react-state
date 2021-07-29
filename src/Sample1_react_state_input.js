import { useState } from "react";
import LogNbRenders from "./LogNbRenders";

/**
 *
 * Rappel sur le hook useState
 *
 * Rappel : Un composant React est une simple fonction
 *          A chaque render, la fonction est appelée
 * Que se passe-t-il sans useState
 * Comment fonctionne le useState (en interne)
 *
 */
export default function SampleState() {
  const [value, setValue] = useState("");

  const handleChange = ({ target }) => {
    setValue(target.value);
    //setValue(target.value.toUpperCase());
  };

  return (
    <div className="sample sampleState">
      <h1 className="title is-5">Sample 1 : Input with State</h1>

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
