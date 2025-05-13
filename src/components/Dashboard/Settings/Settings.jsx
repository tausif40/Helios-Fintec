import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Settings() {
	return (
		<div className="space-y-8">
			<div>
				<h2 className="text-3xl font-bold tracking-tight">Settings</h2>
				<p className="text-muted-foreground">Manage your account settings and preferences.</p>
			</div>

			<Tabs defaultValue="profile" className="space-y-4">
				<TabsList>
					<TabsTrigger value="profile">Profile</TabsTrigger>
					{/* <TabsTrigger value="account">Account</TabsTrigger> */}
					<TabsTrigger value="notifications">Notifications</TabsTrigger>
					{/* <TabsTrigger value="security">Security</TabsTrigger> */}
				</TabsList>

				<TabsContent value="profile" className="space-y-4">
					<Card>
						<CardHeader>
							<CardTitle>Profile Information</CardTitle>
							<CardDescription>Update your personal information and profile picture.</CardDescription>
						</CardHeader>
						<CardContent className="space-y-6">
							<div className="flex flex-col gap-6 md:flex-row">
								<div className="flex flex-col items-center gap-4">
									<Avatar className="h-24 w-24">
										<AvatarImage src="/placeholder.svg?height=96&width=96" alt="User" />
										<AvatarFallback className="text-lg">JD</AvatarFallback>
									</Avatar>
									<Button variant="outline" size="sm">
										Change Photo
									</Button>
								</div>
								<div className="flex-1 space-y-4">
									<div className="grid gap-4 md:grid-cols-2">
										<div className="space-y-2">
											<Label htmlFor="firstName">First Name</Label>
											<Input id="firstName" defaultValue="John" />
										</div>
										<div className="space-y-2">
											<Label htmlFor="lastName">Last Name</Label>
											<Input id="lastName" defaultValue="Doe" />
										</div>
									</div>
									<div className="space-y-2">
										<Label htmlFor="email">Email</Label>
										<Input id="email" type="email" defaultValue="john.doe@example.com" />
									</div>
									<div className="space-y-2">
										<Label htmlFor="phone">Phone Number</Label>
										<Input id="phone" type="tel" defaultValue="+91 9876543210" />
									</div>
								</div>
							</div>
						</CardContent>
						<CardFooter className="flex justify-end">
							<Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
								Save Changes
							</Button>
						</CardFooter>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Address Information</CardTitle>
							<CardDescription>Update your address and location details.</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="space-y-2">
								<Label htmlFor="address">Street Address</Label>
								<Input id="address" defaultValue="123 Main Street" />
							</div>
							<div className="grid gap-4 md:grid-cols-3">
								<div className="space-y-2">
									<Label htmlFor="city">City</Label>
									<Input id="city" defaultValue="Mumbai" />
								</div>
								<div className="space-y-2">
									<Label htmlFor="state">State</Label>
									<Input id="state" defaultValue="Maharashtra" />
								</div>
								<div className="space-y-2">
									<Label htmlFor="pincode">Pincode</Label>
									<Input id="pincode" defaultValue="400001" />
								</div>
							</div>
						</CardContent>
						<CardFooter className="flex justify-end">
							<Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
								Save Changes
							</Button>
						</CardFooter>
					</Card>
				</TabsContent>

				<TabsContent value="account" className="space-y-4">
					<Card>
						<CardHeader>
							<CardTitle>Account Preferences</CardTitle>
							<CardDescription>Manage your account settings and preferences.</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="space-y-4">
								<div className="flex items-center justify-between">
									<div className="space-y-0.5">
										<Label className="text-base">Language</Label>
										<p className="text-sm text-muted-foreground">Select your preferred language.</p>
									</div>
									<div className="w-[180px]">
										<select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
											<option>English</option>
											<option>Hindi</option>
											<option>Marathi</option>
											<option>Tamil</option>
										</select>
									</div>
								</div>
								<Separator />
								<div className="flex items-center justify-between">
									<div className="space-y-0.5">
										<Label className="text-base">Currency</Label>
										<p className="text-sm text-muted-foreground">Select your preferred currency.</p>
									</div>
									<div className="w-[180px]">
										<select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
											<option>INR (₹)</option>
											<option>USD ($)</option>
											<option>EUR (€)</option>
											<option>GBP (£)</option>
										</select>
									</div>
								</div>
								<Separator />
								<div className="flex items-center justify-between">
									<div className="space-y-0.5">
										<Label className="text-base">Date Format</Label>
										<p className="text-sm text-muted-foreground">Select your preferred date format.</p>
									</div>
									<div className="w-[180px]">
										<select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
											<option>DD/MM/YYYY</option>
											<option>MM/DD/YYYY</option>
											<option>YYYY/MM/DD</option>
										</select>
									</div>
								</div>
							</div>
						</CardContent>
						<CardFooter className="flex justify-end">
							<Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
								Save Changes
							</Button>
						</CardFooter>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Linked Accounts</CardTitle>
							<CardDescription>Connect your accounts for a better experience.</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="space-y-4">
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-4">
										<div className="rounded-full bg-gray-100 p-2">
											<svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M12 0C5.372 0 0 5.373 0 12C0 18.627 5.372 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0Z" fill="#3B5998" />
												<path d="M14.7 12.6H13V20H10V12.6H8.5V10H10V8.3C10 7.1 10.6 5 13.1 5H15.5V7.5H13.7C13.4 7.5 13 7.7 13 8.3V10H15.5L14.7 12.6Z" fill="white" />
											</svg>
										</div>
										<div>
											<h4 className="text-sm font-medium">Facebook</h4>
											<p className="text-xs text-muted-foreground">Connect your Facebook account</p>
										</div>
									</div>
									<Button variant="outline" size="sm">
										Connect
									</Button>
								</div>
								<Separator />
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-4">
										<div className="rounded-full bg-gray-100 p-2">
											<svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M12 0C5.372 0 0 5.373 0 12C0 18.627 5.372 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0Z" fill="#1DA1F2" />
												<path d="M19.5 7.5C19 7.8 18.5 7.9 17.9 8C18.5 7.7 18.9 7.2 19.1 6.5C18.5 6.8 17.9 7.1 17.3 7.2C16.7 6.7 16 6.5 15.2 6.5C13.6 6.5 12.2 7.9 12.2 9.5C12.2 9.8 12.3 10 12.3 10.2C9.9 10.1 7.7 8.8 6.3 7C6 7.5 5.8 8 5.8 8.6C5.8 9.7 6.4 10.7 7.2 11.2C6.7 11.2 6.2 11 5.8 10.8C5.8 12.2 6.9 13.3 8.2 13.6C7.9 13.7 7.7 13.7 7.4 13.7C7.2 13.7 7 13.7 6.8 13.6C7.2 14.7 8.2 15.5 9.5 15.5C8.5 16.2 7.3 16.7 6 16.7C5.7 16.7 5.5 16.7 5.2 16.6C6.5 17.4 8 18 9.6 18C15.2 18 18.2 13.7 18.2 10C18.2 9.9 18.2 9.7 18.2 9.6C18.9 9.2 19.3 8.8 19.5 8.3V7.5Z" fill="white" />
											</svg>
										</div>
										<div>
											<h4 className="text-sm font-medium">Twitter</h4>
											<p className="text-xs text-muted-foreground">Connect your Twitter account</p>
										</div>
									</div>
									<Button variant="outline" size="sm">
										Connect
									</Button>
								</div>
								<Separator />
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-4">
										<div className="rounded-full bg-gray-100 p-2">
											<svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M12 0C5.372 0 0 5.373 0 12C0 18.627 5.372 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0Z" fill="#DB4437" />
												<path d="M19.5 12.2C19.5 11.5 19.4 10.8 19.3 10.2H12V13.2H16.2C16 14.2 15.4 15 14.5 15.6V17.6H17.2C18.7 16.2 19.5 14.4 19.5 12.2Z" fill="white" />
												<path d="M12 19.5C14.2 19.5 16.1 18.8 17.2 17.6L14.5 15.6C13.8 16.1 13 16.3 12 16.3C10 16.3 8.3 14.9 7.7 13H4.9V15.1C6 17.7 8.8 19.5 12 19.5Z" fill="white" />
												<path d="M7.7 13C7.5 12.5 7.4 11.8 7.4 11.2C7.4 10.6 7.5 9.9 7.7 9.4V7.3H4.9C4.3 8.5 4 9.8 4 11.2C4 12.6 4.3 13.9 4.9 15.1L7.7 13Z" fill="white" />
												<path d="M12 6.1C13.3 6.1 14.4 6.5 15.3 7.4L17.7 5C16.1 3.5 14.2 2.7 12 2.7C8.8 2.7 6 4.5 4.9 7.3L7.7 9.4C8.3 7.5 10 6.1 12 6.1Z" fill="white" />
											</svg>
										</div>
										<div>
											<h4 className="text-sm font-medium">Google</h4>
											<p className="text-xs text-muted-foreground">Connect your Google account</p>
										</div>
									</div>
									<Button variant="outline" size="sm">
										Connect
									</Button>
								</div>
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="notifications" className="space-y-4">
					<Card>
						<CardHeader>
							<CardTitle>Notification Preferences</CardTitle>
							<CardDescription>Manage how you receive notifications.</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="space-y-4">
								<div className="flex items-center justify-between">
									<div className="space-y-0.5">
										<Label className="text-base">Email Notifications</Label>
										<p className="text-sm text-muted-foreground">Receive notifications via email.</p>
									</div>
									<Switch defaultChecked />
								</div>
								<Separator />
								<div className="flex items-center justify-between">
									<div className="space-y-0.5">
										<Label className="text-base">SMS Notifications</Label>
										<p className="text-sm text-muted-foreground">Receive notifications via SMS.</p>
									</div>
									<Switch defaultChecked />
								</div>
								<Separator />
								<div className="flex items-center justify-between">
									<div className="space-y-0.5">
										<Label className="text-base">Push Notifications</Label>
										<p className="text-sm text-muted-foreground">Receive notifications on your device.</p>
									</div>
									<Switch defaultChecked />
								</div>
							</div>
						</CardContent>
						<CardFooter className="flex justify-end">
							<Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
								Save Changes
							</Button>
						</CardFooter>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Notification Types</CardTitle>
							<CardDescription>Select the types of notifications you want to receive.</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="space-y-4">
								<div className="flex items-center justify-between">
									<div className="space-y-0.5">
										<Label className="text-base">Account Updates</Label>
										<p className="text-sm text-muted-foreground">Notifications about your account activity.</p>
									</div>
									<Switch defaultChecked />
								</div>
								<Separator />
								<div className="flex items-center justify-between">
									<div className="space-y-0.5">
										<Label className="text-base">Transaction Alerts</Label>
										<p className="text-sm text-muted-foreground">Notifications about your transactions.</p>
									</div>
									<Switch defaultChecked />
								</div>
								<Separator />
								<div className="flex items-center justify-between">
									<div className="space-y-0.5">
										<Label className="text-base">Investment Updates</Label>
										<p className="text-sm text-muted-foreground">Notifications about your investments.</p>
									</div>
									<Switch defaultChecked />
								</div>
								<Separator />
								<div className="flex items-center justify-between">
									<div className="space-y-0.5">
										<Label className="text-base">Marketing & Promotions</Label>
										<p className="text-sm text-muted-foreground">Notifications about offers and promotions.</p>
									</div>
									<Switch />
								</div>
							</div>
						</CardContent>
						<CardFooter className="flex justify-end">
							<Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">Save Changes</Button >
						</CardFooter>
					</Card>

				</TabsContent>

			</Tabs>
		</div>
	)
}