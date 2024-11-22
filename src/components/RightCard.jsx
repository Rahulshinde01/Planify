import Lists from "./Lists";

const RightCard = ({tasks, onDelete}) => {  

  return (
    <>
      <div className="flex-auto w-2/3 mx-8 sm:mx-16 my-8 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-lg pb-4">
        <div className="flex pl-10 pt-4">
          <div className="flex-auto w-1/3 sm:ml-8">Title</div>

          <div className="flex-auto w-1/3 sm:ml-8">Description</div>
          

          <div className="flex-auto w-1/3 sm:ml-36">
            <div className="relative left-6">Delete</div>
          </div>
        </div>

        <div className="flex justify-center">
          <hr className="h-px w-5/6 my-4 bg-gray-700 border-0"></hr>
        </div>

        <div className="grid grid-cols-1 gap-6 content-between">
        {tasks.map((eachTask) => (<Lists key={eachTask.id} id={eachTask.id} title={eachTask.title} description={eachTask.description} fun={onDelete} />
        ))}
        
        </div>
      </div>
    </>
  );
};

export default RightCard;
