import { useState } from "react";
import LogNbRenders from "./LogNbRenders";

/**
 *
 * Le this en javascript ne fonctionne pas comme
 * le this des autres langages habituels
 *
 */

class Person {
  name;
  constructor(name) {
    this.name = name;
    // bind ?
  }
  sayHello() {
    console.log("Hello");
    //console.log("Hello, my name is " + this.name);
    /* setTimeout(function () {
      console.log("My name is " + this.name);
    }, 500); */
  }
}

export default function SampleThis() {
  const [phil] = useState(new Person("Philippe"));

  return (
    <div className="sample sampleState">
      <h1 className="title is-5">Sample 2 : This in Javascript</h1>
      <div>
        <button className="button" onClick={() => phil.sayHello()}>
          1 Click here.
        </button>
        <button className="button" onClick={phil.sayHello}>
          2 Click here
        </button>
      </div>
      <LogNbRenders />
      (Notez qu'il n'y a pas de nouveaux renders react...)
    </div>
  );
}
