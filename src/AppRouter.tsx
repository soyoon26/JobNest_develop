// src/routes/AppRoutes.js

import { Routes, Route } from "react-router-dom";

import ContractManagement from "../src/views/ContractManagement";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/contractManagement" element={<ContractManagement />} />
    </Routes>
  );
};

export default AppRouter;
