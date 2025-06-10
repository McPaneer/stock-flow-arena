
import { Plus, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const watchlistStocks = [
  { symbol: "NVDA", price: "$421.27", change: "+2.15%" },
  { symbol: "META", price: "$312.85", change: "-0.87%" },
  { symbol: "NFLX", price: "$398.67", change: "+1.23%" },
];

export const WatchList = () => {
  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-white flex items-center space-x-2">
            <Star className="h-5 w-5" />
            <span>Watchlist</span>
          </CardTitle>
          <Button size="sm" variant="ghost" className="text-slate-300 hover:text-white">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {watchlistStocks.map((stock) => (
          <div key={stock.symbol} className="flex items-center justify-between p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 cursor-pointer transition-colors">
            <div>
              <p className="font-semibold text-white">{stock.symbol}</p>
              <p className="text-sm text-white">{stock.price}</p>
            </div>
            <p className={`text-sm font-medium ${
              stock.change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'
            }`}>
              {stock.change}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
