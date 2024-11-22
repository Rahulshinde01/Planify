import { useState } from "react";


const LeftCard = ({addTasks})=>{
    const [id, setId] = useState(0);

    const [title, setTitle] = useState("");

    const [description, setDescription] = useState("");

    

    const handleTask = (e) =>{
        e.preventDefault();


        const newId = id + 1;
        setId(newId);
        addTasks(newId, title, description);

        setTitle("");
        setDescription("");
    }
    return (
        <>
        <div className="flex-auto h-80 w-1/3 mx-16 my-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">

        <form onSubmit={handleTask} className="p-8">
              <label htmlFor="Title" className="mb-2 text-sm font-medium text-gray-900">Title</label>
              <input type="text" id="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="text-sm rounded-lg w-full p-2.5 focus:outline-none focus:ring-0" placeholder="What's your task?" required/>

              <label htmlFor="description" className="text-sm font-medium text-gray-900 mt-2 inline-block">Description</label>
              <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} rows="4" className="w-full text-sm p-2.5 text-gray-900 bg-gray-50 rounded-lg focus:outline-none focus:ring-0" placeholder="Describe the task"></textarea>
  
              <button type="submit" className="text-white bg-blue-500 hover:bg-blue-700 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mt-4">Add</button>
  
          </form>
  
        </div>
        </>
    )
}

export default LeftCard;