import Navbar from "./components/Navbar";
import Table from "./components/Table";
import Pagination from "./components/Pagination";
import CoinDetail from "./components/CoinDetail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto mt-2">
        <Routes>
          <Route path="/" element={<TableWithPagination />} />
          <Route path="/coin/:id" element={<CoinDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

const TableWithPagination = () => (
  <div>
    <Table />
    <Pagination />
  </div>
);

export default App;
