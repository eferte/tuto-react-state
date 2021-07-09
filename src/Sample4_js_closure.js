import { useState } from "react";
import LogNbRenders from "./LogNbRenders";

export default function SampleClosure() {
  const [userDuration, setUserDuration] = useState(0);
  const [duration, setDuration] = useState(0);
  const [timerStarted, setTimerStarted] = useState(false);

  const handleChange = ({ target }) => {
    setUserDuration(parseInt(target.value, 0));
  };

  const handleTimerStart = () => {
    if (timerStarted) {
      return;
    }

    setDuration(userDuration);
    let start = new Date();
    setTimerStarted(true);
    setTimeout(() => {
      const newDuration = new Date() - start;

      setDuration(newDuration + userDuration);
      setTimerStarted(false);
    }, 4000);
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
        Durée totale : <b>{duration}</b> (user duration + timer duration)
      </div>
      <button className="button" onClick={handleTimerStart}>
        {timerStarted ? "Running..." : "Start Timer"}
      </button>
      <LogNbRenders />
    </div>
  );
}
