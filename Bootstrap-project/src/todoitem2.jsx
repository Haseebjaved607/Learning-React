function TodoItem2() {
  const itemName = "go to college";
  const itemDate = "24/23/24";

  return (
    <div className="container">
      <div className="row r-row">
        <div className="col-6"> {itemName} </div>
        <div className="col-4">{itemDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger h-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem2;
