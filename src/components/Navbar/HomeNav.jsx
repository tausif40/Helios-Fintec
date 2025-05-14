import React from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"

function HomeNav() {
	return (
		<header className="border-b bg-white sticky top-0 z-10">
			<div className="container flex h-16 items-center justify-between px-4 md:px-6">
				<Link href="/" className="flex items-center gap-2">
					<div className="font-bold text-2xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
						MetroFintech
					</div>
				</Link>
				<div className="hidden md:flex items-center gap-6">
					<Link href="#" className="text-sm font-medium hover:text-purple-600 transition-colors">
						Investments
					</Link>
					<Link href="#" className="text-sm font-medium hover:text-purple-600 transition-colors">
						Insurance
					</Link>
					<Link href="#" className="text-sm font-medium hover:text-purple-600 transition-colors">
						Loans
					</Link>
					<Link href="#" className="text-sm font-medium hover:text-purple-600 transition-colors">
						Credit Cards
					</Link>
					<Link href="#" className="text-sm font-medium hover:text-purple-600 transition-colors">
						Resources
					</Link>
				</div>
				<div className="flex items-center gap-4">
					<Link href="/login">
						<Button variant="outline">Login</Button>
					</Link>
					<Link href="/register" className="hidden md:block">
						<Button>Register</Button>
					</Link>
				</div>
			</div>
		</header>
	)
}

export default HomeNav