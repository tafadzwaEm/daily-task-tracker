import {db} from './firebase-config'
import {collection, getDocs, deleteDoc, doc, addDoc, updateDoc} from 'firebase/firestore'
// Components
import AddTaskForm from './components/AddTaskForm';
import Button from './components/Button';
import Header from './components/Header';
import Tasks from './components/Tasks';
// React Hooks
import { useState, useEffect } from 'react';

function App() {

  const [tasks, setTasks] = useState([])

  // Get tasks collection (Table) from firestore database
  const tasksCollection = collection(db, "tasks")

  // Add task to list
  const addTask = async (taskName, taskPriority) => {
    await addDoc(tasksCollection,{name: taskName, priority: taskPriority})

    renderTasks()
  }

  // Delete task from list
  const deleteTask = async (id) => {
    const task = doc(db, "tasks", id)
    await deleteDoc(task)

    renderTasks()
  }

  const editTask = () => {
    renderTasks()
  }

  // get tasks from db
  const renderTasks = async () => {
    const data = await getDocs(tasksCollection)
    setTasks(data.docs.map((doc) => ({
      ...doc.data(), id: doc.id
    })))
  }

  // Change Task Priority
  const changePriority = async (id,tPriority) => {
    const task = doc(db, "tasks", id)
    const updatedPriority = {priority: !tPriority}
    await updateDoc(task, updatedPriority)

    renderTasks()
  }
  // On page Load
  useEffect(()=>{
    renderTasks()
  }, [])

  return (
    <div className="container">
      <Header />
      <AddTaskForm addTask={addTask} />
      <Tasks tasks={tasks} deleteTask={deleteTask} editTask={editTask} togglePriority={changePriority}/>
    </div>
  );
}

export default App;
