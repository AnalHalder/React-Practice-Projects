import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function CoinDetail() {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [graph, setGraph] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeRange, setTimeRange] = useState(90); // Default to 90 days

  useEffect(() => {
    const fetchDetails = async () => {
      const options = {
        method: 'GET',
        headers: { accept: 'application/json', 'x-cg-api-key': 'CG-Fx3FqQRbX4jXV7zgPQE6HWqM' }
      };

      try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`, options);
        if (!response.ok) {
          throw new Error('Failed to fetch coin details');
        }
        const data = await response.json();
        setDetails(data);
      } catch (err) {
        setError(err.message);
        console.error(err);
      }
    };

    const fetchGraph = async () => {
      const options = {
        method: 'GET',
        headers: { accept: 'application/json', 'x-cg-api-key': 'CG-Fx3FqQRbX4jXV7zgPQE6HWqM' }
      };

      try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${timeRange}&interval=daily`, options);
        if (!response.ok) {
          throw new Error('Failed to fetch market chart data');
        }
        const data = await response.json();
        setGraph(data);
      } catch (err) {
        setError(err.message);
        console.error(err);
      }
    };

    fetchDetails();
    fetchGraph();
    setLoading(false);
  }, [id, timeRange]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!details || !graph) {
    return <div>No data available</div>;
  }

  //set data for the chart
  const marketCapData = {
    labels: graph.market_caps.map(item => new Date(item[0]).toLocaleDateString()),
    datasets: [
      {
        label: 'Market Cap',
        data: graph.market_caps.map(item => item[1]),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (
    <div className="max-w-screen-lg mx-auto mt-4 p-4 bg-white shadow-md rounded-lg">
      <div className="flex flex-col items-center">
        <img 
          src={details.image.large || ''} 
          alt={details.name} 
          className="w-24 h-24 object-cover mb-4"
        />
        <h1 className="text-2xl font-bold">{details.name}</h1>
        <p className="text-gray-600">{details.description.en.slice(0,details.description.en.indexOf(".")+1)}</p>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Details:</h2>
        <p>Rank: {details.market_cap_rank}</p>
        <p>Current Price: ${details.market_data.current_price.usd.toLocaleString()}</p>
        <p>Market Cap: ${details.market_data.market_cap.usd.toLocaleString()}</p>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Market Cap:</h2>
        <div className="flex space-x-4 mb-4">
          <button 
            className={`px-4 py-2 rounded ${timeRange === 30 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
            onClick={() => setTimeRange(30)}
          >
            30 Days
          </button>
          <button 
            className={`px-4 py-2 rounded ${timeRange === 90 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
            onClick={() => setTimeRange(90)}
          >
            90 Days
          </button>
          <button 
            className={`px-4 py-2 rounded ${timeRange === 365 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
            onClick={() => setTimeRange(365)}
          >
            365 Days
          </button>
        </div>
        <Line data={marketCapData} />
      </div>
    </div>
  );
}

export default CoinDetail;
