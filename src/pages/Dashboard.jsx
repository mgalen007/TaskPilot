import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'

function Dashboard() {
    return (
        <div className="flex gap-4">
            <Sidebar />
            <Topbar />
        </div>
    )
}

export default Dashboard