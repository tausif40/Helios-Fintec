"use client"

import { useState, useEffect } from "react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

// Generate loan repayment data
const generateLoanData = (loanType) => {
	let principal = 0
	let tenure = 0
	let rate = 0
	let emi = 0

	// Set loan parameters based on loan type
	switch (loanType) {
		case "home":
			principal = 8500000
			tenure = 240 // 20 years in months
			rate = 8.5 // 8.5% per annum
			emi = 74000
			break
		case "car":
			principal = 1350000
			tenure = 60 // 5 years in months
			rate = 9.5 // 9.5% per annum
			emi = 28500
			break
		case "personal":
			principal = 500000
			tenure = 36 // 3 years in months
			rate = 12 // 12% per annum
			emi = 16700
			break
		default:
			principal = 8500000
			tenure = 240
			rate = 8.5
			emi = 74000
	}

	const monthlyRate = rate / 12 / 100
	const data = []
	let remainingPrincipal = principal
	let totalInterestPaid = 0

	// Generate data for each month
	for (let month = 0; month <= tenure; month += 12) {
		// Show yearly data points
		const year = Math.floor(month / 12)

		if (month > 0) {
			// Calculate remaining principal after 12 months of payments
			for (let m = 0; m < 12 && remainingPrincipal > 0; m++) {
				const interestForMonth = remainingPrincipal * monthlyRate
				const principalForMonth = emi - interestForMonth

				totalInterestPaid += interestForMonth
				remainingPrincipal -= principalForMonth

				if (remainingPrincipal < 0) remainingPrincipal = 0
			}
		}

		data.push({
			name: `Year ${year}`,
			principal: Math.round(remainingPrincipal),
			interest: Math.round(totalInterestPaid),
		})
	}

	return data
}

export function LoanRepaymentChart({ loanType }) {
	const [ data, setData ] = useState([])

	useEffect(() => {
		setData(generateLoanData(loanType))
	}, [ loanType ])

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
			<AreaChart
				data={data}
				margin={{
					top: 20,
					right: 30,
					left: 30,
					bottom: 0,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
				<XAxis
					dataKey="name"
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
				/>
				<Tooltip
					formatter={(value) => [ formatCurrency(value), "" ]}
					contentStyle={{
						backgroundColor: "white",
						borderRadius: "0.5rem",
						boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
						border: "none",
					}}
				/>
				<Legend />
				<Area
					type="monotone"
					dataKey="principal"
					stackId="1"
					stroke="#8b5cf6"
					fill="#8b5cf6"
					name="Remaining Principal"
				/>
				<Area type="monotone" dataKey="interest" stackId="1" stroke="#3b82f6" fill="#3b82f6" name="Interest Paid" />
			</AreaChart>
		</ResponsiveContainer>
	)
}
