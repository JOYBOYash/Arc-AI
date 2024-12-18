import React from "react";
import { Home, LayoutDashboard, Zap } from "lucide-react";

function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center bg-green-200/10 backdrop-blur-md border border-green-400/70 rounded-full px-6 py-3 shadow-lg">
        {/* Logo */}
        <div className="flex items-center mr-16">
          <Zap className="w-6 h-6 text-green-500" />
          <h1 className="font-bold text-2xl ml-2 bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent">
            Arc<span className="text-2xl  text-white/70 opacity-80">.ai</span>
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-1 bg-black/20 rounded-full px-1 py-1">
          <a
            href="/pages/dashboard"
            className="flex items-center hover:scale-105 space-x-2 text-sm text-white/90 px-4 hover:bg-gradient-to-r from-green-500 to-green-700 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Dashboard</span>
          </a>
          <a
            href="/pages/dashboard"
            className="flex items-center hover:scale-105 space-x-2 text-sm text-white/90 px-4 py-2 hover:bg-gradient-to-r from-green-500 to-green-700 rounded-full hover:bg-white/10 transition-all duration-200"
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
