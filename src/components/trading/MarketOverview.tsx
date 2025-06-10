
import { TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const marketData = [
  { name: "S&P 500", value: "4,185.47", change: "+12.34", changePercent: "+0.30%" },
  { name: "NASDAQ", value: "12,888.28", change: "-45.67", changePercent: "-0.35%" },
  { name: "DOW", value: "33,745.69", change: "+89.12", changePercent: "+0.26%" },
];

export const MarketOverview = () => {
  return (
    <Card className="bg-slate-800/50 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white">Market Overview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {marketData.map((market) => (
          <div key={market.name} className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-300">{market.name}</p>
              <p className="text-lg font-semibold text-white">{market.value}</p>
            </div>
            <div className="text-right">
              <div className={`flex items-center space-x-1 ${
                market.change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'
              }`}>
                {market.change.startsWith('+') ? (
                  <TrendingUp className="h-4 w-4" />
                ) : (
                  <TrendingDown className="h-4 w-4" />
                )}
                <span className="text-sm font-medium">{market.change}</span>
              </div>
              <p className={`text-xs ${
                market.change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'
              }`}>
                {market.changePercent}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
