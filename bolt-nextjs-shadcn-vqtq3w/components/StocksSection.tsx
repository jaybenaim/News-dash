"use client";

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { fetchStocks } from '@/lib/api';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';
import { TrendingUp, TrendingDown } from 'lucide-react';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background border rounded p-2 shadow-lg">
        <p className="font-semibold">{label}</p>
        <p className="text-sm">
          ${payload[0].value.toFixed(2)}
        </p>
      </div>
    );
  }
  return null;
};

export default function StocksSection() {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStocks = async () => {
      try {
        const data = await fetchStocks();
        setStocks(data);
      } catch (error) {
        console.error('Error loading stocks:', error);
      } finally {
        setLoading(false);
      }
    };
    loadStocks();
  }, []);

  if (loading) {
    return <div className="animate-pulse space-y-4">
      {[...Array(3)].map((_, i) => (
        <Card key={i}>
          <CardContent className="h-32 bg-gray-100 dark:bg-gray-800" />
        </Card>
      ))}
    </div>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {stocks.map((stock: any) => (
        <Card key={stock.symbol}>
          <CardContent className="p-4">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold">{stock.symbol}</h3>
                <p className="text-sm text-muted-foreground">{stock.name}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">${stock.price.toFixed(2)}</p>
                <div className={`flex items-center text-sm ${stock.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {stock.change >= 0 ? (
                    <TrendingUp className="w-4 h-4 mr-1" />
                  ) : (
                    <TrendingDown className="w-4 h-4 mr-1" />
                  )}
                  {Math.abs(stock.change).toFixed(2)}%
                </div>
              </div>
            </div>
            <div className="h-32">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={stock.chartData}>
                  <defs>
                    <linearGradient id={`gradient-${stock.symbol}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis 
                    dataKey="time" 
                    tick={{ fontSize: 12 }} 
                    tickFormatter={(value) => value.split(':')[0]}
                    interval="preserveStartEnd"
                  />
                  <YAxis 
                    hide 
                    domain={['auto', 'auto']}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="hsl(var(--primary))"
                    fillOpacity={1}
                    fill={`url(#gradient-${stock.symbol})`}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}