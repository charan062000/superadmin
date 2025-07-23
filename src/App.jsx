import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./pages/Dashboard";
import MouManagment from "./pages/MouManagment";
import CsvManagement from "./pages/CsvManagement";
import PriceServices from "./pages/PriceServices";
import CollegeAccess from "./pages/CollegeAccess";
import CorporateAccess from "./pages/CorporateAccess";
import StateAccess from "./pages/StateAccess";
import Revenue from "./pages/Revenue";

function App() {
  return (
    <>
      <div className="w-full h-screen flex overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto max-w-[2000px] p-[10px] ">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/MoUManagment" element={<MouManagment />} />
            <Route path="/CSVManagement" element={<CsvManagement />} />
            <Route path="/Prices&Services" element={<PriceServices />} />
            <Route path="/CollegeAccess" element={<CollegeAccess />} />
            <Route path="/CorporateAccess" element={<CorporateAccess />} />
            <Route path="/StateAccess" element={<StateAccess />} />
            <Route path="/Revenue" element={<Revenue />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
