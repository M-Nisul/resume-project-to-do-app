import { useState } from "react"
import '../styles/TaskItem.css'

export const TaskItem = ({task, deleteTask, completeTask}) => {
    const [isCompleted, setCompleted] = useState(false);

    const handleClick = () => {
        setCompleted(!isCompleted);
        completeTask(task, !isCompleted);
    }

    return (
        <div className="task">
            <button type="button" className="delete" onClick={() => deleteTask(task.id)}>Delete</button>
            <h4 className={isCompleted ? 'completed' : 'incompleted'}>{task.name}</h4>
            <button type="button" onClick={handleClick} className={isCompleted ? 'true' : 'false'}></button>
        </div>
    )
}