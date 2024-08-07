import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CryptoContext } from "../contexts/CryptoContext";

function Navbar() {
  const { handleSearch, setStartIdx, setEndIdx } = useContext(CryptoContext);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchTerm);
    setStartIdx(0);
    setEndIdx(10);
    navigate("/");
  };

  const handleLogoClick = () => {
    setSearchTerm("");
    handleSearch("");
    setStartIdx(0);
    setEndIdx(10);
    navigate("/");
  };

  return (
    <div className="flex flex-wrap z-10 min-w-full justify-around bg-blue-50 p-3">
      <h1
        className="text-fuchsia-700 hover:text-fuchsia-900 text-xl font-bold cursor-pointer"
        onClick={handleLogoClick}
      >
        Crypto Tracker
      </h1>

      <form className="flex gap-x-5" onSubmit={handleSubmit}>
        <input
          type="text"
          className="rounded-lg text-violet-600 font-semibold w-64 p-1 hover:bg-sky-200 bg-sky-100 outline-none"
          placeholder="Bitcoin BTC"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button
          type="submit"
          className="rounded-md bg-blue-600 hover:bg-blue-800 text-white min-w-12 text-lg p-1"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Navbar;
