import React from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"

function HomeNav() {
	return (
		<header className="border-b bg-white fixed w-full top-0">
			<div className="container flex h-16 items-center justify-between px-4 md:px-6">
				<Link href="/" className="flex items-center gap-2">
					<div className="font-bold text-2xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
						Helios Fintec
					</div>
				</Link>
				<div className="flex items-center gap-4">
					<Link href="/login">
						<Button variant="outline">Login</Button>
					</Link>
					<Link href="/register">
						<Button>Register</Button>
					</Link>
				</div>
			</div>
		</header>
	)
}

export default HomeNav