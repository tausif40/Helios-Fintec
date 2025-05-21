"use client"

import { useRef } from "react"
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
	{
		month: "Jan",
		"HDFC Mid-Cap": 10000,
		"Axis Bluechip": 10000,
		"SBI Small Cap": 10000,
		"Nifty 50": 10000,
	},
	{
		month: "Feb",
		"HDFC Mid-Cap": 10200,
		"Axis Bluechip": 10150,
		"SBI Small Cap": 10300,
		"Nifty 50": 10100,
	},
	{
		month: "Mar",
		"HDFC Mid-Cap": 10350,
		"Axis Bluechip": 10250,
		"SBI Small Cap": 10500,
		"Nifty 50": 10200,
	},
	{
		month: "Apr",
		"HDFC Mid-Cap": 10500,
		"Axis Bluechip": 10400,
		"SBI Small Cap": 10800,
		"Nifty 50": 10350,
	},
	{
		month: "May",
		"HDFC Mid-Cap": 10700,
		"Axis Bluechip": 10500,
		"SBI Small Cap": 11000,
		"Nifty 50": 10450,
	},
	{
		month: "Jun",
		"HDFC Mid-Cap": 10900,
		"Axis Bluechip": 10600,
		"SBI Small Cap": 11300,
		"Nifty 50": 10550,
	},
	{
		month: "Jul",
		"HDFC Mid-Cap": 11200,
		"Axis Bluechip": 10750,
		"SBI Small Cap": 11700,
		"Nifty 50": 10700,
	},
	{
		month: "Aug",
		"HDFC Mid-Cap": 11500,
		"Axis Bluechip": 10900,
		"SBI Small Cap": 12000,
		"Nifty 50": 10850,
	},
	{
		month: "Sep",
		"HDFC Mid-Cap": 11800,
		"Axis Bluechip": 11050,
		"SBI Small Cap": 12400,
		"Nifty 50": 11000,
	},
	{
		month: "Oct",
		"HDFC Mid-Cap": 12100,
		"Axis Bluechip": 11200,
		"SBI Small Cap": 12800,
		"Nifty 50": 11150,
	},
	{
		month: "Nov",
		"HDFC Mid-Cap": 12400,
		"Axis Bluechip": 11350,
		"SBI Small Cap": 13200,
		"Nifty 50": 11300,
	},
	{
		month: "Dec",
		"HDFC Mid-Cap": 12700,
		"Axis Bluechip": 11500,
		"SBI Small Cap": 13600,
		"Nifty 50": 11450,
	},
]

export function MutualFundPerformanceChart() {
	const containerRef = useRef(null)

	return (
		<div ref={containerRef} className="h-full w-full">
			<ResponsiveContainer width="100%" height="100%">
				<LineChart
					data={data}
					margin={{
						top: 20,
						right: 30,
						left: 20,
						bottom: 10,
					}}
				>
					<XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
					<YAxis
						stroke="#888888"
						fontSize={12}
						tickLine={false}
						axisLine={false}
						tickFormatter={(value) => `₹${value.toLocaleString()}`}
					/>
					<Tooltip
						formatter={(value) => [ `₹${value.toLocaleString()}`, "" ]}
						labelFormatter={(label) => `Month: ${label}`}
						contentStyle={{
							backgroundColor: "white",
							borderRadius: "8px",
							boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
							border: "none",
						}}
					/>
					<Line
						type="monotone"
						dataKey="HDFC Mid-Cap"
						stroke="#8884d8"
						strokeWidth={2}
						dot={false}
						activeDot={{ r: 6 }}
					/>
					<Line
						type="monotone"
						dataKey="Axis Bluechip"
						stroke="#4f46e5"
						strokeWidth={2}
						dot={false}
						activeDot={{ r: 6 }}
					/>
					<Line
						type="monotone"
						dataKey="SBI Small Cap"
						stroke="#10b981"
						strokeWidth={2}
						dot={false}
						activeDot={{ r: 6 }}
					/>
					<Line type="monotone" dataKey="Nifty 50" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" dot={false} />
				</LineChart>
			</ResponsiveContainer>
		</div>
	)
}
