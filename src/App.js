import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import VPSOrder from "./components/VPSOrder/VPSOrder";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<VPSOrder />} />
      </Route>
    </Routes>
  );
}

export default App;
