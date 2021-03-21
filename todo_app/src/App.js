import React,{useState} from "react";
import "./App.css";

function App() {
    const [todos,setTodos]=useState([]);

  return (
    <div className="App">
      <h1> Hello Nishhhh Developer!!! </h1> 
      <h2>Harshu Patil Raddi Ahe</h2>
      <input/>
      <button> Add Todo </button>
    </div>
  );
}

export default App;
