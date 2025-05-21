"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ArrowLeft, Filter, SlidersHorizontal, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function page() {
	const [ selectedFundType, setSelectedFundType ] = useState(null)
	const [ searchQuery, setSearchQuery ] = useState("")

	const fundTypes = [
		{ id: "equity", label: "Equity" },
		{ id: "fi-select", label: "FI Select Funds" },
		{ id: "elss", label: "ELSS/Tax-Saving" },
		{ id: "hybrid", label: "Hybrid" },
		{ id: "gold", label: "Gold" },
		{ id: "debt", label: "Debt" },
		{ id: "liquid", label: "Liquid" },
	]

	const mutualFunds = [
		{
			id: 1,
			logo: "360ONE",
			name: "360 ONE Liquid Fund-Reg(DD-IDCW)",
			type: "Debt - Liquid Fund",
			returns: {
				"1year": "7.07%",
				"3year": "6.72%",
				"5year": "5.22%",
			},
			nav: "1000.5",
			rating: 5,
		},
		{
			id: 2,
			logo: "360ONE",
			name: "360 ONE Liquid Fund-Reg(G)",
			type: "Debt - Liquid Fund",
			returns: {
				"1year": "7.09%",
				"3year": "6.72%",
				"5year": "5.23%",
			},
			nav: "1994.2",
			rating: 5,
		},
		{
			id: 3,
			logo: "360ONE",
			name: "360 ONE Liquid Fund-Reg(W-IDCW Reinv)",
			type: "Debt - Liquid Fund",
			returns: {
				"1year": "7.09%",
				"3year": "6.69%",
				"5year": "5.18%",
			},
			nav: "1005",
			rating: 5,
		},
		{
			id: 4,
			logo: "360ONE",
			name: "360 ONE Liquid Fund-Reg(W-IDCW)",
			type: "Debt - Liquid Fund",
			returns: {
				"1year": "7.09%",
				"3year": "6.69%",
				"5year": "5.18%",
			},
			nav: "1005",
			rating: 5,
		},
	]

	const filteredFunds = mutualFunds.filter((fund) => {
		// Filter by fund type if selected
		if (selectedFundType && !fund.type.toLowerCase().includes(selectedFundType.toLowerCase())) {
			return false
		}

		// Filter by search query
		if (searchQuery && !fund.name.toLowerCase().includes(searchQuery.toLowerCase())) {
			return false
		}

		return true
	})

	return (
		<div className="space-y-6">
			<div className="flex items-center gap-4">
				<Link href="/dashboard/mutual-funds">
					<Button variant="ghost" size="icon" className="rounded-full">
						<ArrowLeft className="h-5 w-5" />
						<span className="sr-only">Back</span>
					</Button>
				</Link>
				<h1 className="text-2xl font-bold">SIP</h1>
			</div>

			{/* Search Bar */}
			<div className="relative">
				<Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
				<Input
					placeholder="Search funds"
					className="pl-10 py-6 text-lg rounded-full bg-gray-50 border-gray-200"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
			</div>

			{/* Fund Type Filters */}
			<div className="flex flex-wrap gap-2">
				{fundTypes.map((type) => (
					<Button
						key={type.id}
						variant="outline"
						className={`rounded-full border-gray-300 ${selectedFundType === type.id ? "bg-blue-50 border-blue-300 text-blue-700" : "bg-white"
							}`}
						onClick={() => setSelectedFundType(selectedFundType === type.id ? null : type.id)}
					>
						<RadioGroup className="flex items-center gap-2">
							<div className="flex items-center gap-2">
								<RadioGroupItem
									value={type.id}
									id={type.id}
									className={selectedFundType === type.id ? "text-blue-600" : ""}
									checked={selectedFundType === type.id}
									onChange={() => { }}
								/>
								<Label htmlFor={type.id} className="cursor-pointer">
									{type.label}
								</Label>
							</div>
						</RadioGroup>
					</Button>
				))}
			</div>

			{/* Sort and Filter */}
			<div className="flex justify-end gap-2">
				<Button variant="ghost" size="sm" className="text-gray-500">
					<SlidersHorizontal className="h-4 w-4 mr-1" /> Sort
				</Button>
				<Button variant="ghost" size="sm" className="text-gray-500">
					<Filter className="h-4 w-4 mr-1" /> Filter
				</Button>
			</div>

			{/* Fund List */}
			<div className="space-y-4">
				{filteredFunds.map((fund) => (
					<Card key={fund.id} className="overflow-hidden hover:shadow-md transition-shadow">
						<CardContent className="p-0">
							<div className="flex items-center border-b border-gray-100">
								<div className="p-4 flex-shrink-0 w-20 flex items-center justify-center bg-gray-50">
									<div className="font-bold text-lg">{fund.logo}</div>
								</div>
								<div className="p-4 flex-grow">
									<h3 className="font-medium">{fund.name}</h3>
									<p className="text-sm text-gray-500">{fund.type}</p>
								</div>
								<div className="p-4">
									<Button size="sm" className="rounded-full bg-blue-600 hover:bg-blue-700">
										<Plus className="h-5 w-5" />
									</Button>
								</div>
							</div>
							<div className="grid grid-cols-5 divide-x divide-gray-100">
								<div className="p-3 text-center">
									<div className="text-sm text-gray-500">1 year</div>
									<div className="font-medium">{fund.returns[ "1year" ]}</div>
								</div>
								<div className="p-3 text-center">
									<div className="text-sm text-gray-500">3 year</div>
									<div className="font-medium">{fund.returns[ "3year" ]}</div>
								</div>
								<div className="p-3 text-center">
									<div className="text-sm text-gray-500">5 year</div>
									<div className="font-medium">{fund.returns[ "5year" ]}</div>
								</div>
								<div className="p-3 text-center">
									<div className="text-sm text-gray-500">NAV</div>
									<div className="font-medium">{fund.nav}</div>
								</div>
								<div className="p-3 text-center">
									<div className="text-sm text-gray-500">Rating</div>
									<div className="font-medium text-green-600">{fund.rating}★</div>
								</div>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	)
}
