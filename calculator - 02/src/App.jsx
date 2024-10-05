import { useState } from "react";
import "./App.css";
import Calbttons from "./components/buttons";
import DisplayArea from "./components/display";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonName) => {
    if (buttonName === "C") {
     setCalVal("")
    } else if (buttonName === "=") {
      /* empty */
      const result = eval(calVal)
      setCalVal(result)
    } else {
      const newDisplayValue = calVal + buttonName;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <>
      <div className="calculator">
        <DisplayArea displayVal={calVal} />
        <Calbttons onButtonClick={onButtonClick} />
      </div>
    </>
  );
}

export default App;
