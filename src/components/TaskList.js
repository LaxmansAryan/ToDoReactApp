import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, completeTask, deleteTask }) => {
    return (
        <div className="task-list">
            {tasks.map((task, index) => (
                <Task
                key = {index}
                index= {index}
                task= {task}
                completeTask= {completeTask}
                deleteTask= {deleteTask}
                />
            ))}
        </div>
    );
};

export default TaskList;