import React from 'react';
import { ArrowUpRight, ArrowDownRight, TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const portfolioStats = [
  { label: 'Total Investment', value: '₹2,50,000', trend: 'up', change: '+12.5%', color: 'bg-gradient-to-br from-purple-500 to-indigo-600' },
  { label: 'Current Value', value: '₹2,85,000', trend: 'up', change: '+14.0%', color: 'bg-gradient-to-br from-blue-500 to-cyan-600' },
  { label: 'Total Returns', value: '₹35,000', trend: 'up', change: '+14.0%', color: 'bg-gradient-to-br from-emerald-500 to-teal-600' },
  { label: 'XIRR', value: '15.2%', trend: 'down', change: '-2.3%', color: 'bg-gradient-to-br from-rose-500 to-pink-600' },
];

const topFunds = [
  { name: 'Axis Bluechip Fund', value: '₹75,000', returns: '+18.5%', category: 'Large Cap' },
  { name: 'HDFC Mid-Cap Opportunities', value: '₹62,000', returns: '+15.2%', category: 'Mid Cap' },
  { name: 'SBI Small Cap Fund', value: '₹45,000', returns: '+21.3%', category: 'Small Cap' },
  { name: 'Mirae Asset Emerging Bluechip', value: '₹55,000', returns: '+19.8%', category: 'Large & Mid Cap' },
];

const monthlyStats = [
  { month: 'Jan', name: 30 },
  { month: 'Feb', name: 116 },
  { month: 'Mar', name: 45 },
  { month: 'Apr', name: 125 },
  { month: 'May', name: 40 },
  { month: 'Jun', name: 90 },
  { month: 'Jul', name: 40 },
  { month: 'Aug', name: 60 },
  { month: 'Sep', name: 80 },
  { month: 'Oct', name: 132 },
  { month: 'Nov', name: 280 },
  { month: 'Dec', name: 125 },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Welcome back, Nishant! 👋</h1>
        <button className="bg-[#5c31ef] text-white px-6 py-2 rounded-lg hover:bg-[#4a27c9] transition-colors">
          Invest Now
        </button>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {portfolioStats.map((stat, index) => (
          <div key={index} className={`rounded-xl p-6 text-white ${stat.color}`}>
            <h3 className="text-white/80 mb-2">{stat.label}</h3>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">{stat.value}</span>
              <div className={`flex items-center ${stat.trend === 'up' ? 'text-green-200' : 'text-red-200'
                }`}>
                {stat.trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                <span className="ml-1">{stat.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-white rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Portfolio Distribution</h2>
            <select className="border rounded-lg px-3 py-1.5 text-sm">
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
              <option>Last Year</option>
            </select>
          </div>
          <div className="h-80 flex items-center justify-center text-gray-400 mt-6">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyStats} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="name" fill="#3b82f6" barSize={20} activeBar={{ fill: "#3b82f6" }} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Top Performing Funds</h2>
            <TrendingUp className="text-green-500" />
          </div>
          <div className="space-y-4">
            {topFunds.map((fund, index) => (
              <div key={index} className="p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-medium">{fund.name}</h3>
                  <span className="text-green-500 font-semibold">{fund.returns}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{fund.value}</span>
                  <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-600">{fund.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}