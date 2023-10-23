import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Materials from '../pages/rawMaterials/Materials';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/materialsList" element={<Materials />} />
    </Routes>
  );
};

export default AppRoutes;
