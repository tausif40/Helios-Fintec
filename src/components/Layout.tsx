import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex-1 overflow-auto">
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}