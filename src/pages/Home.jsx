import React from "react"
import Sidebar from "../components/Sidebar"
import MapComponent from "../components/Map"

const Home = () => {
    return (
        <div className="flex gap-2 p-1">
            <Sidebar />
            <div className="shadow-xl w-full p-2 rounded-md">
                <MapComponent />
            </div>
        </div>
    )
}

export default Home
