import clipboard from "../assets/images/clipboard.png";
import DraftContract from "../components/ContractManagement/DraftContract";
import Search from "../components/ContractManagement/Search";
const ContractManagement = () => {
  return (
    <div className="bg-[#F7F8F9] w-[1280px]">
      <div className="flex items-center">
        <img src={clipboard} alt="Clipboard" className="w-[23px] h-[23px]" />
        <span className="text-[23px] font-bold">계약관리</span>
      </div>
      <Search />
      <DraftContract />
    </div>
  );
};
export default ContractManagement;
