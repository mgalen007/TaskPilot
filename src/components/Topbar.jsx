import { CiMail, CiUser } from "react-icons/ci"
import { FiUser } from "react-icons/fi" 

function Topbar() {
    return (
        <div className="bg-white rounded-2xl h-[10vh] mt-5 flex justify-between w-[100%] mr-4 items-center pl-4 pr-6">
            <form className="md:w-[250px] lg:w-[500px]">
                <input type="text" placeholder="Search" className="w-[100%] bg-[#f7f5f4] px-5 py-2 rounded-xl focus:outline-none"></input>
            </form>
            <div className="flex items-center gap-6">
                <button className="border-1 py-1 px-4 bg-[#fae150] rounded-3xl cursor-pointer">+ New task</button>
                <CiMail className="text-3xl" title="Messages" />
                <FiUser className="text-2xl" title="Profile" />
            </div>
        </div>
    )
}

export default Topbar