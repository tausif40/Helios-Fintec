"use client"

import { useState } from "react"
import { Download, FileText, Plus, Filter, Search, SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { LoanRepaymentChart } from "@/components/chart/loan-repayment-chart"

export default function Loans() {
	const [ selectedLoan, setSelectedLoan ] = useState("home")

	return (
		<div className="space-y-8">
			<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
				<div>
					<h2 className="text-3xl font-bold tracking-tight">Loans</h2>
					<p className="text-muted-foreground">Manage all your loans and track your EMIs in one place.</p>
				</div>
				<div className="flex items-center gap-2">
					<Button variant="outline" size="sm">
						<FileText className="mr-2 h-4 w-4" />
						Loan Statement
					</Button>
					<Button
						size="sm"
						className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
					>
						<Plus className="mr-2 h-4 w-4" />
						Apply for Loan
					</Button>
				</div>
			</div>

			{/* Loan Repayment Chart */}
			<Card className="overflow-hidden">
				<CardHeader className="pb-2">
					<div className="flex items-center justify-between">
						<div>
							<CardTitle className="text-lg">Loan Repayment Schedule</CardTitle>
							<CardDescription>Track your loan repayment progress</CardDescription>
						</div>
						<div className="flex items-center gap-1 rounded-lg border p-1">
							{[
								{ id: "home", name: "Home Loan" },
								{ id: "car", name: "Car Loan" },
								{ id: "personal", name: "Personal Loan" },
							].map((loan) => (
								<Button
									key={loan.id}
									variant={selectedLoan === loan.id ? "default" : "ghost"}
									size="sm"
									className={`h-7 px-2 text-xs ${selectedLoan === loan.id
										? "bg-purple-600 text-white hover:bg-purple-700"
										: "text-gray-500 hover:text-gray-900"
										}`}
									onClick={() => setSelectedLoan(loan.id)}
								>
									{loan.name}
								</Button>
							))}
						</div>
					</div>
				</CardHeader>
				<CardContent className="p-0">
					<div className="h-[350px] w-full">
						<LoanRepaymentChart loanType={selectedLoan} />
					</div>
				</CardContent>
			</Card>

			{/* Search and Filter */}
			<div className="flex flex-col gap-4 sm:flex-row">
				<div className="relative flex-1">
					<Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
					<Input placeholder="Search loans..." className="pl-9" />
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

			<Tabs defaultValue="all" className="space-y-4">
				<TabsList>
					<TabsTrigger value="all">All Loans</TabsTrigger>
					<TabsTrigger value="personal">Personal</TabsTrigger>
					<TabsTrigger value="home">Home</TabsTrigger>
					<TabsTrigger value="car">Car</TabsTrigger>
					<TabsTrigger value="business">Business</TabsTrigger>
				</TabsList>

				<TabsContent value="all" className="space-y-4">
					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
						<Card className="bg-gradient-to-br from-purple-50 to-white border-purple-100 hover:shadow-md transition-shadow">
							<CardHeader className="pb-2">
								<CardTitle className="text-lg">Home Loan</CardTitle>
								<CardDescription>HDFC Bank</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="space-y-2">
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Balance</span>
										<span className="font-medium">₹45,00,000</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Next EMI</span>
										<span className="font-medium">₹60,000 (1st May)</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Interest Paid</span>
										<span className="font-medium">₹12,00,000</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Principal Paid</span>
										<span className="font-medium">₹40,00,000</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Balance EMIs</span>
										<span className="font-medium">15</span>
									</div>
								</div>
								<div>
									<div className="flex items-center justify-between mb-1">
										<span className="text-xs text-gray-500">75% Paid</span>
									</div>
									<Progress value={75} className="h-2 bg-gray-200" indicatorClassName="bg-purple-600" />
								</div>
							</CardContent>
							<CardFooter className="flex justify-between">
								<Button variant="outline" size="sm">
									<Download className="mr-2 h-4 w-4" />
									Statement
								</Button>
								<Button size="sm" className="bg-purple-600 hover:bg-purple-700">
									Pay EMI
								</Button>
							</CardFooter>
						</Card>
						<Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100 hover:shadow-md transition-shadow">
							<CardHeader className="pb-2">
								<CardTitle className="text-lg">Car Loan</CardTitle>
								<CardDescription>SBI Bank</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="space-y-2">
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Balance</span>
										<span className="font-medium">₹8,50,000</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Next EMI</span>
										<span className="font-medium">₹25,000 (5th May)</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Interest Paid</span>
										<span className="font-medium">₹1,50,000</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Principal Paid</span>
										<span className="font-medium">₹5,00,000</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Balance EMIs</span>
										<span className="font-medium">34</span>
									</div>
								</div>
								<div>
									<div className="flex items-center justify-between mb-1">
										<span className="text-xs text-gray-500">40% Paid</span>
									</div>
									<Progress value={40} className="h-2 bg-gray-200" indicatorClassName="bg-blue-600" />
								</div>
							</CardContent>
							<CardFooter className="flex justify-between">
								<Button variant="outline" size="sm">
									<Download className="mr-2 h-4 w-4" />
									Statement
								</Button>
								<Button size="sm" className="bg-blue-600 hover:bg-blue-700">
									Pay EMI
								</Button>
							</CardFooter>
						</Card>
						<Card className="bg-gradient-to-br from-green-50 to-white border-green-100 hover:shadow-md transition-shadow">
							<CardHeader className="pb-2">
								<CardTitle className="text-lg">Personal Loan</CardTitle>
								<CardDescription>ICICI Bank</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="space-y-2">
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Balance</span>
										<span className="font-medium">₹2,50,000</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Next EMI</span>
										<span className="font-medium">₹15,000 (10th May)</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Interest Paid</span>
										<span className="font-medium">₹75,000</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Principal Paid</span>
										<span className="font-medium">₹1,75,000</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Balance EMIs</span>
										<span className="font-medium">18</span>
									</div>
								</div>
								<div>
									<div className="flex items-center justify-between mb-1">
										<span className="text-xs text-gray-500">60% Paid</span>
									</div>
									<Progress value={60} className="h-2 bg-gray-200" indicatorClassName="bg-green-600" />
								</div>
							</CardContent>
							<CardFooter className="flex justify-between">
								<Button variant="outline" size="sm">
									<Download className="mr-2 h-4 w-4" />
									Statement
								</Button>
								<Button size="sm" className="bg-green-600 hover:bg-green-700">
									Pay EMI
								</Button>
							</CardFooter>
						</Card>
					</div>
				</TabsContent>

				{/* Other tabs would have filtered content */}
				<TabsContent value="personal" className="space-y-4">
					{/* Personal Loan content */}
				</TabsContent>
			</Tabs>
		</div>
	)
}
