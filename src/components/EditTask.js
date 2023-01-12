import { useState } from "react"

import {db} from '../firebase-config'
import {doc,updateDoc} from 'firebase/firestore'

const EditTask = ({editTask, taskId}) => {
    const [editTaskName, setEditTaskName] = useState('')

    // Edit Task
    const editTasks = async (taskId) => {
    const task = doc(db, "tasks", taskId)
    const newTaskName = {name: editTaskName}
    console.log(newTaskName)
    await updateDoc(task, newTaskName)
  }
    const onTaskSubmit = async(e) => {
      e.preventDefault()
  
      if(!editTaskName){
        alert('Task name should not be empty!')
        return
      }
      await editTasks(taskId)
      editTask()
      setEditTaskName('')
  }
      
   
  return (
    <form className="m-4">
    <div className="form-group d-flex">
        <div className="row">
        <div className="col col-md-8 ">
            <input type='text' value={editTaskName} className="mt-2 form-control" style={{width: '100%',}} placeholder="Task Name" onChange={(e)=>setEditTaskName(e.target.value)}/>
            </div>

        <div className="col col-md-4">
            <button onClick={onTaskSubmit} className="btn"> Save </button>
        </div>
        </div>
    </div>
</form>
  )
}

export default EditTask
