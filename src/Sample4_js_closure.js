import { useState } from "react";
import LogNbRenders from "./LogNbRenders";

/**
 *
 * Les closures en Javazscript
 *
 */

function makeCompteur() {
  let compteur = 0;
  return function () {
    compteur++;
    console.log(compteur);
  };
}

const increment = makeCompteur();
// ici makeCompteur n'est plus utilisé,
// le moteur js peut donc supprimer la fonction
// de la mémoire ainsi que toutes les variables
// allouées dans la fonction comme la variable "compteur".
// Vraiment ???
increment();
increment();
increment();

export default function SampleClosure() {
  const [userDuration, setUserDuration] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleChange = ({ target }) => {
    setUserDuration(parseInt(target.value, 0));
  };

  const handleTimerStart = () => {
    setTimeout(() => {
      setDuration(userDuration);
    }, 5000);
  };

  return (
    <div className="sample sampleState">
      <h1 className="title is-5">Sample 4 : Closures</h1>

      <div>
        <input
          className="input"
          name="test1"
          type="number"
          value={userDuration}
          onChange={handleChange}
        />
      </div>
      <div>
        User number: <b>{duration}</b>
      </div>
      <button className="button" onClick={handleTimerStart}>
        Start Timer
      </button>
      <LogNbRenders />
    </div>
  );
}
