import React from "react"

import Avatar from "../assets/images/avatar.svg"
import { BiHome } from "react-icons/bi"
import { IoMdNotificationsOutline } from "react-icons/io"
import { RiSettingsLine } from "react-icons/ri"
import { GiHamburgerMenu } from "react-icons/gi"

const Sidebar = () => {
    return (
        <aside className="flex flex-col gap-2 w-52 p-3 shadow-xl h-screen">
            <div className="p-2 w-full rounded-md cursor-pointer bg-gray-200 hover:bg-gray-300 font-semibold transition-all">
                Home
            </div>
            <div className="p-2 rounded-md cursor-pointer hover:bg-gray-300 transition-all">
                Alert
            </div>
            <div className="p-2 rounded-md cursor-pointer hover:bg-gray-300 transition-all">
                Monitor
            </div>
        </aside>
    )
}

export default Sidebar
