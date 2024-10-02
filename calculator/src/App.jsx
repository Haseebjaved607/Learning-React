import "./App.css";
import Calbttons from "./components/buttons";
import DisplayArea from "./components/display";

function App() {
  return (
    <>
      <div className="calculator">
        <DisplayArea />
        <Calbttons />
      </div>
    </>
  );
}

export default App;
