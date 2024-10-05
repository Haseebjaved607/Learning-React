import PropTypes from "prop-types";

const DisplayArea = ({ displayVal }) => {
  return <input type="text" className="display" value={displayVal} readOnly />;
};

DisplayArea.propTypes = {
  displayVal: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Correct type for input value
};

export default DisplayArea;
