import { useState, useEffect } from "react";
import LogNbRenders from "./LogNbRenders";

/**
 *
 * Rappels sur le hook useEffect
 * En particulier, attention au tableau des dépendances
 *
 */

export default function SampleEffectB() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users${
          name ? "?name=" + name : ""
        }`
      );
      const users = await response.json();
      setUsers(users);
    })();
  }, [name]);

  return (
    <div className="sample sampleState">
      <h1 className="title is-5">Sample 3-B : Effects</h1>

      <div className="field" style={{ textAlign: "left" }}>
        <label className="label" htmlFor="namefilter">
          Filter by name
        </label>
        <div className="control">
          <input
            name="namefilter"
            className="input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>

      <div>
        <label className="label" htmlFor="namefilter">
          Users:
        </label>
        {users && users.map((user) => <div key={user.id}>{user.name}</div>)}
      </div>

      <LogNbRenders />
    </div>
  );
}
