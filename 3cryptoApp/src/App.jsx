import Navbar from "./components/Navbar";
import Table from "./components/Table";
import Pagination from "./components/Pagination";
import CoinDetail from "./components/CoinDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mx-auto mt-2">
        <Routes>
          <Route path="/" element={<TableWithPagination />} />
          <Route path="/coin/:id" element={<CoinDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const TableWithPagination = () => (
  <div>
    <Table />
    <Pagination />
  </div>
);

export default App;
