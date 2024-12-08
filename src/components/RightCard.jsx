import Lists from "./Lists";

const RightCard = ({tasks, onDelete}) => {  

  return (
    <>
      <div className="flex-auto w-full justify-center md:w-2/3 md:mx-16 md:my-8 block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-lg pb-4">
        <div className="flex pl-10 pt-4 mr-4">
          <div className="flex-auto w-1/3 sm:ml-6">Title</div>

          <div className="flex-auto w-1/3 sm:ml-12">Description</div>
          

          <div className="flex-auto w-1/3 sm:ml-36">
            <div className="relative left-6 md:left-8">Delete</div>
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
