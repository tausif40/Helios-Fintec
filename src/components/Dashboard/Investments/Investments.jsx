"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Download, TrendingUp, Plus, Filter, Search, SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { PortfolioAllocationChart } from "@/components/chart/portfolio-allocation-chart"

export default function Investments() {
	const [ portfolioView, setPortfolioView ] = useState("allocation")

	return (
		<div className="space-y-8">
			<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
				<div>
					<h2 className="text-3xl font-bold tracking-tight">Investments</h2>
					<p className="text-muted-foreground">Manage your investment portfolio and track performance.</p>
				</div>
				<div className="flex items-center gap-2">
					{/* <Button variant="outline" size="sm">
						<Download className="mr-2 h-4 w-4" />
						Export
					</Button> */}
					<Button
						size="lg"
						className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
					>
						<Plus className="mr-2 h-4 w-4" />
						New Investment
					</Button>
				</div>
			</div>

			{/* Portfolio Summary */}
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
				<Card className="bg-gradient-to-br from-purple-50 to-white border-purple-100">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Total Investments</CardTitle>
						<div className="rounded-full bg-purple-100 p-1">
							<TrendingUp className="h-4 w-4 text-purple-600" />
						</div>
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">₹24,45,000</div>
						<div className="flex items-center text-xs text-green-500">
							<TrendingUp className="mr-1 h-3 w-3" />
							<span>+12.5% from last month</span>
						</div>
					</CardContent>
				</Card>
				<Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Current Returns</CardTitle>
						<div className="rounded-full bg-blue-100 p-1">
							<TrendingUp className="h-4 w-4 text-blue-600" />
						</div>
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">₹3,75,000</div>
						<div className="flex items-center text-xs text-green-500">
							<TrendingUp className="mr-1 h-3 w-3" />
							<span>+15.3% overall</span>
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
						<div className="text-2xl font-bold">₹75,000</div>
						<div className="flex items-center text-xs text-green-500">
							<TrendingUp className="mr-1 h-3 w-3" />
							<span>+5,000 from last month</span>
						</div>
					</CardContent>
				</Card>
				<Card className="bg-gradient-to-br from-orange-50 to-white border-orange-100">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Asset Allocation</CardTitle>
						<div className="rounded-full bg-orange-100 p-1">
							<SlidersHorizontal className="h-4 w-4 text-orange-600" />
						</div>
					</CardHeader>
					<CardContent>
						<div className="flex items-center justify-between text-xs font-medium">
							<span>Equity: 65%</span>
							<span>Debt: 25%</span>
							<span>Gold: 10%</span>
						</div>
						<div className="mt-2 flex h-2 w-full overflow-hidden rounded-full bg-gray-200">
							<div className="h-full bg-purple-600" style={{ width: "65%" }}></div>
							<div className="h-full bg-blue-600" style={{ width: "25%" }}></div>
							<div className="h-full bg-yellow-500" style={{ width: "10%" }}></div>
						</div>
					</CardContent>
				</Card>
			</div>

			{/* Portfolio Allocation Chart */}
			<Card className="overflow-hidden">
				<CardHeader className="pb-2">
					<div className="flex items-center justify-between">
						<div>
							<CardTitle className="text-lg">Portfolio Analysis</CardTitle>
							<CardDescription>Breakdown of your investment portfolio</CardDescription>
						</div>
						<div className="flex items-center gap-1 rounded-lg border p-1">
							{[ "allocation", "performance", "risk" ].map((view) => (
								<Button
									key={view}
									variant={portfolioView === view ? "default" : "ghost"}
									size="sm"
									className={`h-7 px-2 text-xs capitalize ${portfolioView === view
										? "bg-purple-600 text-white hover:bg-purple-700"
										: "text-gray-500 hover:text-gray-900"
										}`}
									onClick={() => setPortfolioView(view)}
								>
									{view}
								</Button>
							))}
						</div>
					</div>
				</CardHeader>
				<CardContent className="p-0">
					<div className="h-[350px] w-full">
						<PortfolioAllocationChart view={portfolioView} />
					</div>
				</CardContent>
			</Card>

			{/* Search and Filter */}
			<div className="flex flex-col gap-4 sm:flex-row">
				<div className="relative flex-1">
					<Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
					<Input placeholder="Search investments..." className="pl-9" />
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

			{/* Investment Categories */}
			<Tabs defaultValue="all" className="space-y-4">
				<TabsList>
					<TabsTrigger value="all">All</TabsTrigger>
					<TabsTrigger value="mutual-funds">Mutual Funds</TabsTrigger>
					<TabsTrigger value="stocks">Stocks</TabsTrigger>
					<TabsTrigger value="fixed-deposits">Fixed Deposits</TabsTrigger>
					<TabsTrigger value="others">Others</TabsTrigger>
				</TabsList>

				<TabsContent value="all" className="space-y-4">
					{/* Mutual Funds */}
					<div className="space-y-4">
						<div className="flex items-center justify-between">
							<h3 className="text-lg font-semibold">Mutual Funds</h3>
							<Link href="/dashboard/investments/mutual-funds">
								<Button variant="ghost" size="sm" className="gap-1">
									View All <ArrowUpRight className="h-4 w-4" />
								</Button>
							</Link>
						</div>
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
								<CardFooter className="pt-2">
									<Link href="/dashboard/investments/mutual-funds/hdfc-mid-cap" className="w-full">
										<Button variant="ghost" size="sm" className="w-full justify-between">
											View Details
											<ArrowUpRight className="h-4 w-4" />
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
								<CardFooter className="pt-2">
									<Link href="/dashboard/investments/mutual-funds/axis-bluechip" className="w-full">
										<Button variant="ghost" size="sm" className="w-full justify-between">
											View Details
											<ArrowUpRight className="h-4 w-4" />
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
								<CardFooter className="pt-2">
									<Link href="/dashboard/investments/mutual-funds/sbi-small-cap" className="w-full">
										<Button variant="ghost" size="sm" className="w-full justify-between">
											View Details
											<ArrowUpRight className="h-4 w-4" />
										</Button>
									</Link>
								</CardFooter>
							</Card>
						</div>
					</div>

					{/* Stocks */}
					<div className="space-y-4">
						<div className="flex items-center justify-between">
							<h3 className="text-lg font-semibold">Stocks</h3>
							<Link href="/dashboard/investments/stocks">
								<Button variant="ghost" size="sm" className="gap-1">
									View All <ArrowUpRight className="h-4 w-4" />
								</Button>
							</Link>
						</div>
						<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
							<Card className="bg-gradient-to-br from-purple-50 to-white border-purple-100 hover:shadow-md transition-shadow">
								<CardHeader className="pb-2">
									<div className="flex items-center justify-between">
										<CardTitle className="text-lg">Reliance Industries</CardTitle>
										<Badge className="bg-green-100 text-green-700 hover:bg-green-200">+15.2%</Badge>
									</div>
									<CardDescription>RELIANCE | NSE</CardDescription>
								</CardHeader>
								<CardContent className="pb-2">
									<div className="space-y-2">
										<div className="flex items-center justify-between">
											<span className="text-sm text-gray-500">Quantity</span>
											<span className="font-medium">50 shares</span>
										</div>
										<div className="flex items-center justify-between">
											<span className="text-sm text-gray-500">Avg. Buy Price</span>
											<span className="font-medium">₹2,450</span>
										</div>
										<div className="flex items-center justify-between">
											<span className="text-sm text-gray-500">Current Value</span>
											<span className="font-medium">₹1,41,250</span>
										</div>
									</div>
								</CardContent>
								<CardFooter className="pt-2">
									<Link href="/dashboard/investments/stocks/reliance" className="w-full">
										<Button variant="ghost" size="sm" className="w-full justify-between">
											View Details
											<ArrowUpRight className="h-4 w-4" />
										</Button>
									</Link>
								</CardFooter>
							</Card>
							<Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100 hover:shadow-md transition-shadow">
								<CardHeader className="pb-2">
									<div className="flex items-center justify-between">
										<CardTitle className="text-lg">HDFC Bank</CardTitle>
										<Badge className="bg-green-100 text-green-700 hover:bg-green-200">+8.7%</Badge>
									</div>
									<CardDescription>HDFCBANK | NSE</CardDescription>
								</CardHeader>
								<CardContent className="pb-2">
									<div className="space-y-2">
										<div className="flex items-center justify-between">
											<span className="text-sm text-gray-500">Quantity</span>
											<span className="font-medium">75 shares</span>
										</div>
										<div className="flex items-center justify-between">
											<span className="text-sm text-gray-500">Avg. Buy Price</span>
											<span className="font-medium">₹1,650</span>
										</div>
										<div className="flex items-center justify-between">
											<span className="text-sm text-gray-500">Current Value</span>
											<span className="font-medium">₹1,34,681</span>
										</div>
									</div>
								</CardContent>
								<CardFooter className="pt-2">
									<Link href="/dashboard/investments/stocks/hdfc-bank" className="w-full">
										<Button variant="ghost" size="sm" className="w-full justify-between">
											View Details
											<ArrowUpRight className="h-4 w-4" />
										</Button>
									</Link>
								</CardFooter>
							</Card>
							<Card className="bg-gradient-to-br from-green-50 to-white border-green-100 hover:shadow-md transition-shadow">
								<CardHeader className="pb-2">
									<div className="flex items-center justify-between">
										<CardTitle className="text-lg">Infosys</CardTitle>
										<Badge className="bg-red-100 text-red-700 hover:bg-red-200">-3.5%</Badge>
									</div>
									<CardDescription>INFY | NSE</CardDescription>
								</CardHeader>
								<CardContent className="pb-2">
									<div className="space-y-2">
										<div className="flex items-center justify-between">
											<span className="text-sm text-gray-500">Quantity</span>
											<span className="font-medium">100 shares</span>
										</div>
										<div className="flex items-center justify-between">
											<span className="text-sm text-gray-500">Avg. Buy Price</span>
											<span className="font-medium">₹1,450</span>
										</div>
										<div className="flex items-center justify-between">
											<span className="text-sm text-gray-500">Current Value</span>
											<span className="font-medium">₹1,39,925</span>
										</div>
									</div>
								</CardContent>
								<CardFooter className="pt-2">
									<Link href="/dashboard/investments/stocks/infosys" className="w-full">
										<Button variant="ghost" size="sm" className="w-full justify-between">
											View Details
											<ArrowUpRight className="h-4 w-4" />
										</Button>
									</Link>
								</CardFooter>
							</Card>
						</div>
					</div>
				</TabsContent>
			</Tabs>
		</div>
	)
}
