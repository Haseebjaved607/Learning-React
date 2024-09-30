// components/Errormessage.jsx
import PropTypes from 'prop-types';

const Errormessage = ({ items }) => {
  return <>{items.length === 0 ? <h3>Out of meal</h3> : null}</>;
};

Errormessage.propTypes = {
  items: PropTypes.array.isRequired, // Validate that items is an array and is required
};

export default Errormessage;
