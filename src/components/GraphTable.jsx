import React from "react"
import "../styles/GraphTable.css"
const GraphTable = ({ eventData }) => {
	return (
		<div className=" mt-3 neumorphic-table-container w-4/5 m-auto bg-slate-50 rounded-lg p-6 shadow-neumorphic">
			<h2 className="text-xl font-semibold mb-4 text-center">Event Data</h2>
			<table className="table-auto w-full text-left">
				<thead>
					<tr className="bg-gray-200">
						<th className="py-2 px-4">Date</th>
						<th className="py-2 px-4">Severity</th>
					</tr>
				</thead>
				<tbody>
					{eventData.dates.map((date, index) => (
						<tr key={index} className="border-b border-gray-300">
							<td className="py-2 px-4">{date}</td>
							<td className="py-2 px-4">{eventData.severity[index]}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default GraphTable
