import "./styles.css";
import { useState, lazy, Suspense } from "react";
const SampleStateInput = lazy(() => import("./Sample1_react_state_input"));
const SampleThis = lazy(() => import("./Sample2_js_this"));
const SampleEffectA = lazy(() => import("./Sample3_a_react_effect"));
const SampleEffectB = lazy(() => import("./Sample3_b_react_effect"));
const SampleEffectC = lazy(() => import("./Sample3_c_react_effect"));
const SampleClosure = lazy(() => import("./Sample4_js_closure"));
const SampleStateCpt = lazy(() => import("./Sample5_react_state_cpt"));

const tabs = [
  { label: "react state", component: <SampleStateInput /> },
  { label: "this", component: <SampleThis /> },
  {
    label: "react effect A",
    component: (
      <div>
        <SampleEffectA /> <SampleEffectB /> <SampleEffectC />
      </div>
    )
  },
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
              <a>{label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Suspense fallback={<div />}>
          {
            tabs
              .filter(({ label }) => label === selectedTab)
              .map(({ component }) => component)[0]
          }
        </Suspense>
      </div>
    </div>
  );
}
