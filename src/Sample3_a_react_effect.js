import { useState, useEffect } from "react";
import LogNbRenders from "./LogNbRenders";

/**
 *
 * Rappels sur le hook useEffect
 * En particulier, attention au tableau des dépendances
 *
 */

export default function SampleEffect() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((users) =>
      setUsers(users)
    );
  }, []);

  return (
    <div className="sample sampleState">
      <h1 className="title is-5">Sample 3-A : Effects</h1>

      <div>
        {users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>

      <LogNbRenders />
    </div>
  );
}
