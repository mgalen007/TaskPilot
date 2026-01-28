import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'

function Tasks() {
    return (
        <div className="flex gap-4">
            <Sidebar currentPage="My Tasks" />
            <Topbar />
        </div>
    )
}

export default Tasks