
import { useState } from "react";
import { NavigationBar } from "@/components/navigation/NavigationBar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Search, TrendingUp, TrendingDown } from "lucide-react";

const BuyStocks = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const popularStocks = [
    { symbol: "AAPL", name: "Apple Inc.", price: "$175.43", change: "+2.35%", trending: "up" },
    { symbol: "GOOGL", name: "Alphabet Inc.", price: "$138.21", change: "+1.42%", trending: "up" },
    { symbol: "MSFT", name: "Microsoft Corp.", price: "$338.11", change: "+1.87%", trending: "up" },
    { symbol: "TSLA", name: "Tesla Inc.", price: "$248.79", change: "-1.23%", trending: "down" },
    { symbol: "AMZN", name: "Amazon.com Inc.", price: "$151.94", change: "+0.98%", trending: "up" },
    { symbol: "NVDA", name: "NVIDIA Corp.", price: "$481.86", change: "+3.45%", trending: "up" },
  ];

  const filteredStocks = popularStocks.filter(stock =>
    stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
    stock.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <NavigationBar />
      
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-white mb-2">Buy Stocks</h1>
          <p className="text-slate-400">Discover and invest in your favorite stocks</p>
        </div>
        
        {/* Search Bar */}
        <Card className="bg-slate-800/50 border-slate-700 mb-6">
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input 
                placeholder="Search stocks by symbol or company name..." 
                className="pl-10 bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Stock List */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2">
              <ShoppingCart className="h-5 w-5" />
              <span>Available Stocks</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {filteredStocks.map((stock) => (
              <div key={stock.symbol} className="flex items-center justify-between p-4 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{stock.symbol.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{stock.symbol}</h3>
                    <p className="text-sm text-slate-400">{stock.name}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="text-right">
                    <p className="text-lg font-bold text-white">{stock.price}</p>
                    <div className={`flex items-center space-x-1 text-sm ${
                      stock.trending === "up" ? "text-emerald-400" : "text-red-400"
                    }`}>
                      {stock.trending === "up" ? (
                        <TrendingUp className="h-3 w-3" />
                      ) : (
                        <TrendingDown className="h-3 w-3" />
                      )}
                      <span>{stock.change}</span>
                    </div>
                  </div>
                  
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    Buy
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BuyStocks;
