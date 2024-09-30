// components/FoodItems.jsx
import PropTypes from 'prop-types';
import Item from "./Item"; // Import the Item component

const FoodItems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.length > 0 ? (
        items.map((item) => (
          <Item key={item} foodItem={item} />
        ))
      ) : (
        <li className="list-group-item">No food items available.</li>
      )}
    </ul>
  );
};

FoodItems.propTypes = {
  items: PropTypes.array.isRequired, // Validate that items is an array and is required
};

export default FoodItems;
