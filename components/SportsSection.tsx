"use client";

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { fetchSports } from '@/lib/api';

export default function SportsSection() {
  const [sports, setSports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSports = async () => {
      try {
        const data = await fetchSports();
        setSports(data);
      } catch (error) {
        console.error('Error loading sports:', error);
      } finally {
        setLoading(false);
      }
    };
    loadSports();
  }, []);

  if (loading) {
    return <div className="animate-pulse space-y-4">
      {[...Array(4)].map((_, i) => (
        <Card key={i}>
          <CardContent className="h-16 bg-gray-100 dark:bg-gray-800" />
        </Card>
      ))}
    </div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {sports.map((game: any) => (
        <Card key={game.id}>
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div className="text-center flex-1">
                <p className="font-semibold text-lg">{game.homeTeam}</p>
                <p className="text-2xl font-bold">{game.homeScore}</p>
              </div>
              <div className="text-center px-4">
                <p className="text-sm text-muted-foreground mb-1">{game.league}</p>
                <p className="text-xs font-medium bg-secondary text-secondary-foreground px-2 py-1 rounded">
                  {game.status}
                </p>
              </div>
              <div className="text-center flex-1">
                <p className="font-semibold text-lg">{game.awayTeam}</p>
                <p className="text-2xl font-bold">{game.awayScore}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}