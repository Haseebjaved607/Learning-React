import PropTypes from "prop-types";
import { useRef } from "react";
// import { useState, } from "react";
import { MdAddTask } from "react-icons/md";



function AddTodo({ onNewitem }) {

  // const [todoName, setodoName] = useState("")
  // const [todoDate, setodoDate] = useState("")
  const todoNameElement = useRef();
  const todoDateElement = useRef()



  // const handleNameChange = (event) => {
  //   setodoName(event.target.value);

  // };
  // const handleDateChange = (event) => {
  //   setodoDate(event.target.value)

  // };

  const handleAddButtonClicked = (event) => {
    event.preventDefault()
    const todoName = todoNameElement.current.value = ""
    const todoDate = todoDateElement.current.value = ""
console.log(`${todoName} due on ; ${todoDate}`);

    onNewitem(todoName, todoDate);
    // setodoDate("");
    // setodoName("");
  };

  return (
    <center className="container">
      <form className="row kg-row hf" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here"
            ref={todoNameElement}
          // value={todoName}
          //  onChange={handleNameChange} 
          />
        </div>
        <div className="col-4">
          <input type="date"
            ref={todoDateElement}
          // value={todoDate} 
          // onChange={handleDateChange} 
          />
        </div>
        <div className="col-2 ">
          <button
            type="submit"
            className="btn btn-success kg-button"
          // onClick={handleAddButtonClicked}
          >
            <MdAddTask />
          </button>
        </div>
      </form>
    </center>
  );
}

AddTodo.propTypes = {
  onNewitem: PropTypes.func,
};

export default AddTodo;



const handleNameChange = (event) => {
    setodoName(event.target.value);

  };
  const handleDateChange = (event) => {
    setodoDate(event.target.value)

  };