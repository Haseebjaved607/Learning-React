import "./Hbutton.css"

function Hbutton() {
  return (
    <div id="HButton">
      <h1>This is the buton</h1>
      <button>HiiT like</button>
    </div>
  );
}

function Car() {
  return <h2>I am a Car!</h2>;
}

function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car />
    </>
  );
}

function DynamicFunction(){
  let fullName = "Haseeb"
  return <h1>this is example of dynamic function by :{fullName}</h1>
}

export {Hbutton,Garage, DynamicFunction};
