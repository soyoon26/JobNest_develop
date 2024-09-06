import { useState } from "react";
import Search from "../components/ContractManagement/main/Search";
import DraftContract from "../components/ContractManagement/DraftContract";

const ContractManagement = () => {
  const [isDraftVisible, setIsDraftVisible] = useState(false);
  const handleShowDraft = () => {
    setIsDraftVisible(true);
  };

  const handleCancelDraft = () => {
    setIsDraftVisible(false);
  };
  return (
    <div className="bg-[#F7F8F9] flex flex-col items-center w-[1280px]">
      {isDraftVisible ? (
        <DraftContract onCancel={handleCancelDraft} />
      ) : (
        <Search onCreateDraft={handleShowDraft} />
      )}
    </div>
  );
};
export default ContractManagement;
