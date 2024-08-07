import React, { useContext } from "react";
import { CryptoContext } from "../contexts/CryptoContext";
import { Link } from "react-router-dom";

function Table() {
  const { filteredCoins, startIdx, endIdx } = useContext(CryptoContext);
  const arr = filteredCoins.slice(startIdx, endIdx);

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="flex bg-blue-600 text-white text-sm uppercase font-semibold tracking-wider">
        <div className="w-1/12 py-3 px-4 text-center">#</div>
        <div className="w-3/12 py-3 px-4">Coin</div>
        <div className="w-2/12 py-3 px-4 text-right">Price</div>
        <div className="w-2/12 py-3 px-4 text-right">24H Change</div>
        <div className="w-4/12 py-3 px-4 text-right">Market Cap</div>
      </div>
      {arr.length > 0 ? (
        arr.map((coin, idx) => (
          <Link
            to={`/coin/${coin.id}`}
            key={coin.id}
            className="flex items-center hover:bg-gray-100 border-b border-gray-200 text-sm"
          >
            <div className="w-1/12 py-2.5 px-4 text-center">{idx + 1}</div>
            <div className="w-3/12 py-2.5 px-4">{coin.name}</div>
            <div className="w-2/12 py-2.5 px-4 text-right">
              {"$ " + coin.current_price.toLocaleString()}
            </div>
            <div
              className={`w-2/12 py-2.5 px-4 text-right ${
                coin.price_change_percentage_24h < 0 ? "text-red-500" : "text-green-500"
              }`}
            >
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="w-4/12 py-2.5 px-4 text-right">
              {"$ " + coin.market_cap.toLocaleString()}
            </div>
          </Link>
        ))
      ) : (
        <div className="flex items-center justify-center py-3 px-4 text-gray-500">
           No data available
        </div>
      )}
    </div>
  );
}

export default Table;
