import { useState } from "react";
import { TaskItem } from "./TaskItem";
import '../styles/TaskList.css'

export const TaskList = ({tasks, addTask, deleteTask, completeTask}) => {
    const [taskName, setTaskName] = useState('');

    const handleInput = (e) => {
        setTaskName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(taskName.trim()) addTask(taskName);
        setTaskName('');
        console.log(tasks);
    }

    return (
        <div className="container">
            <div className="display">
                {tasks.map(task => {
                    return <TaskItem task={task} deleteTask={deleteTask} key={task.id} completeTask={completeTask}/>
                })}
            </div>
            <div className="add">    
                <form action="" onSubmit={handleSubmit}>
                    <div className="input"><input type="text" id="name" value={taskName} onChange={handleInput} placeholder="New Task..."/><label htmlFor="name" hidden>Add Your Task</label></div>
                    <button type="submit" disabled={taskName == '' ? true : false}>Add</button>
                </form>
            </div>
        </div>
    )
}