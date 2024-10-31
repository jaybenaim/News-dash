export const mockNews = [
  {
    id: 1,
    title: "SpaceX Successfully Launches New Satellite Constellation",
    description: "The aerospace company completed another milestone mission, deploying multiple satellites into low Earth orbit.",
    category: "Technology",
    imageUrl: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Breakthrough in Renewable Energy Storage",
    description: "Scientists develop new battery technology that could revolutionize renewable energy storage capabilities.",
    category: "Science",
    imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Global Economic Forum Addresses Climate Change",
    description: "World leaders gather to discuss urgent actions needed to combat climate change and its economic impact.",
    category: "Politics",
    imageUrl: "https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&q=80",
  },
];

export const mockStocks = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    price: 178.72,
    change: 1.23,
    chartData: Array.from({ length: 24 }, (_, i) => ({
      time: `${(i + 9).toString().padStart(2, '0')}:00`,
      value: 175 + Math.random() * 8,
    })),
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corporation",
    price: 332.42,
    change: -0.45,
    chartData: Array.from({ length: 24 }, (_, i) => ({
      time: `${(i + 9).toString().padStart(2, '0')}:00`,
      value: 330 + Math.random() * 5,
    })),
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    price: 125.23,
    change: 0.78,
    chartData: Array.from({ length: 24 }, (_, i) => ({
      time: `${(i + 9).toString().padStart(2, '0')}:00`,
      value: 123 + Math.random() * 4,
    })),
  },
];

export const mockSports = [
  {
    id: 1,
    homeTeam: "LAL",
    awayTeam: "GSW",
    homeScore: 112,
    awayScore: 108,
    status: "Final",
    league: "NBA",
  },
  {
    id: 2,
    homeTeam: "BOS",
    awayTeam: "MIA",
    homeScore: 98,
    awayScore: 95,
    status: "4th Qtr",
    league: "NBA",
  },
  {
    id: 3,
    homeTeam: "PHX",
    awayTeam: "DEN",
    homeScore: 88,
    awayScore: 92,
    status: "3rd Qtr",
    league: "NBA",
  },
  {
    id: 4,
    homeTeam: "BKN",
    awayTeam: "PHI",
    homeScore: 0,
    awayScore: 0,
    status: "7:30 PM",
    league: "NBA",
  },
];