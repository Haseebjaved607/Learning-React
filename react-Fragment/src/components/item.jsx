import PropTypes from "prop-types";

const Item = ({ foodItem, bought, handleBuyButton }) => {
  return (
    <li className={`list-group-item ${bought ? "active" : ""}`}>
      {foodItem}
      <button
        className="btn btn-primary btn-sm itemlibtn"
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

Item.propTypes = {
  foodItem: PropTypes.string.isRequired, // Ensure foodItem is a string
  bought: PropTypes.bool.isRequired,     // Correct: 'bought' is a boolean, not a function
  handleBuyButton: PropTypes.func.isRequired,  // Ensure handleBuyButton is a function
};

export default Item;
