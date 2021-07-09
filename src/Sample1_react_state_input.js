import { useState } from "react";
import LogNbRenders from "./LogNbRenders";

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
