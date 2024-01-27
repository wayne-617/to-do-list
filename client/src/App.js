// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from "react";
import TaskItem from "./TaskItem";

const API_BASE = "http://localhost:5000/api/tasks";

function App() {
 //Add useState, we ll store items in the array
 const [items, setItems] = useState([]);

 //Add useEffect, GetTodos() will run every time the component renders
 useEffect(() => {
    GetTodos();
  }, []);

// Add GetTodos() function, fetches data from our API, converts to JSON
// and then saves the data in the 'items' state
// If there's an error, it will be logged to the console
 const GetTodos = () => {
  fetch(API_BASE)
  .then(res => res.json())
  .then(data => setItems(data))
  .catch(err => console.log(err))
 }

  return (
    <div className="container">
      <div className="heading">
        <h1>TO-DO-APP</h1>
      </div>

      <div className="form">
        <input type='text'></input>
        <button>
          <span>ADD</span>
        </button>
      </div>

      <div className="todolist">  
        {items.map((item) => {
          const {_id, name} = item
          return  <TaskItem name={name} id={_id} setItems={setItems}/>   
        })} 
      </div>
    </div>
  );
}

export default App;
