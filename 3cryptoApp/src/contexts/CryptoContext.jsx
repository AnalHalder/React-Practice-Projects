import { createContext, useState, useEffect } from "react";

export const CryptoContext = createContext();

const CryptoContextProvider = (props) => {
  const [allCoin, setAllCoin] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [startIdx, setStartIdx] = useState(0);
  const [endIdx, setEndIdx] = useState(10);

  const fetchAllCoin = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-api-key": "CG-Fx3FqQRbX4jXV7zgPQE6HWqM",
      },
    };

    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setAllCoin(response);
        setFilteredCoins(response);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchAllCoin();
  }, []);

  const handleSearch = (term) => {
    if (term === "") {
      setFilteredCoins(allCoin);
    } else {
      const filtered = allCoin.filter(
        (coin) =>
          coin.name.toLowerCase().includes(term.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredCoins(filtered);
    }
  };

  const contextValue = {
    allCoin,
    filteredCoins,
    fetchAllCoin,
    startIdx,
    setStartIdx,
    endIdx,
    setEndIdx,
    handleSearch,
  };

  return (
    <CryptoContext.Provider value={contextValue}>
      {props.children}
    </CryptoContext.Provider>
  );
};

export default CryptoContextProvider;
