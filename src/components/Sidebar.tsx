import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Wallet,
  PieChart,
  History,
  Settings,
  HelpCircle,
  ChevronLeft,
  HandCoins,
  ShieldCheck
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const sidebarItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { id: 'portfolio', icon: Wallet, label: 'Portfolio', path: '/portfolio' },
    { id: 'investments', icon: PieChart, label: 'Investments', path: '/investments' },
    { id: 'loan', icon: HandCoins, label: 'Loan', path: '/loan' },
    { id: 'insurance', icon: ShieldCheck, label: 'Insurance', path: '/insurance' },
    { id: 'transactions', icon: History, label: 'Transactions', path: '/transactions' },
    { id: 'settings', icon: Settings, label: 'Settings', path: '/settings' },
    { id: 'help', icon: HelpCircle, label: 'Help', path: '/help' },
  ];

  return (
    <div className={`bg-white h-full shadow-lg transition-all duration-300 ease-in-out ${isOpen ? 'w-64' : 'w-20'
      } relative`}>
      <div className="flex items-center p-4 border-b h-[74px]">
        {isOpen && (
          <span className="text-2xl font-bold text-[#5c31ef]">Helios Fintec</span>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`absolute ${isOpen ? 'right-4' : 'right-0'} top-6`}
        >
          <ChevronLeft className={`transform transition-transform ${!isOpen && 'rotate-180'}`} />
        </button>
      </div>

      <nav className="mt-8">
        {sidebarItems.map((item) => (
          <div
            key={item.id}
            className={`relative flex items-center px-4 py-3 cursor-pointer
              ${location.pathname === item.path ? 'bg-[#5c31ef] text-white' : 'hover:bg-gray-50'}
              group`}
            onClick={() => navigate(item.path)}
          >
            <item.icon className="w-6 h-6" />
            <span className={`ml-4 ${!isOpen && 'hidden'}`}>{item.label}</span>
            {!isOpen && (
              <div className="absolute left-20 bg-white px-4 py-2 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50">
                {item.label}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}