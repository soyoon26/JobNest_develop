import ContractInput from "../../Common/ContractInput";
import ContractRadio from "../../Common/ContractRadio";
import ContractRadioInputText from "../../Common/ContractRadioInputText";

// 6번 권리에 관한 사항
const DetailsOfRights = () => {
  return (
    <>
      <div className="w-[1197px] text-[13px] flex border-by">
        <div className="items-j flex-none w-[150px]">⑥ 권리에 관한 사항</div>
        <div className="flex flex-col">
          <div className="flex h-[41px]">
            <div className="w-[130px] items-j border-bx">경비실</div>
            <div className="pl-4 items w-[370px]">
              <ContractRadio
                name="security"
                options={[{ label: "없음" }, { label: "있음" }]}
              />
            </div>
            <div className="w-[130px] border-bx items-j">관리주체</div>
            <div className="pl-4 items">
              <ContractRadio
                name="manager"
                options={[
                  { label: "위탁관리" },
                  { label: "자체관리" },
                  { label: "그 밖의 유형" },
                ]}
              />
            </div>
          </div>
          <div className="flex border-bt w-[1047px]">
            <div className="w-[130px] flex-none h-[182px] items-j border-bx">
              관리비
            </div>
            <div className="flex flex-col">
              <div className="flex w-[900px]">
                <div className="h-[41px] border-br items-j w-[130px]">
                  관리비 금액
                </div>
                <div className="flex-1 gap-1 pl-4 items-j">
                  <span>금</span>
                  <ContractInput width="330px" />
                  <span>원정 ( ￦</span>
                  <ContractInput width="330px" />
                  <span>)</span>
                </div>
              </div>
              <div className="flex border-by">
                <div className="h-[71px] border-br flex-none items-j w-[130px]">
                  관리비 포함 비목
                </div>
                <div className="pt-2 pl-4 items">
                  <ContractRadioInputText
                    options={[
                      { label: "전기료", value: "electronic" },
                      { label: "수도료", value: "water" },
                      { label: "가스사용료", value: "gas4" },
                      { label: "난방비", value: "warm" },
                      { label: "인터넷 사용료", value: "internet" },
                      { label: "TV 사용료", value: "tv" },
                      { label: "기타", value: "exists" },
                    ]}
                    inputLabel=""
                    inputWidth="675px"
                    unit=""
                  />
                </div>
              </div>
              <div className="flex h-[71px]">
                <div className="h-[71px] border-br flex-none items-j w-[130px]">
                  관리비 부과방식
                </div>
                <div className="pt-2 pl-4 items">
                  <ContractRadioInputText
                    options={[
                      { label: "임대인이 직접부과", value: "none" },
                      { label: "관리규약에 따라 부과", value: "none" },
                      { label: "기타 부과", value: "exists" },
                    ]}
                    inputLabel=""
                    inputWidth="660px"
                    unit=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DetailsOfRights;
