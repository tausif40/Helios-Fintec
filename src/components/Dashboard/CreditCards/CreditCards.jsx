import Link from "next/link"
import {
	ArrowUpRight,
	Download,
	Plus,
	Filter,
	Search,
	SlidersHorizontal,
	CreditCard,
	DollarSign,
	ShoppingBag,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function CreditCards() {
	return (
		<div className="space-y-8">
			<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
				<div>
					<h2 className="text-3xl font-bold tracking-tight">Credit Cards</h2>
					<p className="text-muted-foreground">Manage your credit cards and track spending.</p>
				</div>
				<div className="flex items-center gap-2">
					<Button variant="outline" size="sm">
						<Download className="mr-2 h-4 w-4" />
						Export
					</Button>
					<Button
						size="sm"
						className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
					>
						<Plus className="mr-2 h-4 w-4" />
						Add Card
					</Button>
				</div>
			</div>

			{/* Credit Card Summary */}
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
				<Card className="bg-gradient-to-br from-purple-50 to-white border-purple-100">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Total Cards</CardTitle>
						<div className="rounded-full bg-purple-100 p-1">
							<CreditCard className="h-4 w-4 text-purple-600" />
						</div>
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">3</div>
						<div className="text-xs text-gray-500">HDFC, AMEX, SBI</div>
					</CardContent>
				</Card>
				<Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Total Credit Limit</CardTitle>
						<div className="rounded-full bg-blue-100 p-1">
							<DollarSign className="h-4 w-4 text-blue-600" />
						</div>
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">₹25,00,000</div>
						<div className="text-xs text-gray-500">Across all cards</div>
					</CardContent>
				</Card>
				<Card className="bg-gradient-to-br from-green-50 to-white border-green-100">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Current Utilization</CardTitle>
						<div className="rounded-full bg-green-100 p-1">
							<CreditCard className="h-4 w-4 text-green-600" />
						</div>
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">₹4,00,000</div>
						<div className="flex items-center justify-between text-xs text-gray-500">
							<span>16% of total limit</span>
							<Progress value={16} className="h-1 w-16 bg-gray-200" indicatorClassName="bg-green-600" />
						</div>
					</CardContent>
				</Card>
				<Card className="bg-gradient-to-br from-orange-50 to-white border-orange-100">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Reward Points</CardTitle>
						<div className="rounded-full bg-orange-100 p-1">
							<ShoppingBag className="h-4 w-4 text-orange-600" />
						</div>
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">48,000</div>
						<div className="text-xs text-gray-500">Worth ₹12,000 approx.</div>
					</CardContent>
				</Card>
			</div>

			{/* Search and Filter */}
			<div className="flex flex-col gap-4 sm:flex-row">
				<div className="relative flex-1">
					<Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
					<Input placeholder="Search cards..." className="pl-9" />
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

			{/* Credit Cards List */}
			<div className="space-y-6">
				<Card className="bg-gradient-to-br from-purple-50 to-white border-purple-100 hover:shadow-md transition-shadow overflow-hidden">
					<div className="absolute top-0 right-0 w-32 h-32 bg-purple-200 rounded-full -translate-x-16 -translate-y-16 opacity-20"></div>
					<CardHeader className="pb-2">
						<div className="flex items-center justify-between">
							<CardTitle className="text-lg">HDFC Regalia</CardTitle>
							<Badge className="bg-green-100 text-green-700 hover:bg-green-200">Active</Badge>
						</div>
						<CardDescription>**** **** **** 4567</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="grid gap-6 md:gap-12 xl:gap-16 md:grid-cols-3">
							<div className="space-y-2">
								<h4 className="text-sm font-medium text-gray-500">Card Details</h4>
								<div className="space-y-1">
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Type</span>
										<span className="text-sm font-medium">Visa Signature</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Expiry</span>
										<span className="text-sm font-medium">05/26</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Status</span>
										<span className="text-sm font-medium text-green-600">Active</span>
									</div>
								</div>
							</div>
							<div className="space-y-2">
								<h4 className="text-sm font-medium text-gray-500">Balance</h4>
								<div className="space-y-1">
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Credit Limit</span>
										<span className="text-sm font-medium">₹11,00,000</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Available</span>
										<span className="text-sm font-medium">₹9,00,000</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Utilized</span>
										<span className="text-sm font-medium">₹2,00,000</span>
									</div>
								</div>
								<Progress value={18} className="h-1 bg-gray-200" indicatorClassName="bg-purple-600" />
							</div>
							<div className="space-y-2">
								<h4 className="text-sm font-medium text-gray-500">Payment</h4>
								<div className="space-y-1">
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Due Date</span>
										<span className="text-sm font-medium">15 May, 2023</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Min Due</span>
										<span className="text-sm font-medium">₹10,000</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Total Due</span>
										<span className="text-sm font-medium">₹2,00,000</span>
									</div>
								</div>
							</div>
						</div>
					</CardContent>
					<CardFooter className="flex justify-between border-t pt-4">
						<div className="flex items-center gap-2">
							<Button variant="outline" size="sm">
								<Download className="mr-2 h-4 w-4" />
								Statement
							</Button>
							<Button size="sm" className="bg-purple-600 hover:bg-purple-700">
								Pay Bill
							</Button>
						</div>
						<Link href="/dashboard/credit-cards/hdfc-regalia">
							<Button variant="ghost" size="sm" className="gap-1">
								View Details <ArrowUpRight className="h-4 w-4" />
							</Button>
						</Link>
					</CardFooter>
				</Card>

				<Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100 hover:shadow-md transition-shadow overflow-hidden">
					<div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full -translate-x-16 -translate-y-16 opacity-20"></div>
					<CardHeader className="pb-2">
						<div className="flex items-center justify-between">
							<CardTitle className="text-lg">AMEX Platinum</CardTitle>
							<Badge className="bg-green-100 text-green-700 hover:bg-green-200">Active</Badge>
						</div>
						<CardDescription>**** **** **** 7890</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="grid gap-6 md:grid-cols-3">
							<div className="space-y-2">
								<h4 className="text-sm font-medium text-gray-500">Card Details</h4>
								<div className="space-y-1">
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Type</span>
										<span className="text-sm font-medium">American Express</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Expiry</span>
										<span className="text-sm font-medium">08/25</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Status</span>
										<span className="text-sm font-medium text-green-600">Active</span>
									</div>
								</div>
							</div>
							<div className="space-y-2">
								<h4 className="text-sm font-medium text-gray-500">Balance</h4>
								<div className="space-y-1">
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Credit Limit</span>
										<span className="text-sm font-medium">₹9,00,000</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Available</span>
										<span className="text-sm font-medium">₹7,50,000</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Utilized</span>
										<span className="text-sm font-medium">₹1,50,000</span>
									</div>
								</div>
								<Progress value={16} className="h-1 bg-gray-200" indicatorClassName="bg-blue-600" />
							</div>
							<div className="space-y-2">
								<h4 className="text-sm font-medium text-gray-500">Payment</h4>
								<div className="space-y-1">
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Due Date</span>
										<span className="text-sm font-medium">20 May, 2023</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Min Due</span>
										<span className="text-sm font-medium">₹7,500</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Total Due</span>
										<span className="text-sm font-medium">₹1,50,000</span>
									</div>
								</div>
							</div>
						</div>
					</CardContent>
					<CardFooter className="flex justify-between border-t pt-4">
						<div className="flex items-center gap-2">
							<Button variant="outline" size="sm">
								<Download className="mr-2 h-4 w-4" />
								Statement
							</Button>
							<Button size="sm" className="bg-blue-600 hover:bg-blue-700">
								Pay Bill
							</Button>
						</div>
						<Link href="/dashboard/credit-cards/amex-platinum">
							<Button variant="ghost" size="sm" className="gap-1">
								View Details <ArrowUpRight className="h-4 w-4" />
							</Button>
						</Link>
					</CardFooter>
				</Card>

				<Card className="bg-gradient-to-br from-green-50 to-white border-green-100 hover:shadow-md transition-shadow overflow-hidden">
					<div className="absolute top-0 right-0 w-32 h-32 bg-green-200 rounded-full -translate-x-16 -translate-y-16 opacity-20"></div>
					<CardHeader className="pb-2">
						<div className="flex items-center justify-between">
							<CardTitle className="text-lg">SBI Elite</CardTitle>
							<Badge className="bg-green-100 text-green-700 hover:bg-green-200">Active</Badge>
						</div>
						<CardDescription>**** **** **** 1234</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="grid gap-6 md:grid-cols-3">
							<div className="space-y-2">
								<h4 className="text-sm font-medium text-gray-500">Card Details</h4>
								<div className="space-y-1">
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Type</span>
										<span className="text-sm font-medium">Mastercard World</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Expiry</span>
										<span className="text-sm font-medium">11/24</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Status</span>
										<span className="text-sm font-medium text-green-600">Active</span>
									</div>
								</div>
							</div>
							<div className="space-y-2">
								<h4 className="text-sm font-medium text-gray-500">Balance</h4>
								<div className="space-y-1">
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Credit Limit</span>
										<span className="text-sm font-medium">₹5,00,000</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Available</span>
										<span className="text-sm font-medium">₹4,50,000</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Utilized</span>
										<span className="text-sm font-medium">₹50,000</span>
									</div>
								</div>
								<Progress value={10} className="h-1 bg-gray-200" indicatorClassName="bg-green-600" />
							</div>
							<div className="space-y-2">
								<h4 className="text-sm font-medium text-gray-500">Payment</h4>
								<div className="space-y-1">
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Due Date</span>
										<span className="text-sm font-medium">25 May, 2023</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Min Due</span>
										<span className="text-sm font-medium">₹2,500</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">Total Due</span>
										<span className="text-sm font-medium">₹50,000</span>
									</div>
								</div>
							</div>
						</div>
					</CardContent>
					<CardFooter className="flex justify-between border-t pt-4">
						<div className="flex items-center gap-2">
							<Button variant="outline" size="sm">
								<Download className="mr-2 h-4 w-4" />
								Statement
							</Button>
							<Button size="sm" className="bg-green-600 hover:bg-green-700">
								Pay Bill
							</Button>
						</div>
						<Link href="/dashboard/credit-cards/sbi-elite">
							<Button variant="ghost" size="sm" className="gap-1">
								View Details <ArrowUpRight className="h-4 w-4" />
							</Button>
						</Link>
					</CardFooter>
				</Card>
			</div>
		</div>
	)
}
