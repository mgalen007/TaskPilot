import { useState } from "react" 

function TaskList({ tasks }) {
    const handleTaskCheck = () => null
    return (
        <div className="bg-white rounded-2xl">
            <div className="py-4 px-6 border-b-1 border-gray-300">
                <h2 className="text-lg font-bold">My tasks ({tasks.length})</h2>
            </div>
            {tasks.map(task => {
                return <Task task={task} key={task.name} />
            })}
        </div>
    )
}

function Task({ task }) {
    const [done, setDone] = useState(false)
    const handleCheckClick = () => setDone(!done)
    return (
        <div className="p-4 pr-5 border-t-1 border-gray-300 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <input 
                    type="checkbox" 
                    onClick={handleCheckClick} 
                    className="w-5 h-5 appearance-none border-1 border-gray-500 rounded-[50%] checked:bg-[#fae150] checked:border-black"
                ></input>
                <p className={ done ? "translate-y-[-1px] line-through text-gray-500" :  "translate-y-[-1px]"}>{task.name}</p>
            </div>
            <div>
                <p>{task.dueDate}</p>
            </div>
        </div>
    )
}

export default TaskList