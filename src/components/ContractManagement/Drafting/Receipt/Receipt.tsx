import ContractBtn from "../Common/ContractBtn";
import ReceiptDate from "./ReceiptDate";
import ReceiptDropDown from "./ReceiptDropDown";

const Receipt = () => {
  const type = ["계약금"];
  return (
    <div className="px-10 mb-10 font-bold bg-white border border-gray-300 ">
      <div className="flex justify-end w-full gap-2 mt-10">
        <ContractBtn />
        <ContractBtn text="저장" color="#335995" textColor="white" />
      </div>
      <div className="w-[1223px] mt-4 h-[1px] bg-gray-300 mb-10"></div>
      <div className="w-[1223px] text-center h-[66px] mb-5 rounded border border-[#CCCCCC] text-[45px] font-bold">
        영수증
      </div>
      <div className="w-[273px] flex border mb-10 border-gray-300">
        <div className="w-[91px] flex text-[14px] justify-center items-center h-[43px] bg-[#E5E6EB] ">
          NO.
        </div>
        <div className="text-[14px] flex-grow border-l flex items-center pl-4 border-gray-300">
          1
        </div>
      </div>
      {/* 성명, 금액 */}
      <div className="flex flex-col mb-10 border border-gray-300">
        <div className="flex">
          <div className="w-[115px] bg-gray-200 h-[43px] flex items-center justify-center text-[14px] border border-gray-300">
            성명
          </div>
          <div className="flex flex-col flex-grow">
            <div className="flex items-center h-[43px] border-b border-gray-300">
              <input
                type="text"
                className="flex-grow m-2 border-gray h-[30px] border focus:ring-0"
                placeholder=""
              />
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-[115px] text-[14px] bg-gray-200 flex items-center justify-center border-r border-gray-300 h-[43px]">
            금액
          </div>
          <div className="flex items-center flex-grow">
            <span className="p-2 ">￦</span>
            <input
              type="text"
              className="flex-grow p-2 border h-[30px] border-[#CCCCCC] focus:ring-0"
              placeholder=""
            />
            <span className="p-2">ㅡ 金</span>

            <input
              type="text"
              className="flex-grow p-2 h-[30px] bg-[#F8F8F9] border border-gray-200 focus:ring-0"
              placeholder=""
            />

            <span className="p-2 text-sm ">) 원정</span>
          </div>
        </div>
      </div>

      {/* 부동산 */}
      <div className="flex mb-2">
        <div className="w-[115px] bg-gray-200 h-[43px] flex items-center justify-center text-[14px] border border-gray-300">
          부동산의 표시
        </div>
        <div className="flex flex-col flex-grow">
          <div className="flex items-center h-[43px] border border-gray-300">
            <input
              type="text"
              className="flex-grow m-2 border-gray h-[30px] border focus:ring-0"
              placeholder=""
            />
          </div>
        </div>
      </div>
      <div className="text-[14px] mb-10 flex items-center">
        상기 금액을 위 표시 부동산(아파트) 매매 계약서에 대한
        <ReceiptDropDown items={type} />
        으로 정히 영수하고 이에 본 영수증을 발행합니다.
      </div>
      {/* 발행인 */}
      <div className="flex mb-10 border border-gray-300">
        <div className="w-[100px] bg-[#E5E6EB] text-[14px] flex items-center justify-center border-r border-gray-300 p-2">
          발행인
        </div>

        <div className="flex flex-col w-full">
          <div className="flex items-center border-b border-gray-300">
            <div className="w-[80px] flex items-center justify-center text-[14px] bg-[#E5E6EB] h-[44px] border-r border-gray-300">
              주소
            </div>
            <input
              type="text"
              className="flex-grow mx-2 border border-gray-300 h-[30px] focus:ring-0"
              placeholder=""
            />
          </div>

          <div className="flex items-center">
            <div className="w-[80px] bg-[#E5E6EB] h-[44px] text-[14px] flex items-center justify-center border-r border-gray-300 ">
              성명
            </div>
            <input
              type="text"
              className="flex-grow mx-2 border border-gray-300 h-[30px] focus:ring-0"
              placeholder=""
            />
            <span className="p-2 text-sm text-right text-[14px] ">
              (서명 또는 날인)
            </span>
          </div>
        </div>
      </div>
      {/* 발행일 */}
      <div className="flex justify-center w-full mb-48">
        <div className="w-[80px] bg-[#E5E6EB] h-[43px] text-[14px] flex items-center justify-center border-r border-gray-300 ">
          발행일
        </div>
        <div className="w-[194px] border border-gray-300 flex items-center justify-center h-[43px]">
          <ReceiptDate />
        </div>
      </div>
    </div>
  );
};
export default Receipt;
