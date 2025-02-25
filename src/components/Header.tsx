import React from 'react';
import { Menu, Search, Bell } from 'lucide-react';

interface HeaderProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Header({ isOpen, setIsOpen }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-4">
          <Menu className="w-6 h-6 cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search mutual funds..."
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-[#5c31ef] w-96"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Bell className="w-6 h-6 cursor-pointer" />
          <div className="w-10 h-10 rounded-full bg-[#5c31ef] text-white flex items-center justify-center">
            N
          </div>
        </div>
      </div>
    </header>
  );
}