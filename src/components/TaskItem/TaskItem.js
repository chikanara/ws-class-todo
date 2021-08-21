import React from 'react'
import "./TaskItem.css"

const TaskItem = ({task,handleDelete,handleComplete}) => {
    return (
        <div className="task">
            <p className={task.isDone ? "done" : null}>{task.task}</p>
           <div>
           <button onClick={() => handleDelete(task.id)}>Delete</button>
           </div>
            <button onClick={() => handleComplete(task.id)}>{task.isDone ? "Undo" : "Complete"}</button>
        </div>
    )
}

export default TaskItem
