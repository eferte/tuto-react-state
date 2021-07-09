import { useState } from "react";
import LogNbRenders from "./LogNbRenders";

class Person {
  name;
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log("Hello");
    //console.log("Hello, my name is " + this.name);
  }
}

export default function SampleThis() {
  const [phil] = useState(new Person("Philippe"));

  return (
    <div className="sample sampleState">
      <h1 className="title is-5">Sample 2 : This in Javascript</h1>
      <div>
        <button className="button" onClick={() => phil.sayHello()}>
          First Click here.
        </button>
        <button className="button" onClick={phil.sayHello}>
          Second Click here
        </button>
      </div>
      <LogNbRenders />
      (Notez qu'il n'y a pas de nouveaux renders react...)
    </div>
  );
}
