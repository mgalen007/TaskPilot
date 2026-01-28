import { useState } from "react"
import Icon from "./Icon"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { MdOutlineSpaceDashboard } from "react-icons/md"
import { LuBellRing } from "react-icons/lu"
import { IoSettingsOutline } from "react-icons/io5"
import { MdOutlineLogout } from "react-icons/md"
import { Link } from "react-router-dom"

function Sidebar({ currentPage }) {
    const [active, setActive] = useState(currentPage)

    const sections = [
        { name: "Dashboard", icon: <MdOutlineSpaceDashboard />, path: "/dashboard" },
        { name: "My Tasks", icon: <IoMdCheckmarkCircleOutline />, path: "/tasks" },
        { name:"Notifications", icon: <LuBellRing />, path: "/notifications" }
    ]
    return (
        <aside className="rounded-2xl w-fit mt-5 ml-3 h-[100vh] bg-white flex flex-col justify-between">
            <div>
                <div className="mx-auto w-[90%] px-5">
                    <Icon height={75} width={180}/>
                </div>
                {sections.map(section => {
                    return (
                        <Link to={section.path}>
                            <div 
                                onClick={() => setActive(section.name)}
                                className={ active === section.name ? (
                                    "border-t-1 border-gray-300 h-[6.5vh] flex items-center gap-3 pl-4 cursor-pointer bg-[#fcf8eb] border-l-5 border-l-[#fae150] font-bold"
                                    ) : (
                                    "border-t-1 border-gray-300 h-[6.5vh] flex items-center gap-3 pl-4 cursor-pointer"
                                )
                                } 
                                key={section.name}>
                                {section.icon}
                                <h3>{section.name}</h3>
                            </div>
                        </Link>
                    )
                })}
            </div>
            <div>
                <div className="flex items-center gap-4 pl-4 h-[6.5vh] border-b-1 border-gray-300">
                    <IoSettingsOutline />
                    <h3>Settings</h3>
                </div>
                <div className="flex items-center gap-4 pl-4 h-[6.5vh]">
                    <MdOutlineLogout />
                    <h3 className="text-red-500">Log out</h3>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar