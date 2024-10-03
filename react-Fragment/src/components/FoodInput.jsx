import PropTypes from "prop-types";

const InputItem = ({ handleKeyDown }) => {
  return (
    <input
      type="text"
      placeholder="Enter Food Item here"
      // className={foodInput}
      onKeyDown={handleKeyDown}
    />
  );
};
InputItem.propTypes = {
    handleKeyDown: PropTypes.func.isRequired, 
};
export default InputItem;
