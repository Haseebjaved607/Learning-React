import { useState } from "react";
import PropTypes from 'prop-types';
import Item from "./item"; 

const FoodItems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
        key={item}
          foodItem={item}
          bought={activeItems.includes(item)}  // bought should be a boolean
          handleBuyButton={() => onBuyButton(item)} // handleBuyButton is a function
        />
      ))}
    </ul>
  );
};

FoodItems.propTypes = {
  items: PropTypes.array.isRequired,  // items should be an array
};

export default FoodItems;
