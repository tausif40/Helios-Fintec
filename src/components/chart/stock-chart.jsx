"use client"

import { useEffect, useState } from "react"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

// Generate random stock data based on trend
const generateStockData = (days, trend) => {
	const data = []
	let value = 100000
	const isPositive = trend > 0
	const volatility = Math.abs(trend) / 2

	for (let i = 0; i < days; i++) {
		// Random daily change with bias based on trend
		const change = (Math.random() - (isPositive ? 0.4 : 0.6)) * volatility
		value = value * (1 + change / 100)

		const date = new Date()
		date.setDate(date.getDate() - (days - i))

		data.push({
			date: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
			value: Math.round(value),
		})
	}

	return data
}

export function StockChart({ timeRange, trend }) {
	const [ data, setData ] = useState([])

	useEffect(() => {
		// Set days based on time range
		const days = timeRange === "1D" ? 1 : timeRange === "1W" ? 7 : timeRange === "1M" ? 30 : timeRange === "3M" ? 90 : timeRange === "1Y" ? 365 : 180

		setData(generateStockData(days, trend))
	}, [ timeRange, trend ])

	const formatCurrency = (value) => {
		return new Intl.NumberFormat("en-IN", {
			style: "currency",
			currency: "INR",
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		}).format(value)
	}

	return (
		<ResponsiveContainer width="100%" height="100%">
			<AreaChart data={data} margin={{ top: 20, right: 30, left: 30, bottom: 0 }}>
				<defs>
					<linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor={trend > 0 ? "#8b5cf6" : "#ef4444"} stopOpacity={0.8} />
						<stop offset="95%" stopColor={trend > 0 ? "#8b5cf6" : "#ef4444"} stopOpacity={0} />
					</linearGradient>
				</defs>
				<XAxis
					dataKey="date"
					axisLine={false}
					tickLine={false}
					tick={{ fontSize: 12, fill: "#6b7280" }}
					tickMargin={10}
				/>
				<YAxis
					tickFormatter={formatCurrency}
					axisLine={false}
					tickLine={false}
					tick={{ fontSize: 12, fill: "#6b7280" }}
					tickMargin={10}
					domain={[ "dataMin - 10000", "dataMax + 10000" ]}
				/>
				<CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
				<Tooltip
					formatter={(value) => [ formatCurrency(value), "Portfolio Value" ]}
					labelFormatter={(label) => `Date: ${label}`}
					contentStyle={{
						backgroundColor: "white",
						borderRadius: "0.5rem",
						boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
						border: "none",
					}}
				/>
				<Area
					type="monotone"
					dataKey="value"
					stroke={trend > 0 ? "#8b5cf6" : "#ef4444"}
					fillOpacity={1}
					fill="url(#colorValue)"
					strokeWidth={2}
				/>
			</AreaChart>
		</ResponsiveContainer>
	)
}
