import PropTypes from "prop-types";
import { useState } from "react";
import { MdAddTask } from "react-icons/md";


function AddTodo({ onNewitem }) {

  const [todoName, setodoName] = useState("")
  const [todoDate, setodoDate] = useState("")

  const handleNameChange = (event) => {
    setodoName(event.target.value);

  };
  const handleDateChange = (event) => {
    setodoDate(event.target.value)

  };

  const handleAddButtonClicked = () => {
    onNewitem(todoName, todoDate);
    setodoDate("");
    setodoName("");
  };
  
  return (
    <center className="container">
      <div className="row kg-row hf">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" value={todoName} onChange={handleNameChange} />
        </div>
        <div className="col-4">
          <input type="date" value={todoDate} onChange={handleDateChange} />
        </div>
        <div className="col-2 ">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            <MdAddTask />
          </button>
        </div>
      </div>
    </center>
  );
}

AddTodo.propTypes = {
  onNewitem: PropTypes.func,
};

export default AddTodo;
