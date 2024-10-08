
import AppName from "./components/appName";
import AddTodo from "./components/Addtodo";
import TodoItems from "./components/todoitems";
import "./App.css";
import { useState } from "react";
import WellComeMsg from "./components/wellcomemsg";

function App() {
  const [todoItem, setTodoItem] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`new item added :${itemName}  ${itemDueDate}`)
    const newToDoItems = [...todoItem, { name: itemName, dueDate: itemDueDate },]
    setTodoItem(newToDoItems)

  }
const handleOnDelete = (todoitemName)=>{
const newToDoItem = todoItem.filter((item) => item.name !==todoitemName );
setTodoItem(newToDoItem)

}

  return (
    <center className="todo-container">
      <div className="totoblock">
        <AppName />
        <hr id="hr" />
        <hr id="hr2" />
        <AddTodo onNewitem={handleNewItem} />
        {todoItem.length === 0 && < WellComeMsg />}
        <TodoItems todoItems={todoItem} onDeleteClick = {handleOnDelete}></TodoItems>
      </div>
    </center>
  );
}

export default App;
