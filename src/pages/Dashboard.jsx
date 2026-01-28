import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import TaskList from '../components/TaskList'

function Dashboard() {
    const tasks = [
        { name: "Finish monthly reporting", dueDate: "Today" },
        { name: "Contract signing", dueDate: "Today" },
        { name: "Market overview", dueDate: "Tomorrow" },
        { name: "Project research", dueDate: "Tomorrow" },
        { name: "Prepare invoices", dueDate: "This week" }
    ]

    return (
        <>
            <div className="flex gap-4">
                <Sidebar currentPage="Dashboard" />
                <Topbar />
            </div>
            <div className="w-[82.5%] h-[81.5vh] absolute top-[15vh] right-5">
                <div className="w-[33%]">
                    <TaskList tasks={tasks}/>
                </div>
            </div>
        </>
    )
}

export default Dashboard