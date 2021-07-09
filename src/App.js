import "./styles.css";
import { useState } from "react";
import SampleStateInput from "./Sample1_react_state_input";
import SampleThis from "./Sample2_js_this";
import SampleEffect from "./Sample3_react_effect";
import SampleClosure from "./Sample4_js_closure";
import SampleStateCpt from "./Sample5_react_state_cpt";

const tabs = [
  { label: "react state", component: <SampleStateInput /> },
  { label: "this", component: <SampleThis /> },
  { label: "react effect", component: <SampleEffect /> },
  { label: "closure", component: <SampleClosure /> },
  { label: "closure effect", component: <SampleStateCpt /> }
];

export default function App() {
  const [selectedTab, setSelectedTab] = useState(tabs[0].label);
  return (
    <div className="App">
      <h1 className="title">Hello CodeSandbox</h1>
      <div className="tabs">
        <ul>
          {tabs.map(({ label }) => (
            <li
              key={label}
              className={selectedTab === label ? "is-active" : ""}
              onClick={() => setSelectedTab(label)}
            >
              <a>react state</a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        {
          tabs
            .filter(({ label }) => label === selectedTab)
            .map(({ component }) => component)[0]
        }
      </div>
    </div>
  );
}
