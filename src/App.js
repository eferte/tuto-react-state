import "./styles.css";
import SampleStateInput from "./Sample1_react_state_input";
import SampleThis from "./Sample2_js_this";
import SampleEffect from "./Sample3_react_effect";
import SampleClosure from "./Sample4_js_closure";
import SampleStateCpt from "./Sample5_react_state_cpt";

export default function App() {
  return (
    <div className="App">
      <h1 className="title">Hello CodeSandbox</h1>
      <div>
        <SampleStateInput />
        <SampleThis />
        <SampleEffect />
        <SampleClosure />
        <SampleStateCpt />
      </div>
    </div>
  );
}
