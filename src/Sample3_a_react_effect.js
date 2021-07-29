import { useState, useEffect } from "react";
import LogNbRenders from "./LogNbRenders";

/**
 *
 * Rappels sur le hook useEffect
 * En particulier, attention au tableau des dépendances
 *
 */

export default function SampleEffectA() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();
      setUsers(users);
    })(); // SEF
  }, []);

  return (
    <div className="sample sampleState">
      <h1 className="title is-5">Sample 3-A : Effects</h1>

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
