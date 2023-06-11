import React from "react";

const Task = ({ task, index, completeTask, deleteTask}) => {
    return (
        <div
            className ="task"
            style={{ textDecoration: task.completed ? "line-through" : "" }}
        >
            {task.title}

            <button onClick={() => completeTask(index)}>Complete</button>
            <button onClick={() => deleteTask(index)}>Delete</button>
        </div>    
    )
}

export default Task;