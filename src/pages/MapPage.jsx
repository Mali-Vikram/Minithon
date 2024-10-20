import { useState } from "react"
import Graph from "../components/Graph"
import GraphTable from "../components/GraphTable"

const MapPage = () => {
	const [eventData, setEventData] = useState({
		type: "tsunami",
		severity: [2, 3, 5, 6],
		dates: ["2024-01-01", "2024-01-02", "2024-01-03", "2024-01-04"],
	})

	const [showGraph, setShowGraph] = useState(false)

	const handleMapClick = (data) => {
		const eventData = {
			type: data.type,
			severity: data.severity,
			dates: data.dates,
		}
		setEventData(eventData)
	}

	// Toggle between showing the Graph or the Table
	const toggleView = () => {
		setShowGraph(!showGraph)
	}

	return (
		<div className="flex flex-col items-center justify-center h-screen space-y-6">
			<div className="map-container w-full h-2/3 bg-gray-300">
				<button
					onClick={() =>
						handleMapClick({
							type: "tsunami",
							severity: [2, 3, 5, 6],
							dates: ["2024-01-01", "2024-01-02", "2024-01-03", "2024-01-04"],
						})
					}
					className="mt-10 p-2 bg-blue-500 text-white rounded">
					Simulate Map Click ({eventData.type})
				</button>
			</div>

			<div className="flex space-x-4 mt-6">
				<button
					onClick={toggleView}
					className={`p-2 rounded-md ${
						showGraph ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
					}`}>
					View {showGraph ? "Table" : "Graph"}
				</button>
			</div>

			{/* Conditionally render the graph or the table based on user preference */}
			{showGraph ? (
				<Graph eventData={eventData} />
			) : (
				<GraphTable eventData={eventData} />
			)}
		</div>
	)
}

export default MapPage
