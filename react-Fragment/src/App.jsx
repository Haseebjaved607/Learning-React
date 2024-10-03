import "./app.css";
import Container from "./components/ChildProps";
import Errormessage from "./components/Errormessage";
import FoodItems from "./components/Fooditems";
import "bootstrap/dist/css/bootstrap.min.css";
import InputItem from "./components/FoodInput";
import { useState } from "react";

function App() {
  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value.trim(); // Remove spaces

      // Only add if newFoodItem is not empty and is not already in the list
      if (newFoodItem && !foodItems.includes(newFoodItem)) {
        setFoodItems((prevItems) => [...prevItems, newFoodItem]); // Add the item
      } else {
        alert("Duplicate item or empty input!"); // Optional feedback
      }
      
      // Clear the input field regardless of whether the item was added or not
      event.target.value = "";
    }
  };

  return (
    <>
      <Container>
        <h1>Healthy Food</h1>
        <InputItem handleKeyDown={onKeyDown} />
        <Errormessage items={foodItems} />
        <FoodItems items={foodItems} />
      </Container>
    </>
  );
}

export default App;
