
import { TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const trendingStocks = [
  { symbol: "AAPL", name: "Apple Inc.", price: "$175.84", change: "+2.34", changePercent: "+1.35%" },
  { symbol: "TSLA", name: "Tesla Inc.", price: "$248.73", change: "-5.67", changePercent: "-2.23%" },
  { symbol: "GOOGL", name: "Alphabet Inc.", price: "$138.21", change: "+1.89", changePercent: "+1.39%" },
  { symbol: "MSFT", name: "Microsoft Corp.", price: "$338.11", change: "+4.56", changePercent: "+1.37%" },
  { symbol: "AMZN", name: "Amazon.com Inc.", price: "$127.74", change: "-1.23", changePercent: "-0.95%" },
];

interface TrendingStocksProps {
  onSelectStock: (symbol: string) => void;
}

export const TrendingStocks = ({ onSelectStock }: TrendingStocksProps) => {
  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white">Trending Stocks</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {trendingStocks.map((stock) => (
          <div 
            key={stock.symbol} 
            className="flex items-center justify-between p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 cursor-pointer transition-colors"
            onClick={() => onSelectStock(stock.symbol)}
          >
            <div>
              <p className="font-semibold text-white">{stock.symbol}</p>
              <p className="text-xs text-slate-400">{stock.name}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-white">{stock.price}</p>
              <div className={`flex items-center space-x-1 ${
                stock.change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'
              }`}>
                {stock.change.startsWith('+') ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                <span className="text-xs">{stock.changePercent}</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
