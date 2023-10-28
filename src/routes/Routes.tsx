import { Route, Routes } from 'react-router-dom';
import Materials from '../pages/rawMaterials/Materials/Materials';
import Home from '../pages/Home/Home';
import Operations from '../pages/Operations/Operations/Operations';
import Costs from '../pages/Products/Costs/Costs';
import NewCost from '../pages/Products/Costs/new/NewCost';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Costs />} />
      <Route path="/newCost" element={<NewCost />} />
      <Route path="/materialsList" element={<Materials />} />
      <Route path="/operationsList" element={<Operations />} />
    </Routes>
  );
};

export default AppRoutes;
