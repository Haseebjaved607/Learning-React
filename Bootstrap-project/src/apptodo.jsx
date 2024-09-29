function Apptodo() {
  return (
    <div className="container ">
      <div className="row r-row">
        <div className="col-6">
          <input type="text" placeholder="enter todo name" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success h-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Apptodo;
