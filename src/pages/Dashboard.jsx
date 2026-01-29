import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import TaskList from '../components/TaskList'
import Comments from '../components/Comments'

function Dashboard() {
    const tasks = [
        { name: "Finish monthly reporting", dueDate: "Today" },
        { name: "Contract signing", dueDate: "Today" },
        { name: "Market overview", dueDate: "Tomorrow" },
        { name: "Project research", dueDate: "Tomorrow" },
        { name: "Prepare invoices", dueDate: "This week" }
    ]

    const comments = [
        { title: "Market research", details: "Find my keynote attached to the folder in the lower cupboard." },
        { title: "Market research", details: "I've added the data. Let's check it out together some time later today." },
        { title: "To-do", details: "I'll debug the InterviewIQ codebase later." }
    ]

    return (
        <>
            <div className="flex gap-4">
                <Sidebar currentPage="Dashboard" />
                <Topbar />
            </div>
            <div className="w-[82.5%] h-[81.5vh] absolute top-[15vh] right-5 flex gap-5">
                <div className="w-[33%]">
                    <TaskList tasks={tasks}/>
                </div>
                <div className="w-[20%] bg-white h-[54.5%] py-4 rounded-2xl relative">
                    <Comments userComments={comments} />
                    <p className="font-bold absolute bottom-6 left-6"><span className="text-2xl">+</span> &nbsp;Add</p>
                </div>
            </div>
        </>
    )
}

export default Dashboard