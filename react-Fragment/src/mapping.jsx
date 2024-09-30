//if we have conditon like we don't have food then we can render a msg by these three steps
import "bootstrap/dist/css/bootstrap.min.css";

function FoodList() {
  // let foodItems = [
  //   "Baryani",
  //   "Nehairi",
  //   "White karahi",
  //   "Beef pullao",
  //   "Chicken tikka",
  // ];
  let foodItems = [];

  //   if (foodItems.length === 0) {
  //     return <h4>Out of meal</h4>;
  //   }
  return (
    <>
      <center className="center">
        <h1 className="rf">Food list</h1>

        {/*{foodItems.length === 0 ? (
          <h4>❌Out of meal!</h4>
        ) : ( --ul-)}*/}

        {foodItems.length === 0 && <h4>❌Out of meal!</h4>}

        <ul className="list-group rf">
          {foodItems.map((item) => (
            <li key={item} className="list-group-item">
              {item}
            </li>
          ))}
        </ul>
      </center>
    </>
  );
}

export default FoodList;
