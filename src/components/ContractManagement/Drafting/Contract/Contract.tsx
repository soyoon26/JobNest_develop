import ContractContent from "./ContractContent";
import LegalProvision from "./LegalProvision";
import RealEstate from "./RealEstate";
import { RootState } from "../../../../redux/store";
import { useSelector } from "react-redux";
import B from "./B";
import ConfirmationSection from "./ConfirmationSection";
const Contract = () => {
  const contractType = useSelector(
    (state: RootState) => state.contract.contractType
  );
  const transactionType = useSelector(
    (state: RootState) => state.contract.transactionType
  );
  const address = useSelector((state: RootState) => state.contract.address);
  const detailAddress = useSelector(
    (state: RootState) => state.contract.detailAddress
  );
  return (
    <div className="bg-white">
      <div className="text-[15px] my-4 font-bold">
        {address && detailAddress ? `${address} / ${detailAddress}` : ""}
        {contractType && ` | 계약서 종류: ${contractType}`}
        {transactionType && ` | 거래유형: ${transactionType}`}
      </div>
      <div className="w-[1223px] mt-4 h-[1px] bg-gray-300 mb-10"></div>
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
      <B />
      <ConfirmationSection />
    </div>
  );
};
export default Contract;
