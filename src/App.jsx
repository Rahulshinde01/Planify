import { useState } from "react"
import LeftCard from "./components/LeftCard"
import NavBar from "./components/NavaBar"
import RightCard from "./components/RightCard"


function App() {
  const [tasks, setTasks] = useState([]);

  const deleteTask = (index)=> {
    setTasks(tasks.filter((i)=> i.id != index))
  }


  const addTasks = (id, title, description)=>{
    const newTodosArray = [...tasks, {id , title, description}];
    setTasks(newTodosArray)
  }

  return (
    <>
    
 
    <NavBar></NavBar>


    <div className="sm:flex">
      <LeftCard addTasks={addTasks}></LeftCard>
      <RightCard tasks = {tasks} onDelete = {deleteTask}></RightCard>

    </div >
   
    </>
  )
}

export default App
