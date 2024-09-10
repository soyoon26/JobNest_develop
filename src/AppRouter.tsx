import { Routes, Route } from "react-router-dom";

import ContractManagement from "../src/views/ContractManagement";
import ContractDrafting from "../src/views/ContractDrafting";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/contractManagement" element={<ContractManagement />} />
      <Route path="/contractDrafting" element={<ContractDrafting />} />
    </Routes>
  );
};

export default AppRouter;
