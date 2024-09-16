import ContractDate from "../Common/ContractDate";
import ContractDropDown from "../Common/ContractDropDown";

const ContractContent = () => {
  const loanAmount = ["현 상태에서 매수인이 승계함."];
  const leaseDeposit = ["매도인이 잔금 지급일까지 말소한다."];

  return (
    <div className="w-full p-4 text-[14px] my-8 bg-white ">
      <h2 className="mb-2 text-[15px]">2. 계약내용</h2>
      <p className="mb-4">
        제1조[목적] 위 부동산의 매매에 대하여 매도인과 매수인은 합의에 의하여
        매매 대금을 아래와 같이 지급하기로 한다.
      </p>

      <div className="grid">
        <FormRow label="매매대금">
          <div className="flex items-center h-[43px]">
            <span className="px-2">金</span>
            <input type="text" className=" w-[458px] border-32" />
            <span className="ml-2">원정(</span>
            <input className="w-[564px] h-[32px] border mx-1 border-gray-300 bg-[#F8F8F9]" />
            <span>)</span>
          </div>
        </FormRow>

        <FormRow label="계약금">
          <div className="flex items-center h-[43px]">
            <span className="px-2">金</span>
            <input type="text" className=" w-[458px] border-32" />
            <span className="ml-2">원정 은 계약 시에 지급하고 영수함.</span>
            <div className="flex items-center ml-2 space-x-2">
              <div className="bg-[#E5E6EB] border-x flex justify-center items-center w-[115px] h-[43px] border-gray-300">
                영수자
              </div>
              <input
                type="text"
                className="border rounded w-[245px] h-[32px]"
              />
              <span>(인)</span>
            </div>
          </div>
        </FormRow>

        <FormRow label="융자금">
          <div className="flex items-center h-[43px]">
            <span className="px-2">金</span>
            <input type="text" className=" w-[458px] border-32" />
            <span className="mx-2">원정 은</span>
            <ContractDropDown items={loanAmount} width="563px" />
          </div>
        </FormRow>

        <FormRow label="현 임대 보증금">
          <div className="flex items-center h-[43px]">
            <span className="px-2">金</span>
            <input type="text" className=" w-[458px] border-32" />
            <span className="mx-2">원정 은</span>
            <ContractDropDown items={leaseDeposit} width="563px" />
          </div>
        </FormRow>

        <FormRow label="중도금">
          <div className="flex flex-col ">
            <div className="flex items-center h-[43px]">
              <span className="px-2">金</span>
              <input type="text" className=" w-[458px] border-32" />
              <span className="ml-2">원정 은</span>
              <ContractDate />
              <span>에 지급하며,</span>
            </div>
            <div className="flex items-center border-t border-gray-300 h-[43px]">
              <span className="px-2">金</span>
              <input type="text" className="w-[458px] border-32" />
              <span className="ml-2">원정 은</span>
              <ContractDate />
              <span>에 지급한다.</span>
            </div>
          </div>
        </FormRow>

        <FormRow label="잔금">
          <div className="flex items-center h-[43px]">
            <span className="px-2">金</span>
            <input type="text" className=" w-[458px] border-32" />
            <span className="ml-2">원정 은</span>
            <ContractDate />
            <span>에 지급한다.</span>
          </div>
        </FormRow>
      </div>

      <p className="mt-6 text-[14px]">
        제2조 [소유권 이전 등] 매도인은 매매대금의 잔금 수령과 동시에 매수인에게
        소유권 이전등기에 필요한 모든 서류를 교부하고 등기절차에 협력 하여야
        하며,
      </p>
      <div className="flex items-center mt-2">
        <span className="mr-2">위 부동산의 인도일은</span>
        <ContractDate />
        <span className="ml-2">로 한다.</span>
      </div>
    </div>
  );
};

const FormRow = ({
  label,
  children,
}: {
  label: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className="flex items-center ">
      <div className="col-span-2 bg-gray-200 h-full w-[115px] flex items-center justify-center text-sm border border-gray-300">
        {label}
      </div>
      <div className="w-[1114px] flex flex-col  border border-gray-300">
        {children}
      </div>
    </div>
  );
};

export default ContractContent;
