import {useState} from 'react'


const AddTaskForm = ({addTask}) => {

  const [addTaskName, setAddTaskName] = useState('')
  const [addTaskPriority, setAddTaskPriority] = useState(false)

  const onTaskSubmission = (e) => {
    e.preventDefault()

    if(!addTaskName){
      alert('Task name should not be empty!')
      return
    }

    addTask(addTaskName, addTaskPriority)

    setAddTaskName('')
    setAddTaskPriority(false)
  }


  return (
    <form className="m-4" onSubmit={onTaskSubmission}>
        <div className="form-group d-flex">
            <div className="row">
            <div className="col col-md-8 ">
                <input type='text' className="mt-2 form-control" value={addTaskName} style={{width: '100%',}} placeholder="Task Name" onChange={(e)=>setAddTaskName(e.target.value)}/>
                <div className='form-control-check'>
                  <label className='form-check-label mt-2'>High Priority</label>
                  <small className="text-muted m-2 mt-2">(Optional)</small>
                  <input type='checkbox' checked={addTaskPriority} value={addTaskPriority} onChange={(e)=>setAddTaskPriority(e.currentTarget.checked)}/>
              
                </div>
                </div>

            <div className="col col-md-2">
                <input className="btn btn-success" type='submit' value='Add Task' />
            </div>
            </div>
        </div>
    </form>
  )
}

export default AddTaskForm