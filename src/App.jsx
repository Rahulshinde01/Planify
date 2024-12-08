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


    <div className="w-11/12 mx-auto my-8 flex flex-col gap-8 md:flex-row md:gap-4 md:justify-between lg:w-4/5">
      <LeftCard addTasks={addTasks}></LeftCard>
      <RightCard tasks = {tasks} onDelete = {deleteTask}></RightCard>

    </div >
   
    </>
  )
}

export default App
