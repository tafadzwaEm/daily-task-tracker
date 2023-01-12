import Task from "./Task"

const Tasks = ({tasks, deleteTask, editTask, togglePriority}) => {
  return (
    <div>
      <p className="text-muted">Double click task to change it's priority</p>
        {   
           tasks.length > 0 ? 
           tasks.map((task) => {
               return <Task key={task.id} task={task} deleteTask={deleteTask} editTask={editTask} togglePriority={togglePriority}/>
               
            }): <p className="text-primary font-weight-bold"> No tasks to display... </p>
        }
    </div>
  )
}

export default Tasks