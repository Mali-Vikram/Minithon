import { Line } from "react-chartjs-2"
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js"
import "../styles/Graph.css"

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
)

const Graph = ({ eventData }) => {
	if (!eventData) return null

	const data = {
		labels: eventData.dates,
		datasets: [
			{
				label: `Severity of ${eventData.type}`,
				data: eventData.severity,
				fill: false,
				borderColor: "red",
				backgroundColor: "red",
			},
		],
	}

	const options = {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	}

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 w-full">
			<div className="neu-container w-full md:w-3/4 lg:w-2/3 xl:w-1/2 p-8 rounded-lg shadow-lg">
				<div className="mb-4">
					<h2 className="text-lg font-bold text-gray-700">Disater Details</h2>
					<p className="text-sm text-gray-500">October 2023</p>
				</div>
				<div className="text-3xl font-bold text-gray-800">
					100 {eventData.type}
					<span className="text-green-500 text-xl">+3.10 (1.39%)</span>
				</div>
				<div className="h-80 cursor-pointer">
					<Line data={data} options={options} />
				</div>
			</div>
		</div>
	)
}

export default Graph
