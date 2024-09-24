import ContractDate from "../../Common/ContractDate";

const CalculationDetails = () => {
  return (
    <div className="w-[1197px] border-by my-4 flex">
      <div className="w-[150px] items-j text-center">
        ⑮ 중개보수 및 실비의
        <br /> 금액과 산출내역
      </div>
      <div>
        <div className="flex">
          <div className="w-[150px] items-j border-bx h-[82px]">중개보수</div>
        </div>
        <div className="flex border-bt">
          <div className="w-[150px]  border-bx items-j h-[82px]">실비</div>
        </div>
        <div className="flex border-by">
          <div className="w-[150px] h-[120px] border-bx items-j">계</div>
          <div>
            <div></div>
            <div>(부가세 미포함)</div>
          </div>
        </div>
        <div className="flex">
          <div className="w-[150px] items-j h-[41px] border-bx">지급시기</div>
          <div>
            <ContractDate />
          </div>
        </div>
      </div>
      <div className="flex flex-col border-bl">
        <span>&lt;산출내역&gt;</span>
        <span>
          (체크 시 부가세 포함한 금액 입력, 미체크 시 부가세 비포함 금액 입력)
        </span>
        <span>중개보수</span>
        <span>실비</span>
        <span>
          ▪중개보수는 시·도 조례로 정한 요율한도에서 중개의뢰인과 개업공인중개사
          서로 협의하여 결정하며 부가가치세는 별도로 부과될 수 있습니다.
        </span>
      </div>
    </div>
  );
};
export default CalculationDetails;
