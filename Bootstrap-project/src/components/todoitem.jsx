import PropTypes from "prop-types";
import { MdDeleteForever } from "react-icons/md";
function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <center className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button"
            onClick={() => onDeleteClick(todoName)}>

            <MdDeleteForever />
          </button>
        </div>
      </div>
    </center>
  );
}

TodoItem.propTypes = {
  todoName: PropTypes.string.isRequired,
  todoDate: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func,
};

export default TodoItem;
