"use client"

import React from "react"
import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Download, TrendingUp, Plus, Filter, Search, SlidersHorizontal, DollarSign } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MutualFundPerformanceChart } from "@/components/chart/mutual-fund-performance-chart"

export default function MutualFund() {
	const [ fundCategory, setFundCategory ] = useState("all")

	return (
		<div className="space-y-8">
			<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
				<div>
					<h2 className="text-3xl font-bold tracking-tight">Mutual Funds</h2>
					<p className="text-muted-foreground">Manage your mutual fund investments and track performance.</p>
				</div>
				<div className="flex items-center gap-2">
					{/* <Button variant="outline" size="sm">
						<Download className="mr-2 h-4 w-4" />
						Export
					</Button> */}
					<Link href="/dashboard/mutual-fund/sip">
						<Button
							size="lg"
							className="cursor-pointer bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
						>
							<Plus className="mr-2 h-4 w-4" />
							Start a SIP
						</Button>
					</Link>
				</div>
			</div>

			{/* Portfolio Summary */}
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
				<Card className="bg-gradient-to-br from-purple-50 to-white border-purple-100">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Total Investment</CardTitle>
						<div className="rounded-full bg-purple-100 p-1">
							<DollarSign className="h-4 w-4 text-purple-600" />
						</div>
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">₹12,45,000</div>
						<div className="flex items-center text-xs text-green-500">
							<TrendingUp className="mr-1 h-3 w-3" />
							<span>+8.5% from last month</span>
						</div>
					</CardContent>
				</Card>
				<Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Current Value</CardTitle>
						<div className="rounded-full bg-blue-100 p-1">
							<DollarSign className="h-4 w-4 text-blue-600" />
						</div>
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">₹14,65,950</div>
						<div className="flex items-center text-xs text-green-500">
							<TrendingUp className="mr-1 h-3 w-3" />
							<span>+17.7% overall</span>
						</div>
					</CardContent>
				</Card>
				<Card className="bg-gradient-to-br from-green-50 to-white border-green-100">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Monthly SIP</CardTitle>
						<div className="rounded-full bg-green-100 p-1">
							<TrendingUp className="h-4 w-4 text-green-600" />
						</div>
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">₹60,000</div>
						<div className="flex items-center text-xs text-green-500">
							<TrendingUp className="mr-1 h-3 w-3" />
							<span>+5,000 from last month</span>
						</div>
					</CardContent>
				</Card>
				<Card className="bg-gradient-to-br from-orange-50 to-white border-orange-100">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Fund Categories</CardTitle>
						<div className="rounded-full bg-orange-100 p-1">
							<SlidersHorizontal className="h-4 w-4 text-orange-600" />
						</div>
					</CardHeader>
					<CardContent>
						<div className="flex items-center justify-between text-xs font-medium">
							<span>Equity: 75%</span>
							<span>Debt: 20%</span>
							<span>Hybrid: 5%</span>
						</div>
						<div className="mt-2 flex h-2 w-full overflow-hidden rounded-full bg-gray-200">
							<div className="h-full bg-purple-600" style={{ width: "75%" }}></div>
							<div className="h-full bg-blue-600" style={{ width: "20%" }}></div>
							<div className="h-full bg-orange-500" style={{ width: "5%" }}></div>
						</div>
					</CardContent>
				</Card>
			</div>

			{/* Performance Chart */}
			<Card className="overflow-hidden">
				<CardHeader className="pb-2">
					<div className="flex items-center justify-between">
						<div>
							<CardTitle className="text-lg">Mutual Fund Performance</CardTitle>
							<CardDescription>Track your mutual fund returns over time</CardDescription>
						</div>
						<div className="flex items-center gap-1 rounded-lg border p-1">
							{[ "1M", "3M", "6M", "1Y", "3Y", "5Y" ].map((period) => (
								<Button
									key={period}
									variant="ghost"
									size="sm"
									className={`h-7 px-2 text-xs ${period === "1Y"
										? "bg-purple-600 text-white hover:bg-purple-700"
										: "text-gray-500 hover:text-gray-900"
										}`}
								>
									{period}
								</Button>
							))}
						</div>
					</div>
				</CardHeader>
				<CardContent className="p-0">
					<div className="h-[350px] w-full">
						<MutualFundPerformanceChart />
					</div>
				</CardContent>
			</Card>

			{/* Your SIPs Section */}
			<div>
				<div className="flex items-center justify-between mb-4">
					<h3 className="text-xl font-bold">Your SIP Investments</h3>
					<Link href="/dashboard/mutual-fund/sip">
						<Button className="bg-blue-600 hover:bg-blue-700">
							Start a SIP
							<Plus className="ml-2 h-4 w-4" />
						</Button>
					</Link>
				</div>

				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
					<Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100 hover:shadow-md transition-shadow">
						<CardHeader className="pb-2">
							<CardTitle className="text-lg">HDFC Mid-Cap Opportunities</CardTitle>
							<CardDescription>Large & Mid Cap | Growth</CardDescription>
						</CardHeader>
						<CardContent className="pb-2">
							<div className="space-y-2">
								<div className="flex items-center justify-between">
									<span className="text-sm text-gray-500">Monthly SIP</span>
									<span className="font-medium">₹5,000</span>
								</div>
								<div className="flex items-center justify-between">
									<span className="text-sm text-gray-500">Total Investment</span>
									<span className="font-medium">₹60,000</span>
								</div>
								<div className="flex items-center justify-between">
									<span className="text-sm text-gray-500">Current Value</span>
									<span className="font-medium">₹68,500</span>
								</div>
								<div className="flex items-center justify-between">
									<span className="text-sm text-gray-500">Returns</span>
									<span className="font-medium text-green-600">+14.2%</span>
								</div>
							</div>
						</CardContent>
						<CardFooter className="pt-2 flex justify-between">
							<Button variant="outline" size="sm">
								Modify SIP
							</Button>
							<Button variant="ghost" size="sm">
								Details <ArrowUpRight className="ml-2 h-4 w-4" />
							</Button>
						</CardFooter>
					</Card>

					<Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100 hover:shadow-md transition-shadow">
						<CardHeader className="pb-2">
							<CardTitle className="text-lg">Axis Bluechip Fund</CardTitle>
							<CardDescription>Large Cap | Growth</CardDescription>
						</CardHeader>
						<CardContent className="pb-2">
							<div className="space-y-2">
								<div className="flex items-center justify-between">
									<span className="text-sm text-gray-500">Monthly SIP</span>
									<span className="font-medium">₹3,000</span>
								</div>
								<div className="flex items-center justify-between">
									<span className="text-sm text-gray-500">Total Investment</span>
									<span className="font-medium">₹36,000</span>
								</div>
								<div className="flex items-center justify-between">
									<span className="text-sm text-gray-500">Current Value</span>
									<span className="font-medium">₹39,800</span>
								</div>
								<div className="flex items-center justify-between">
									<span className="text-sm text-gray-500">Returns</span>
									<span className="font-medium text-green-600">+10.6%</span>
								</div>
							</div>
						</CardContent>
						<CardFooter className="pt-2 flex justify-between">
							<Button variant="outline" size="sm">
								Modify SIP
							</Button>
							<Button variant="ghost" size="sm">
								Details <ArrowUpRight className="ml-2 h-4 w-4" />
							</Button>
						</CardFooter>
					</Card>

					<Card className="border-2 border-dashed border-gray-200 hover:border-blue-300 transition-colors flex flex-col items-center justify-center p-6 h-full">
						<div className="rounded-full bg-blue-100 p-3 mb-4">
							<PlusIcon className="h-6 w-6 text-blue-600" />
						</div>
						<h3 className="text-lg font-medium mb-2">Start a New SIP</h3>
						<p className="text-sm text-gray-500 text-center mb-4">
							Invest systematically for long-term wealth creation
						</p>
						<Link href="/dashboard/mutual-fund/sip">
							<Button className="bg-blue-600 hover:bg-blue-700">Start Now</Button>
						</Link>
					</Card>
				</div>
			</div>

			{/* Search and Filter */}
			<div className="flex flex-col gap-4 sm:flex-row">
				<div className="relative flex-1">
					<Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
					<Input placeholder="Search mutual funds..." className="pl-9" />
				</div>
				<Button variant="outline" size="icon" className="h-10 w-10">
					<Filter className="h-4 w-4" />
					<span className="sr-only">Filter</span>
				</Button>
				<Button variant="outline" size="icon" className="h-10 w-10">
					<SlidersHorizontal className="h-4 w-4" />
					<span className="sr-only">Sort</span>
				</Button>
			</div>

			{/* Fund Categories */}
			<Tabs defaultValue="all" className="space-y-4">
				<TabsList>
					<TabsTrigger value="all" onClick={() => setFundCategory("all")}>
						All
					</TabsTrigger>
					<TabsTrigger value="equity" onClick={() => setFundCategory("equity")}>
						Equity
					</TabsTrigger>
					<TabsTrigger value="debt" onClick={() => setFundCategory("debt")}>
						Debt
					</TabsTrigger>
					<TabsTrigger value="hybrid" onClick={() => setFundCategory("hybrid")}>
						Hybrid
					</TabsTrigger>
					<TabsTrigger value="index" onClick={() => setFundCategory("index")}>
						Index
					</TabsTrigger>
				</TabsList>

				<TabsContent value="all" className="space-y-4">
					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
						<Card className="bg-gradient-to-br from-purple-50 to-white border-purple-100 hover:shadow-md transition-shadow">
							<CardHeader className="pb-2">
								<div className="flex items-center justify-between">
									<CardTitle className="text-lg">HDFC Mid-Cap Opportunities</CardTitle>
									<Badge className="bg-green-100 text-green-700 hover:bg-green-200">+18.5%</Badge>
								</div>
								<CardDescription>Large & Mid Cap | Growth</CardDescription>
							</CardHeader>
							<CardContent className="pb-2">
								<div className="space-y-2">
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Invested Amount</span>
										<span className="font-medium">₹5,00,000</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Current Value</span>
										<span className="font-medium">₹5,92,500</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Monthly SIP</span>
										<span className="font-medium">₹25,000</span>
									</div>
								</div>
							</CardContent>
							<CardFooter className="pt-2 flex justify-between">
								<Button variant="outline" size="sm">
									<DollarSign className="mr-2 h-4 w-4" />
									Invest More
								</Button>
								<Link href="/dashboard/mutual-funds/hdfc-mid-cap">
									<Button variant="ghost" size="sm">
										Details <ArrowUpRight className="ml-2 h-4 w-4" />
									</Button>
								</Link>
							</CardFooter>
						</Card>
						<Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100 hover:shadow-md transition-shadow">
							<CardHeader className="pb-2">
								<div className="flex items-center justify-between">
									<CardTitle className="text-lg">Axis Bluechip Fund</CardTitle>
									<Badge className="bg-green-100 text-green-700 hover:bg-green-200">+12.3%</Badge>
								</div>
								<CardDescription>Large Cap | Growth</CardDescription>
							</CardHeader>
							<CardContent className="pb-2">
								<div className="space-y-2">
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Invested Amount</span>
										<span className="font-medium">₹4,50,000</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Current Value</span>
										<span className="font-medium">₹5,05,350</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Monthly SIP</span>
										<span className="font-medium">₹20,000</span>
									</div>
								</div>
							</CardContent>
							<CardFooter className="pt-2 flex justify-between">
								<Button variant="outline" size="sm">
									<DollarSign className="mr-2 h-4 w-4" />
									Invest More
								</Button>
								<Link href="/dashboard/mutual-funds/axis-bluechip">
									<Button variant="ghost" size="sm">
										Details <ArrowUpRight className="ml-2 h-4 w-4" />
									</Button>
								</Link>
							</CardFooter>
						</Card>
						<Card className="bg-gradient-to-br from-green-50 to-white border-green-100 hover:shadow-md transition-shadow">
							<CardHeader className="pb-2">
								<div className="flex items-center justify-between">
									<CardTitle className="text-lg">SBI Small Cap Fund</CardTitle>
									<Badge className="bg-green-100 text-green-700 hover:bg-green-200">+22.7%</Badge>
								</div>
								<CardDescription>Small Cap | Growth</CardDescription>
							</CardHeader>
							<CardContent className="pb-2">
								<div className="space-y-2">
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Invested Amount</span>
										<span className="font-medium">₹3,00,000</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Current Value</span>
										<span className="font-medium">₹3,68,100</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Monthly SIP</span>
										<span className="font-medium">₹15,000</span>
									</div>
								</div>
							</CardContent>
							<CardFooter className="pt-2 flex justify-between">
								<Button variant="outline" size="sm">
									<DollarSign className="mr-2 h-4 w-4" />
									Invest More
								</Button>
								<Link href="/dashboard/mutual-funds/sbi-small-cap">
									<Button variant="ghost" size="sm">
										Details <ArrowUpRight className="ml-2 h-4 w-4" />
									</Button>
								</Link>
							</CardFooter>
						</Card>
					</div>
				</TabsContent>
			</Tabs>

			{/* Recommended Funds */}
			<Card>
				<CardHeader>
					<CardTitle>New Added Mutual Funds</CardTitle>
					<CardDescription>Based on your risk profile and investment goals</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="space-y-4">
						<div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
							<div>
								<h4 className="font-medium">Parag Parikh Flexi Cap Fund</h4>
								<p className="text-sm text-gray-500">Flexi Cap | 5★ | 18.6% (3Y)</p>
							</div>
							<Button size="sm">Invest</Button>
						</div>
						<div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
							<div>
								<h4 className="font-medium">Mirae Asset Emerging Bluechip</h4>
								<p className="text-sm text-gray-500">Large & Mid Cap | 5★ | 16.2% (3Y)</p>
							</div>
							<Button size="sm">Invest</Button>
						</div>
						<div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
							<div>
								<h4 className="font-medium">Kotak Emerging Equity Fund</h4>
								<p className="text-sm text-gray-500">Mid Cap | 4★ | 20.1% (3Y)</p>
							</div>
							<Button size="sm">Invest</Button>
						</div>
						<div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
							<div>
								<h4 className="font-medium">Aditya Birla SL Digital India Fund</h4>
								<p className="text-sm text-gray-500">Sectoral - Tech | 4★ | 22.5% (3Y)</p>
							</div>
							<Button size="sm">Invest</Button>
						</div>
					</div>
				</CardContent>
				<CardFooter>
					<Button variant="outline" className="w-full">
						View All Recommendations
					</Button>
				</CardFooter>
			</Card>
		</div>
	)
}

function PlusIcon(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path d="M5 12h14" />
			<path d="M12 5v14" />
		</svg>
	)
}
