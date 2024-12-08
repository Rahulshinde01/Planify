import { MdDelete } from "react-icons/md";
import { useState } from "react"

const Lists = ({id, title, description, fun}) => {
const [done, setDone] = useState("Mark as Done")


 const deleteTask = ()=>{
  fun(id);
 }

  return (
    <>
      <div className="flex justify-center h-14 w-full">
        <div className="flex w-5/6 py-2 border-2 rounded-md">
          <div className="flex-auto w-1/3 pl-2 pt-1">{title}</div>

          <div className="flex-auto w-1/3 pl-2 pt-1">{description}</div>

          <div className="flex-auto w-1/3">

          <div>
          <button type="button" className="text-gray-900 hover:text-white border border-gray-700 hover:bg-gray-700 focus:ring-2 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-2 py-1 text-center mt-1 w-24" onClick= {()=>{setDone("Completed")}}>{done}</button>

          </div>
            <div className="relative pt-1 left-32 md:left-36 bottom-6">
              <MdDelete className="cursor-pointer" onClick={deleteTask}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lists;
