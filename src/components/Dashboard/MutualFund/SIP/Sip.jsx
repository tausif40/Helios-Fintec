"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { Search, ArrowLeft, Filter, SlidersHorizontal, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useDispatch, useSelector } from "react-redux"
import { getSIP, storeFilterData } from "@/store/features/mutualFund-slice"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, } from "@/components/ui/pagination"

export default function Sip() {
	const dispatch = useDispatch()
	const [ selectedFundType, setSelectedFundType ] = useState(null)
	const [ searchQuery, setSearchQuery ] = useState("")
	const [ sipData, setSipData ] = useState([])

	const fundTypes = [
		{ id: "equity", label: "Equity" },
		{ id: "debt", label: "Debt" },
		{ id: "hybrid", label: "Hybrid" },
		{ id: "gold", label: "Gold" },
		{ id: "fofs", label: "Fund of Funds" },
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

	const [ filter, setFilter ] = useState({
		mutualFundType: '',
		page: '',
		limit: '',
	})
	console.log(filter);

	useEffect(() => {
		dispatch(getSIP(filter))
		dispatch(storeFilterData(filter))
	}, [ dispatch, filter ])

	const sipList = useSelector((state) => state.mutualFund.sip);
	const filterData = useSelector((state) => state.mutualFund.filter);
	const data = sipList?.data;

	useEffect(() => {
		console.log(data);
		setSipData(data)
	}, [ sipList ])

	// useEffect(() => {
	// 	setFilter((pre) => ({ ...pre, page: filterData.page || data?.page, limit: filterData.imit || data?.limit }))
	// }, [ filter ])

	// console.log(sipData?.data);

	// const filteredFunds = mutualFunds.filter((fund) => {
	// 	// Filter by fund type if selected
	// 	if (selectedFundType && !fund.type.toLowerCase().includes(selectedFundType.toLowerCase())) {
	// 		return false
	// 	}

	// 	// Filter by search query
	// 	if (searchQuery && !fund.name.toLowerCase().includes(searchQuery.toLowerCase())) {
	// 		return false
	// 	}

	// 	return true
	// })

	return (
		<>
			<div className="space-y-6">
				<div className="flex items-center gap-4">
					<Link href="/dashboard/mutual-fund">
						<Button variant="ghost" size="icon">
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
				<div className="flex justify-center flex-wrap gap-4">
					{fundTypes.map((type) => (
						<div
							key={type.id}
							className={`rounded-full border-gray-300 pl-3 pr-4 py-1 hover:bg-secondary border ${selectedFundType === type.id ? "bg-blue-50 border-blue-300 text-blue-700" : "bg-white"
								}`}
							onClick={() => setSelectedFundType(selectedFundType === type.id ? null : type.id)}
						>
							<RadioGroup className="flex items-center gap-2">
								<div className="flex items-center gap-3">
									<RadioGroupItem
										value={type.id}
										id={type.id}
										className={selectedFundType === type.id ? "text-blue-600" : ""}
										checked={selectedFundType === type.id}
										onChange={() => setFilter((pre) => ({ ...pre, mutualFundType: type.id }))}
									/>
									<p className="cursor-pointer">{type.label}</p>
								</div>
							</RadioGroup>
						</div>
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
					{sipData?.data?.length !== 0 && sipData?.data?.map((fund) => (
						<Card key={fund?.id} className="overflow-hidden hover:shadow-md transition-shadow py-4">
							<CardContent className="flex justify-between">
								<div className="flex items-center">
									<div className="p-4 flex-shrink-0 w-20 flex items-center justify-center">
										<div className="font-bold text-lg">{fund?.schemecode}</div>
									</div>
									<div className="p-4 flex-grow">
										<h3 className="font-medium">{fund?.s_name1}</h3>
										<p className="text-sm text-gray-500">{fund?.fund_house}</p>
									</div>
								</div>
								<div className="grid grid-cols-4 divide-x divide-gray-100 items-center">
									<div className="px-5 py-3  text-center border-l">
										<div className="text-sm text-gray-500">1 year</div>
										<div className="font-medium">{fund?.returns_1year || '-'}</div>
									</div>
									<div className="px-5 py-3 text-center">
										<div className="text-sm text-gray-500">3 year</div>
										<div className="font-medium">{fund?.returns_3year || '-'}</div>
									</div>
									<div className="px-5 py-3 text-center">
										<div className="text-sm text-gray-500">5 year</div>
										<div className="font-medium">{fund?.returns_5year || '-'}</div>
									</div>
									{/* <div className="p-3 text-center">
										<div className="text-sm text-gray-500">NAV</div>
										<div className="font-medium">{fund?.nav}</div>
									</div> */}
									{/* <div className="p-3 text-center">
										<div className="text-sm text-gray-500">Rating</div>
										<div className="font-medium text-green-600">{fund?.rating}★</div>
									</div> */}
									<div className="flex justify-end items-center">
										<div className="h-6 w-6 flex justify-center items-center rounded-full bg-blue-600 hover:bg-blue-700 cursor-pointer">
											<Plus className="h-4 w-4 text-white" />
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div >
			<div className="mt-6">
				<Pagination>
					<PaginationContent>
						<PaginationItem><PaginationPrevious href="#" /></PaginationItem>
						<PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
						<PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
						<PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
						<PaginationItem><PaginationEllipsis /></PaginationItem>
						<PaginationItem><PaginationNext href="#" /></PaginationItem>
					</PaginationContent>
				</Pagination>
			</div>
		</>
	)
}
