import PropTypes from "prop-types";

const Calbttons = ({ onButtonClick }) => {
  const buttonNames = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    ".",
    "+",
    "-",
    "*",
    "/",
    "C",
    "=",
  ];

  return (
    <div className="buttonsContainer">
      {buttonNames.map((buttonName) => (
        <button key={buttonName} className="button" onClick={()=>onButtonClick(buttonName)}>
          {buttonName}
        </button>
      ))}
    </div>
  );
};

Calbttons.propTypes = {
  onButtonClick: PropTypes.func,
};
export default Calbttons;
