import {MdDeleteForever, MdEdit, MdClear} from 'react-icons/md'
import EditTask from './EditTask'
import {useState} from 'react'

const Task = ({task, deleteTask, editTask, togglePriority}) => {

  const [showForm, setShowForm] = useState(false)

  const toggleForm = () => {
    setShowForm(!showForm)
  }

  return (
    <div className={`task ${task.priority ? 'reminder':'task'}`} onDoubleClick={() => togglePriority(task.id,task.priority)}>
        <h3>
            {task.name}  {showForm ? <MdClear onClick={() => toggleForm()} style={{cursor:'pointer'}}/> :<MdEdit onClick={() => toggleForm()} style={{cursor:'pointer'}}/>}
            <MdDeleteForever onClick={()=>deleteTask(task.id)} style={{color:'red', cursor:'pointer'}}/>
        </h3>

        { showForm && <EditTask taskId={task.id} editTask={editTask}/> }
    </div>
  )
}

export default Task