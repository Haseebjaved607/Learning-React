import PropTypes from "prop-types";
import TodoItem from "./todoitem";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div >
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};

TodoItems.propTypes = {
  todoItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      dueDate: PropTypes.string.isRequired,
      
    })
  ).isRequired,
  onDeleteClick:PropTypes.func,
};

export default TodoItems;
