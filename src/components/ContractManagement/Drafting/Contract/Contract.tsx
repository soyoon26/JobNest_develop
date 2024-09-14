import ContractContent from "./ContractContent";
import LegalProvision from "./LegalProvision";
import RealEstate from "./RealEstate";

const Contract = () => {
  return (
    <div className="bg-white">
      <div></div>
      <div className="w-[1223px] text-center h-[66px] rounded border border-gray text-[45px] font-bold">
        부동산(아파트) 매매 계약서
      </div>
      <span className="text-[14px] font-bold">
        매도인과 매수인 쌍방은 아래 표시 부동산에 관하여 다음과 같이 매매 계약을
        체결한다.
      </span>
      <RealEstate />
      <ContractContent />
      <LegalProvision />
    </div>
  );
};
export default Contract;
