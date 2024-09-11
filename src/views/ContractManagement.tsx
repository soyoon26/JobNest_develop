import { useState } from "react";
import Search from "../components/ContractManagement/main/Search";
import PreContractDrafting from "../components/ContractManagement/Drafting/Pre/PreContractDrafting";

const ContractManagement = () => {
  const [isDraftVisible, setIsDraftVisible] = useState(false);
  const handleShowDraft = () => {
    setIsDraftVisible(true);
  };

  const handleCancelDraft = () => {
    setIsDraftVisible(false);
  };
  return (
    <div className="bg-[#F7F8F9] flex flex-col items-center w-full">
      {isDraftVisible ? (
        <PreContractDrafting onCancel={handleCancelDraft} />
      ) : (
        <Search onCreateDraft={handleShowDraft} />
      )}
    </div>
  );
};
export default ContractManagement;
