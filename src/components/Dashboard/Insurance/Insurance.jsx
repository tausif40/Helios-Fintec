import Link from "next/link"
import { ArrowUpRight, Download, Plus, Filter, Search, SlidersHorizontal, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function InsurancePage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Insurance</h2>
          <p className="text-muted-foreground">Manage your insurance policies and track coverage.</p>
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
            Add Policy
          </Button>
        </div>
      </div>

      {/* Insurance Summary */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Policies</CardTitle>
            <div className="rounded-full bg-purple-100 p-1">
              <Shield className="h-4 w-4 text-purple-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <div className="text-xs text-gray-500">Life, Health, Car, Home & Travel</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Annual Premium</CardTitle>
            <div className="rounded-full bg-blue-100 p-1">
              <Shield className="h-4 w-4 text-blue-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹1,45,000</div>
            <div className="text-xs text-gray-500">Next payment: 15 Jun, 2023</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-50 to-white border-green-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Coverage</CardTitle>
            <div className="rounded-full bg-green-100 p-1">
              <Shield className="h-4 w-4 text-green-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹1,37,50,000</div>
            <div className="text-xs text-gray-500">Across all policies</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-orange-50 to-white border-orange-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Claims History</CardTitle>
            <div className="rounded-full bg-orange-100 p-1">
              <Shield className="h-4 w-4 text-orange-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <div className="text-xs text-gray-500">1 Approved, 1 In Progress</div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input placeholder="Search policies..." className="pl-9" />
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

      {/* Insurance Categories */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Policies</TabsTrigger>
          <TabsTrigger value="life">Life</TabsTrigger>
          <TabsTrigger value="health">Health</TabsTrigger>
          <TabsTrigger value="vehicle">Vehicle</TabsTrigger>
          <TabsTrigger value="others">Others</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {/* Life Insurance */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Life Insurance</h3>
              <Link href="/dashboard/insurance/life">
                <Button variant="ghost" size="sm" className="gap-1">
                  View All <ArrowUpRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-100 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">LIC Jeevan Anand</CardTitle>
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-200">Active</Badge>
                  </div>
                  <CardDescription>Life Insurance Corporation</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Sum Assured</span>
                      <span className="font-medium">₹1,00,00,000</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Premium</span>
                      <span className="font-medium">₹60,000 (Annual)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Next Premium</span>
                      <span className="font-medium">15 Jun, 2023</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Policy Term</span>
                      <span className="font-medium">30 years</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-2 flex justify-between">
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Policy
                  </Button>
                  <Link href="/dashboard/insurance/life/lic-jeevan-anand">
                    <Button variant="ghost" size="sm" className="gap-1">
                      Details <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>

          {/* Health Insurance */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Health Insurance</h3>
              <Link href="/dashboard/insurance/health">
                <Button variant="ghost" size="sm" className="gap-1">
                  View All <ArrowUpRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Star Health Family Plan</CardTitle>
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-200">Active</Badge>
                  </div>
                  <CardDescription>Star Health Insurance</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Sum Insured</span>
                      <span className="font-medium">₹25,00,000</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Premium</span>
                      <span className="font-medium">₹35,000 (Annual)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Members Covered</span>
                      <span className="font-medium">4 (Family)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Expiry Date</span>
                      <span className="font-medium">15 Dec, 2023</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-2 flex justify-between">
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Policy
                  </Button>
                  <Link href="/dashboard/insurance/health/star-health">
                    <Button variant="ghost" size="sm" className="gap-1">
                      Details <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>

          {/* Vehicle Insurance */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Vehicle Insurance</h3>
              <Link href="/dashboard/insurance/vehicle">
                <Button variant="ghost" size="sm" className="gap-1">
                  View All <ArrowUpRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-gradient-to-br from-green-50 to-white border-green-100 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Car Insurance</CardTitle>
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-200">Active</Badge>
                  </div>
                  <CardDescription>HDFC ERGO</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">IDV</span>
                      <span className="font-medium">₹12,50,000</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Premium</span>
                      <span className="font-medium">₹25,000 (Annual)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Vehicle</span>
                      <span className="font-medium">Audi A4</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Expiry Date</span>
                      <span className="font-medium">10 Aug, 2023</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-2 flex justify-between">
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Policy
                  </Button>
                  <Link href="/dashboard/insurance/vehicle/car">
                    <Button variant="ghost" size="sm" className="gap-1">
                      Details <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Other tabs would have filtered content */}
        <TabsContent value="life" className="space-y-4">
          {/* Life Insurance content */}
        </TabsContent>
      </Tabs>
    </div>
  )
}
