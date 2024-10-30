import "./App.css";
import { NumbersAndCharacters } from "./components/NumbersAndCharacters";
import { useState } from "react";

const App = () => {
  const [valueInput, setValueInput] = useState<string>("0");
  const onChange = (value: string): void => {
    setValueInput(() =>
      valueInput !== "0" ? valueInput + value.toString() : value.toString()
    );
  };
  console.log(valueInput);

  return (
    <div className="container-main">
      <div className="container-secondary"></div>
      <h1 className="title text-7xl font-bold mb-8">Calculadora</h1>
      <div className="container-calculator">
        <div className="container-input">
          <input
            alt="input"
            className="input-class font-bold"
            placeholder="Add"
            value={valueInput || "0"}
            readOnly
          />
        </div>
        <hr />
        <div>
          <NumbersAndCharacters
            onChange={onChange}
            setValueInput={setValueInput}
            valueInput={valueInput}
          />
        </div>
        <hr />
      </div>
    </div>
  );
};

export default App;
