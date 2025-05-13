"use client"

import { useState } from "react"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line, } from "recharts"

// Sample data for portfolio allocation
const ALLOCATION_DATA = [
	{ name: "Equity - Large Cap", value: 35, color: "#8b5cf6" },
	{ name: "Equity - Mid Cap", value: 20, color: "#6366f1" },
	{ name: "Equity - Small Cap", value: 10, color: "#3b82f6" },
	{ name: "Debt - Government", value: 15, color: "#10b981" },
	{ name: "Debt - Corporate", value: 10, color: "#14b8a6" },
	{ name: "Gold", value: 5, color: "#f59e0b" },
	{ name: "Cash", value: 5, color: "#64748b" },
]

// Sample data for performance chart
const PERFORMANCE_DATA = [
	{ name: "Jan", value: 100 },
	{ name: "Feb", value: 105 },
	{ name: "Mar", value: 102 },
	{ name: "Apr", value: 108 },
	{ name: "May", value: 115 },
	{ name: "Jun", value: 112 },
	{ name: "Jul", value: 118 },
	{ name: "Aug", value: 125 },
	{ name: "Sep", value: 130 },
	{ name: "Oct", value: 135 },
	{ name: "Nov", value: 132 },
	{ name: "Dec", value: 140 },
]

// Sample data for risk analysis
const RISK_DATA = [
	{ name: "Volatility", value: 12 },
	{ name: "Sharpe Ratio", value: 1.8 },
	{ name: "Max Drawdown", value: 15 },
	{ name: "Beta", value: 0.85 },
	{ name: "Alpha", value: 3.2 },
]


export function PortfolioAllocationChart({ view }) {
	const [ activeIndex, setActiveIndex ] = useState(0)

	const renderAllocationChart = () => {
		return (
			<ResponsiveContainer width="100%" height="100%">
				<PieChart>
					<Pie
						data={ALLOCATION_DATA}
						cx="50%"
						cy="50%"
						labelLine={false}
						outerRadius={120}
						innerRadius={60}
						fill="#8884d8"
						dataKey="value"
						label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
						onMouseEnter={(_, index) => setActiveIndex(index)}
					>
						{ALLOCATION_DATA.map((entry, index) => (
							<Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} />
						))}
					</Pie>
					<Tooltip
						formatter={(value) => [ `${value}%`, "Allocation" ]}
						contentStyle={{
							backgroundColor: "white",
							borderRadius: "0.5rem",
							boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
							border: "none",
						}}
					/>
					<Legend layout="vertical" verticalAlign="middle" align="right" />
				</PieChart>
			</ResponsiveContainer>
		)
	}

	const renderPerformanceChart = () => {
		return (
			<ResponsiveContainer width="100%" height="100%">
				<LineChart
					data={PERFORMANCE_DATA}
					margin={{
						top: 20,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip
						formatter={(value) => [ `₹${value.toLocaleString()}`, "Portfolio Value" ]}
						contentStyle={{
							backgroundColor: "white",
							borderRadius: "0.5rem",
							boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
							border: "none",
						}}
					/>
					<Line
						type="monotone"
						dataKey="value"
						stroke="#8b5cf6"
						strokeWidth={3}
						dot={{ r: 4, fill: "#8b5cf6", strokeWidth: 0 }}
						activeDot={{ r: 6, fill: "#8b5cf6", strokeWidth: 0 }}
					/>
				</LineChart>
			</ResponsiveContainer>
		)
	}

	const renderRiskChart = () => {
		return (
			<ResponsiveContainer width="100%" height="100%">
				<BarChart
					data={RISK_DATA}
					margin={{
						top: 20,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip
						formatter={(value) => [ value, "Value" ]}
						contentStyle={{
							backgroundColor: "white",
							borderRadius: "0.5rem",
							boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
							border: "none",
						}}
					/>
					<Bar dataKey="value" fill="#8b5cf6" radius={[ 4, 4, 0, 0 ]} />
				</BarChart>
			</ResponsiveContainer>
		)
	}

	return (
		<>
			{view === "allocation" && renderAllocationChart()}
			{view === "performance" && renderPerformanceChart()}
			{view === "risk" && renderRiskChart()}
		</>
	)
}
