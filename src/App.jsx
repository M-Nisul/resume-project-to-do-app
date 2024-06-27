import { useState } from "react";
import { TaskList } from "./components/TaskList";
import { v4 as uuid } from "uuid";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
      const newObject = {
        id: uuid(),
        name: taskName,
        completed: false
      }

      setTasks([...tasks, newObject]);
  }

  const deleteTask = (taskId) => {
    const newArr = tasks.filter(item => item.id !== taskId);
    setTasks(newArr);
  }

  const completeTask = (task, isCompleted) => {
    const updatedItems = tasks.map(item => {
        if(item.id == task.id){
          return {...item, completed: isCompleted == true ? true : false}
        }
        return item
      })

    setTasks(updatedItems);
  }

  return(
    <TaskList tasks={tasks} addTask={addTask} deleteTask={deleteTask} completeTask={completeTask}/>
  )
}

export default App;
