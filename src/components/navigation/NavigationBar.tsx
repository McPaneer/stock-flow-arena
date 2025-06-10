import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { TrendingUp, User, Bell, Briefcase, PiggyBank, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const NavigationBar = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Dashboard", icon: TrendingUp },
    { path: "/portfolio", label: "Portfolio", icon: Briefcase },
    { path: "/sip", label: "SIP", icon: PiggyBank },
    { path: "/buy-stocks", label: "Buy Stocks", icon: ShoppingCart },
  ];

  return (
    <nav className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <TrendingUp className="h-8 w-8 text-emerald-400" />
            <span className="text-2xl font-bold text-white">TradeFlow</span>
          </Link>
          
          {/* Navigation Items */}
          <div className="flex items-center space-x-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                    isActive
                      ? "bg-emerald-600 text-white"
                      : "text-slate-300 hover:text-white hover:bg-slate-700"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>
          
          {/* Right Actions - Notifications and Profile */}
          <div className="flex items-center space-x-4">
            {/* Notifications Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80 bg-slate-800 border-slate-700">
                <div className="p-2">
                  <h3 className="text-sm font-semibold text-white mb-2">Notifications</h3>
                  <DropdownMenuItem className="text-slate-300 hover:bg-slate-700">
                    <div className="flex flex-col">
                      <span className="text-sm">AAPL stock is up 2.5%</span>
                      <span className="text-xs text-slate-400">2 minutes ago</span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-slate-300 hover:bg-slate-700">
                    <div className="flex flex-col">
                      <span className="text-sm">Your SIP order has been executed</span>
                      <span className="text-xs text-slate-400">1 hour ago</span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-slate-300 hover:bg-slate-700">
                    <div className="flex flex-col">
                      <span className="text-sm">Market opens in 30 minutes</span>
                      <span className="text-xs text-slate-400">30 minutes ago</span>
                    </div>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Profile Link */}
            <Link to="/profile">
              <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
