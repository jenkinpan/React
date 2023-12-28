import { useState } from "react";
import PropTypes from "prop-types";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  return (
    <>
      <Step step={step} setStep={setStep} />
      <Count count={count} setCount={setCount} step={step} />
    </>
  );
}

Step.propTypes = {
  step: PropTypes.number.isRequired,
  setStep: PropTypes.func.isRequired,
};

function Step({ step, setStep }) {
  return (
    <div>
      <button onClick={() => setStep(step - 1)}>-</button>
      <span>Step:{step}</span>
      <button onClick={() => setStep(step + 1)}>+</button>
    </div>
  );
}

Count.propTypes = {
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
};

function Count({ count, setCount, step }) {
  return (
    <div>
      <button onClick={() => setCount(count - step)}>-</button>
      <span>Count:{count}</span>
      <button onClick={() => setCount(count + step)}>+</button>
    </div>
  );
}

export default App;
