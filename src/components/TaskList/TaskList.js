import React from 'react'
import TaskItem from '../TaskItem/TaskItem'

const TaskList = ({tasks,handleDelete,handleComplete}) => {
    return (
        <div>
            {tasks.map(task => <TaskItem task={task} key={task.id} handleDelete={handleDelete} handleComplete={handleComplete}/>)}
        </div>
    )
}

export default TaskList
