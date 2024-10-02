// App.jsx
import "./app.css";
import Container from "./components/ChildProps";
import Errormessage from "./components/Errormessage";
import FoodItems from "./components/Fooditems";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let foodItems = [
    "sabzi",
    "chicken",
    "mutton",
    "baryani",
    "kharahi",
    "nehari",
  ];

  // let foodItems = [];
  return (
    <>
    <Container>
      <h1>Healthy Food</h1>
      <Errormessage items={foodItems} />
      <FoodItems items={foodItems} />
    </Container>
    </>
  );
}

export default App;
