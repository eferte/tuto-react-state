import { useState } from "react";

export default function SampleState() {
  const [value, setValue] = useState("");
  const handleChange = ({ target }) => {
    setValue(target.value);
  };
  return (
    <div className="panel SampleState">
      <h1 className="title is-5">Sample 1 : Component with State</h1>

      <div>
        <input
          className="input"
          name="test1"
          value={value}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
