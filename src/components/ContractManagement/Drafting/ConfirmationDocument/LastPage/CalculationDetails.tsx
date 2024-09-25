import ContractDate from "../../Common/ContractDate";
import ContractInput from "../../Common/ContractInput";
import ContractRadio from "../../Common/ContractRadio";

const CalculationDetails = () => {
  return (
    <div className="w-[1197px] border-by my-4 flex">
      <div className="w-[150px] items-j text-center">
        ⑮ 중개보수 및 실비의
        <br /> 금액과 산출내역
      </div>
      <div>
        <div className="flex">
          <div className="w-[150px] items-j border-bx  h-[82px]">중개보수</div>
          <div className=" h-[82px] items-j">
            <textarea className="w-[400px] m-2 border-g " />원
          </div>
        </div>
        <div className="flex border-bt">
          <div className="w-[150px]  border-bx items-j h-[82px]">실비</div>
          <div className=" h-[82px] items-j pr-2">
            <textarea className="w-[400px] m-2 border-g " />원
          </div>
        </div>
        <div className="flex border-by">
          <div className="w-[150px] h-[120px] border-bx items-j">계</div>
          <div>
            <div className=" h-[82px] items-j">
              <textarea className="w-[400px] m-2 border-g pr-2" />원
            </div>
            <div className="w-full text-end pr-2">(부가세 미포함)</div>
          </div>
        </div>
        <div className="flex">
          <div className="w-[150px] items-j h-[41px] border-bx">지급시기</div>
          <div className="items-j">
            <ContractDate />
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-1 pl-2 pt-1 border-bl">
        <span>&lt;산출내역&gt;</span>
        <ContractRadio
          name="empty"
          options={[{ label: "인쇄 시 중개보수 항목 공한으로 만들기" }]}
        />
        <ContractRadio name="have" options={[{ label: "부가세 포함" }]} />
        <span>
          (체크 시 부가세 포함한 금액 입력, 미체크 시 부가세 비포함 금액 입력)
        </span>
        <span>중개보수</span>
        <input
          type="text"
          placeholder="중개보수 산출 방식을 입력해주세요"
          className="border-32 pl-2 placeholder-black"
        />
        <span>실비</span>
        <input
          type="text"
          placeholder="실비 산출 방식을 입력해주세요"
          className="border-32 p-2 placeholder-black"
        />
        <div className="gap-2 items flex">
          중개보수율 1천분의
          <ContractInput width="100px" /> %
        </div>
        <span>
          ▪중개보수는 시·도 조례로 정한 요율한도에서 중개의뢰인과 개업공인중개사
          서로 협의하여 결정하며 부가가치세는 별도로 부과될 수 있습니다.
        </span>
      </div>
    </div>
  );
};
export default CalculationDetails;
