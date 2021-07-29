import { useState, useEffect } from "react";
import LogNbRenders from "./LogNbRenders";

/**
 *
 * Rappels sur le hook useEffect
 * En particulier, attention au tableau des dépendances
 *
 */

export default function SampleEffect() {
  const [duration, setDuration] = useState(0);

  // penser fonction pure... effets de bords
  useEffect(() => {
    let start = new Date();
    setTimeout(() => {
      const newDuration = new Date() - start;
      setDuration(newDuration);
    }, 5000);
  }, []);

  const handleTimerReset = () => {};

  return (
    <div className="sample sampleState">
      <h1 className="title is-5">Sample 3-B : Effects</h1>

      <div>
        Durée : <b>{duration}</b>
      </div>
      <button className="button" onClick={handleTimerReset}>
        Reset Timer
      </button>
      <LogNbRenders />
    </div>
  );
}
