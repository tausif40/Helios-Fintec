import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
	return (
		<div className="flex flex-col">
			{/* Hero Section */}
			<section className="w-full min-h-screen py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-50 to-blue-50">
				<div className="container px-4 md:px-6">
					<div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
						<div className="space-y-4">
							<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
								Your Financial Journey Simplified
							</h1>
							<p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Manage all your investments, loans, insurance, and credit cards in one place. Get personalized insights
								and make smarter financial decisions.
							</p>
							<div className="flex flex-col gap-2 min-[400px]:flex-row">
								<Link href="/register">
									<Button size="lg"
										className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
									>
										Get Started <ArrowRight className="ml-2 h-4 w-4" />
									</Button>
								</Link>
								{/* <Link href="/dashboard/demo">
									<Button size="lg" variant="outline">
										View Demo
									</Button>
								</Link> */}
							</div>
						</div>
						<div className="mx-auto lg:mx-0 relative">
							<div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
							<div className="absolute -bottom-8 right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
							<div className="absolute -bottom-8 -left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>
							<div className="relative shadow-2xl rounded-2xl overflow-hidden border border-gray-200">
								<img
									src="/placeholder.svg?height=600&width=800"
									alt="Dashboard Preview"
									width={600}
									height={400}
									className="w-full h-auto object-cover rounded-2xl"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600">Features</div>
							<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
								Everything you need to manage your finances
							</h2>
							<p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Our platform provides a comprehensive suite of tools to help you manage your financial life.
							</p>
						</div>
					</div>
					<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
						<div className="grid gap-1 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
							<div className="flex items-center gap-2 text-purple-600">
								<CheckCircle2 className="h-5 w-5" />
								<h3 className="text-lg font-bold">Investment Tracking</h3>
							</div>
							<p className="text-sm text-gray-500">
								Track all your investments in one place with real-time updates and performance analytics.
							</p>
						</div>
						<div className="grid gap-1 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
							<div className="flex items-center gap-2 text-blue-600">
								<CheckCircle2 className="h-5 w-5" />
								<h3 className="text-lg font-bold">Loan Management</h3>
							</div>
							<p className="text-sm text-gray-500">
								Manage all your loans, track EMIs, and get insights on how to optimize your repayments.
							</p>
						</div>
						<div className="grid gap-1 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
							<div className="flex items-center gap-2 text-pink-600">
								<CheckCircle2 className="h-5 w-5" />
								<h3 className="text-lg font-bold">Insurance Dashboard</h3>
							</div>
							<p className="text-sm text-gray-500">
								Keep track of all your insurance policies, premiums, and coverage details in one place.
							</p>
						</div>
						<div className="grid gap-1 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
							<div className="flex items-center gap-2 text-green-600">
								<CheckCircle2 className="h-5 w-5" />
								<h3 className="text-lg font-bold">Credit Card Analytics</h3>
							</div>
							<p className="text-sm text-gray-500">
								Analyze your spending patterns and get recommendations to optimize your credit card usage.
							</p>
						</div>
						<div className="grid gap-1 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
							<div className="flex items-center gap-2 text-orange-600">
								<CheckCircle2 className="h-5 w-5" />
								<h3 className="text-lg font-bold">Robo Advisory</h3>
							</div>
							<p className="text-sm text-gray-500">
								Get personalized investment advice based on your financial goals and risk profile.
							</p>
						</div>
						<div className="grid gap-1 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
							<div className="flex items-center gap-2 text-teal-600">
								<CheckCircle2 className="h-5 w-5" />
								<h3 className="text-lg font-bold">Financial Planning</h3>
							</div>
							<p className="text-sm text-gray-500">
								Plan for your future with our comprehensive financial planning tools and calculators.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
								Ready to take control of your finances?
							</h2>
							<p className="max-w-[600px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Join thousands of users who are already managing their finances with Helios Fintec.
							</p>
						</div>
						<div className="flex flex-col gap-2 min-[400px]:flex-row">
							<Link href="/register">
								<Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
									Create Account
								</Button>
							</Link>
							<Link href="/login">
								<Button size="lg" variant="outline" className="border-white text-muted-foreground hover:bg-white/10">
									Login
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</section>


		</div>
	)
}
