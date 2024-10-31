import { mockNews, mockStocks, mockSports } from './mock-data';

const NEWS_API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;
const ALPHA_VANTAGE_API_KEY = process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY;

export async function fetchNews() {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data.articles.slice(0, 6).map((article: any, index: number) => ({
      id: index,
      title: article.title,
      description: article.description || 'No description available',
      category: article.source.name,
      imageUrl: article.urlToImage || 'https://images.unsplash.com/photo-1495020689067-958852a7765e',
    }));
  } catch (error) {
    console.error('Error fetching news:', error);
    return mockNews;
  }
}

export async function fetchStocks() {
  try {
    const symbols = ['AAPL', 'MSFT', 'GOOGL'];
    const stocks = await Promise.all(
      symbols.map(async (symbol) => {
        const response = await fetch(
          `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${ALPHA_VANTAGE_API_KEY}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("data", data)
        const timeSeries = data['Time Series (5min)'];
        
        if (!timeSeries) {
          throw new Error('No time series data available');
        }

        const chartData = Object.entries(timeSeries).map(([time, values]: [string, any]) => ({
          time: time.split(' ')[1],
          value: parseFloat(values['1. open']),
        }));

        return {
          symbol,
          name: getCompanyName(symbol),
          price: chartData[0]?.value || 0,
          change: calculateChange(chartData),
          chartData: chartData.slice(0, 24).reverse(),
        };
      })
    );
    return stocks;
  } catch (error) {
    console.error('Error fetching stocks:', error);
    return mockStocks;
  }
}

function getCompanyName(symbol: string) {
  const companies: { [key: string]: string } = {
    AAPL: 'Apple Inc.',
    MSFT: 'Microsoft Corporation',
    GOOGL: 'Alphabet Inc.',
  };
  return companies[symbol] || symbol;
}

function calculateChange(chartData: any[]) {
  if (chartData.length < 2) return 0;
  const latest = chartData[0].value;
  const previous = chartData[1].value;
  return ((latest - previous) / previous) * 100;
}

export async function fetchSports() {
  try {
    const response = await fetch(
      'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard'
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data.events.map((event: any) => ({
      id: event.id,
      homeTeam: event.competitions[0].competitors[0].team.abbreviation,
      awayTeam: event.competitions[0].competitors[1].team.abbreviation,
      homeScore: parseInt(event.competitions[0].competitors[0].score) || 0,
      awayScore: parseInt(event.competitions[0].competitors[1].score) || 0,
      status: event.status.type.shortDetail,
      league: 'NBA',
    }));
  } catch (error) {
    console.error('Error fetching sports:', error);
    return mockSports;
  }
}