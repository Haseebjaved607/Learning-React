import TodoItem from "./todoitem1";
import Apptodo from "./apptodo";
import AppName from "./appName"
import TodoItem2 from "./todoitem2";
import "./app.css"

function App() {
  return (
    <center className="todo-container">
      <AppName/>
      <Apptodo />
      <TodoItem />
      <TodoItem2 />
    </center>
  );
}

export default App;
