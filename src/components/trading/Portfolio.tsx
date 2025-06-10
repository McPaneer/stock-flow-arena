
import { DollarSign, TrendingUp, PieChart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const portfolioData = {
  totalValue: "$48,573.29",
  dayChange: "+$1,234.56",
  dayChangePercent: "+2.61%",
  holdings: [
    { symbol: "AAPL", shares: 50, value: "$8,792.00", change: "+1.35%" },
    { symbol: "GOOGL", shares: 25, value: "$3,455.25", change: "+1.39%" },
    { symbol: "MSFT", shares: 30, value: "$10,143.30", change: "+1.37%" },
    { symbol: "TSLA", shares: 15, value: "$3,730.95", change: "-2.23%" },
  ]
};

export const Portfolio = () => {
  return (
    <div className="space-y-6">
      {/* Portfolio Summary */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <PieChart className="h-5 w-5" />
            <span>Portfolio</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-2xl font-bold text-white">{portfolioData.totalValue}</p>
            <div className="flex items-center space-x-2 text-emerald-400">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm">{portfolioData.dayChange} ({portfolioData.dayChangePercent})</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 pt-4">
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              Buy
            </Button>
            <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-700">
              Sell
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Holdings */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Holdings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {portfolioData.holdings.map((holding) => (
            <div key={holding.symbol} className="flex items-center justify-between p-3 rounded-lg bg-slate-700/30">
              <div>
                <p className="font-semibold text-white">{holding.symbol}</p>
                <p className="text-xs text-slate-400">{holding.shares} shares</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-white">{holding.value}</p>
                <p className={`text-xs ${
                  holding.change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'
                }`}>
                  {holding.change}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
