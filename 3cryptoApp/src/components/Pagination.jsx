import React, { useContext } from "react";
import { CryptoContext } from "../contexts/CryptoContext";

function Pagination() {
  const { allCoin, startIdx, setStartIdx, endIdx, setEndIdx } = useContext(CryptoContext);
  
  return (
    <div className="flex justify-center mt-4">
      <button 
        className="bg-blue-600 hover:bg-blue-800 text-white text-md rounded-md w-32 py-2"
        onClick={() => {
          if (startIdx === 0) return;
          setStartIdx(prevStartIdx => prevStartIdx - 10);
          setEndIdx(prevEndIdx => prevEndIdx - 10);
        }}
      >
        Previous
      </button>
      <button 
        className="bg-blue-600 hover:bg-blue-800 text-white text-md rounded-md w-32 py-2 mx-2"
        onClick={() => {
          if (endIdx >= allCoin.length) return;
          setStartIdx(prevStartIdx => prevStartIdx + 10);
          setEndIdx(prevEndIdx => prevEndIdx + 10);
        }}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
