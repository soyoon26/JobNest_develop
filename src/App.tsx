import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";

import MainView from "./views/MainView";
import RegistrationIssuanceMainView from "./views/RegistrationIssuance/RegistrationIssuanceMainView";
import RegistrationIssuanceViewHistroyView from "./views/RegistrationIssuance/RegistrationIssuanceViewHistroyView";
import ContractDraftingView from "./views/ContractDraftingView";
import ContractManagementView from "./views/ContractManagementView";
import ToDoApp from "./components/Main/ToDoApp";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainView />} />

          <Route
            path="/registrationIssuance"
            element={<RegistrationIssuanceMainView />}
          />
          <Route
            path="/registrationIssuance/viewHistory"
            element={<RegistrationIssuanceViewHistroyView />}
          />
          <Route
            path="/contractManagement"
            element={<ContractManagementView />}
          />
          <Route path="/contractDrafting" element={<ContractDraftingView />} />
        </Route>
      </Routes> 
      <ToDoApp />
    </>

  );
};
export default App;
