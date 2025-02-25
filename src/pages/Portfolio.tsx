import React from 'react';
import { PieChart, BarChart, IndianRupee } from 'lucide-react';

const portfolioBreakdown = [
  { category: 'Large Cap Funds', allocation: 40, value: '₹1,00,000', color: 'bg-blue-500' },
  { category: 'Mid Cap Funds', allocation: 30, value: '₹75,000', color: 'bg-green-500' },
  { category: 'Small Cap Funds', allocation: 20, value: '₹50,000', color: 'bg-purple-500' },
  { category: 'Index Funds', allocation: 10, value: '₹25,000', color: 'bg-yellow-500' },
];

export default function Portfolio() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Your Portfolio</h1>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-gray-50">
            <PieChart className="w-5 h-5" />
            View as Chart
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-gray-50">
            <BarChart className="w-5 h-5" />
            View as Table
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-bold mb-6">Portfolio Breakdown</h2>
        <div className="space-y-4">
          {portfolioBreakdown.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className={`w-2 h-12 rounded ${item.color}`} />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-medium">{item.category}</h3>
                  <span className="font-semibold">{item.value}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-gray-100 rounded-full">
                    <div 
                      className={`h-full rounded-full ${item.color}`}
                      style={{ width: `${item.allocation}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-500">{item.allocation}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-[#5c31ef] to-[#4a27c9] rounded-xl p-6 text-white">
          <div className="flex items-center gap-3 mb-4">
            <IndianRupee className="w-6 h-6" />
            <h2 className="text-xl font-bold">SIP Overview</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-white/80 mb-1">Active SIPs</p>
              <p className="text-2xl font-bold">5</p>
            </div>
            <div>
              <p className="text-white/80 mb-1">Monthly Investment</p>
              <p className="text-2xl font-bold">₹25,000</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl p-6 text-white">
          <h2 className="text-xl font-bold mb-4">Goal Progress</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span>Retirement</span>
                <span>60%</span>
              </div>
              <div className="h-2 bg-white/20 rounded-full">
                <div className="h-full bg-white rounded-full" style={{ width: '60%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>House</span>
                <span>45%</span>
              </div>
              <div className="h-2 bg-white/20 rounded-full">
                <div className="h-full bg-white rounded-full" style={{ width: '45%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}