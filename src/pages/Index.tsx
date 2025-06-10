
import { useState } from "react";
import { NavigationBar } from "@/components/navigation/NavigationBar";
import { MarketOverview } from "@/components/trading/MarketOverview";
import { TrendingStocks } from "@/components/trading/TrendingStocks";
import { Portfolio } from "@/components/trading/Portfolio";
import { StockChart } from "@/components/trading/StockChart";
import { WatchList } from "@/components/trading/WatchList";

const Index = () => {
  const [selectedStock, setSelectedStock] = useState("AAPL");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <NavigationBar />
      
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column - Market Overview & Trending */}
          <div className="lg:col-span-3 space-y-6">
            <MarketOverview />
            <TrendingStocks onSelectStock={setSelectedStock} />
            <WatchList />
          </div>
          
          {/* Center Column - Main Chart */}
          <div className="lg:col-span-6">
            <StockChart selectedStock={selectedStock} />
          </div>
          
          {/* Right Column - Portfolio */}
          <div className="lg:col-span-3">
            <Portfolio />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
