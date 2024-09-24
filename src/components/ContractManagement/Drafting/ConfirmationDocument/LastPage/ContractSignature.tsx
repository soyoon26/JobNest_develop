import ContractInput from "../../Common/ContractInput";

const ContractSignature = () => {
  return (
    <div className="w-[1197px] flex flex-col border-by my-4">
      <div className="flex">
        <div className="w-[150px] text-center items-j">
          매도인
          <br />
          (임대인)
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex border-bb">
            <div className="w-[150px] border-bx items-j h-[41px]">주소</div>
            <div className="items-j pl-2">
              <ContractInput width="880px" />
            </div>
          </div>
          <div className="flex">
            <div className="w-[150px] border-bx items-j h-[41px]">생년월일</div>
            <div className="items-j pl-2">
              <ContractInput width="880px" />
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="flex border-by">
        <div className="w-[150px] text-center items-j">
          매수인
          <br />
          (임차인)
        </div>
        <div className="flex flex-col flex-1">
          <div className="border-bb flex ">
            <div className="w-[150px] border-bx items-j h-[41px]">주소</div>
            <div className="items-j pl-2">
              <ContractInput width="880px" />
            </div>
          </div>
          <div className="flex">
            <div className="w-[150px] border-bx items-j h-[41px]">생년월일</div>
            <div className="items-j pl-2">
              <ContractInput width="880px" />
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="flex">
        <div className="w-[150px] text-center items-j">
          개인
          <br />
          공인중개사
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex border-bb ">
            <div className="w-[150px] border-bx items-j h-[41px]">주소</div>
            <div className="items-j pl-2">
              <ContractInput width="880px" />
            </div>
          </div>
          <div className="flex">
            <div className="w-[150px] border-bx items-j h-[41px]">생년월일</div>
            <div className="items-j pl-2">
              <ContractInput width="880px" />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default ContractSignature;
