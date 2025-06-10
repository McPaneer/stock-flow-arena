
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, TrendingDown } from "lucide-react";

// Mock data for different stocks
const stockData = {
  AAPL: {
    price: "$175.84",
    change: "+$2.34",
    changePercent: "+1.35%",
    data: [
      { time: "9:30", price: 173.5 },
      { time: "10:00", price: 174.2 },
      { time: "10:30", price: 173.8 },
      { time: "11:00", price: 175.1 },
      { time: "11:30", price: 174.9 },
      { time: "12:00", price: 175.4 },
      { time: "12:30", price: 175.8 },
    ]
  },
  TSLA: {
    price: "$248.73",
    change: "-$5.67",
    changePercent: "-2.23%",
    data: [
      { time: "9:30", price: 254.4 },
      { time: "10:00", price: 252.1 },
      { time: "10:30", price: 250.8 },
      { time: "11:00", price: 249.5 },
      { time: "11:30", price: 248.2 },
      { time: "12:00", price: 249.1 },
      { time: "12:30", price: 248.7 },
    ]
  }
};

interface StockChartProps {
  selectedStock: string;
}

export const StockChart = ({ selectedStock }: StockChartProps) => {
  const [timeframe, setTimeframe] = useState("1D");
  const stock = stockData[selectedStock as keyof typeof stockData] || stockData.AAPL;
  const isPositive = stock.change.startsWith("+");

  return (
    <Card className="bg-slate-800/50 border-slate-700 h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-white text-2xl">{selectedStock}</CardTitle>
            <div className="flex items-center space-x-4 mt-2">
              <span className="text-3xl font-bold text-white">{stock.price}</span>
              <div className={`flex items-center space-x-1 ${isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
                {isPositive ? <TrendingUp className="h-5 w-5" /> : <TrendingDown className="h-5 w-5" />}
                <span className="text-lg font-medium">{stock.change} ({stock.changePercent})</span>
              </div>
            </div>
          </div>
          
          <div className="flex space-x-2">
            {["1D", "1W", "1M", "3M", "1Y"].map((period) => (
              <Button
                key={period}
                variant={timeframe === period ? "default" : "ghost"}
                size="sm"
                onClick={() => setTimeframe(period)}
                className={timeframe === period ? "bg-emerald-600 hover:bg-emerald-700" : "text-slate-300 hover:text-white"}
              >
                {period}
              </Button>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={stock.data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis 
                dataKey="time" 
                stroke="#9CA3AF"
                fontSize={12}
              />
              <YAxis 
                stroke="#9CA3AF"
                fontSize={12}
                domain={['dataMin - 1', 'dataMax + 1']}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1E293B', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#F8FAFC'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="price" 
                stroke={isPositive ? "#10B981" : "#EF4444"}
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4, fill: isPositive ? "#10B981" : "#EF4444" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-6">
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
            Buy {selectedStock}
          </Button>
          <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-700">
            Sell {selectedStock}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
