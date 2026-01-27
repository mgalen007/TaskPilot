import Icon from "./Icon"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { MdOutlineSpaceDashboard } from "react-icons/md"
import { LuBellRing } from "react-icons/lu"
import { IoSettingsOutline } from "react-icons/io5"
import { MdOutlineLogout } from "react-icons/md"

function Sidebar() {
    const sections = [
        { name: "Dashboard", icon: <MdOutlineSpaceDashboard /> },
        { name: "My Tasks", icon: <IoMdCheckmarkCircleOutline /> },
        { name:"Notifications", icon: <LuBellRing /> }
    ]
    return (
        <aside className="rounded-2xl w-fit mt-5 ml-3 h-[94vh] bg-white flex flex-col justify-between">
            <div>
                <div className="mx-auto w-[90%] px-4">
                    <Icon height={75} width={180}/>
                </div>
                {sections.map(section => {
                    return (
                        <div className="border-t-1 border-gray-300 h-[6.5vh] flex items-center gap-3 pl-4" key={section.name}>
                            {section.icon}
                            <h3>{section.name}</h3>
                        </div>
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
                    <h3>Log out</h3>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar