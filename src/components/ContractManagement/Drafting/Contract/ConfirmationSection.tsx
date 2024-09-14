import ContractDate from "../Common/ContractDate";

const ConfirmationSection = () => {
  return (
    <>
      <div className="bg-[#E5E6EB] gap-5 flex flex-col w-[1237px] my-8 h-[169px] items-center justify-center border border-gray-300">
        <span className="text-[17px]">
          본 계약을 증명하기 위하여 계약 당사자가 이의 없음을 확인하고 각각 서명
          · 날인 후 매도인, 매수인, 개업공인중개사는 매 장마다 간인하여, 각각
          1통씩 보관한다.
        </span>
        <ContractDate />
      </div>
    </>
  );
};
export default ConfirmationSection;
