// components/Item.jsx
import PropTypes from 'prop-types';

const Item = ({ foodItem }) => {
  return (
    <li className="list-group-item">{foodItem}</li>
  );
};

Item.propTypes = {
  foodItem: PropTypes.string.isRequired, // Validate that foodItem is a string and is required
};

export default Item;
