import React, { useState } from "react";
import TaskList from "./components/TaskList";
import './index.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  
  const addTask = () => {
    if (input != "") {
      const newTask = {
        title: input,
        completed: false
      };
      setTasks([...tasks, newTask]);
      setInput("");
    }
  };

  const completeTask = index => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  }

  const deleteTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <div className="task-input">
        <input
        type="text"
        value={input}
        onChange={event => setInput(event.target.value)}
        />
        <button onClick={addTask}>Add task</button>        
      </div>
      <TaskList 
        tasks= {tasks}
        completeTask={completeTask}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default App;