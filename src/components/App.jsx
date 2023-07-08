import React,{useState} from "react";

function App() {

  let [IsMouseOver,setMouseOver] = useState(false);

  function changeMouseOver(){
    setMouseOver(true);
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={ {backgroundColor:IsMouseOver?"black":"white"}} onMouseOver={changeMouseOver}>Submit</button>
    </div>
  );
}

export default App;
