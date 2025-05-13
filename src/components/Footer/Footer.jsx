import React from 'react'
import Link from "next/link"

function Footer() {
	return (
		<footer className="border-t bg-white">
			<div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12 px-4 md:px-6">
				<div className="flex-1 space-y-4">
					<div className="font-bold text-xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
						Helios Fintec
					</div>
					<p className="text-sm text-gray-500">Your complete financial management platform.</p>
				</div>
				<div className="flex flex-col md:flex-row gap-8 md:gap-12">
					<div className="space-y-2">
						<h4 className="font-medium text-sm">Company</h4>
						<ul className="grid gap-2 text-sm">
							<li>
								<Link href="#" className="text-gray-500 hover:text-gray-900">
									About
								</Link>
							</li>
							<li>
								<Link href="#" className="text-gray-500 hover:text-gray-900">
									Careers
								</Link>
							</li>
							<li>
								<Link href="#" className="text-gray-500 hover:text-gray-900">
									Contact
								</Link>
							</li>
						</ul>
					</div>
					<div className="space-y-2">
						<h4 className="font-medium text-sm">Products</h4>
						<ul className="grid gap-2 text-sm">
							<li>
								<Link href="#" className="text-gray-500 hover:text-gray-900">
									Investments
								</Link>
							</li>
							<li>
								<Link href="#" className="text-gray-500 hover:text-gray-900">
									Loans
								</Link>
							</li>
							<li>
								<Link href="#" className="text-gray-500 hover:text-gray-900">
									Insurance
								</Link>
							</li>
						</ul>
					</div>
					<div className="space-y-2">
						<h4 className="font-medium text-sm">Resources</h4>
						<ul className="grid gap-2 text-sm">
							<li>
								<Link href="#" className="text-gray-500 hover:text-gray-900">
									Blog
								</Link>
							</li>
							<li>
								<Link href="#" className="text-gray-500 hover:text-gray-900">
									Support
								</Link>
							</li>
							<li>
								<Link href="#" className="text-gray-500 hover:text-gray-900">
									Documentation
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="border-t py-6 text-center text-sm text-gray-500">
				<div className="container px-4 md:px-6">© {new Date().getFullYear()} Helios Fintec. All rights reserved.</div>
			</div>
		</footer>
	)
}

export default Footer