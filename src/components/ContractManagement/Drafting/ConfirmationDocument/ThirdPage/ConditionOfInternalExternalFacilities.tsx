import ContractInput from "../../Common/ContractInput";
import ContractRadio from "../../Common/ContractRadio";
import ContractRadioInput from "../../Common/ContractRadioInput";
import ContractRadioInputText from "../../Common/ContractRadioInputText";
import ContractRadioWithSubOptions from "../../Common/ContractRadioWithSubOptions";

const ConditionOfInternalExternalFacilities = () => {
  return (
    <div className="w-[1197px] flex h-[494px] my-4  border-by">
      <div className="w-[133px] flex-none h-full items-j text-center flex-col">
        <span>⑪ 내부·외부 시설 물의 상태(건축물)</span>
        <span className="text-[#335995] text-[13px]">공부연동 가능 항목</span>
      </div>
      <div className="flex flex-col">
        <div className="flex w-[1064px]">
          <div className="w-[150px] h-[84px] items-j border-bx">수도</div>
          <div className="flex flex-col">
            <div className="flex h-1/2">
              <div className="h-full border-br items-j w-[140px]">
                파손 여부
              </div>
              <div className="pl-4 items">
                <ContractRadioInputText
                  options={[
                    { label: "없음", value: "none1" },
                    { label: "있음", value: "exists" },
                  ]}
                  inputLabel="위치 :"
                  inputWidth="530px"
                  unit=""
                />
              </div>
            </div>
            <div className="flex h-1/2 border-bt">
              <div className="h-full items-j border-br w-[140px] ">용수량</div>
              <div className="pl-4 items">
                <ContractRadioInputText
                  options={[
                    { label: "정상", value: "normal2" },
                    { label: "부족함", value: "exists" },
                  ]}
                  inputLabel="위치 :"
                  inputWidth="515px"
                  unit=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex border-bt">
          <div className="w-[150px]  h-[41px] items-j border-bx">전기</div>
          <div className="w-[140px] items-j border-br">공급상태</div>
          <div className="pl-4 items">
            <ContractRadioInputText
              options={[
                { label: "정상", value: "normal4" },
                { label: "교체필요", value: "exists" },
              ]}
              inputLabel="교체할 부분 :"
              inputWidth="455px"
              unit=""
            />
          </div>
        </div>
        <div className="flex border-by">
          <div className="w-[150px] h-[41px] items-j border-bx">
            가스(취사용)
          </div>
          <div className="w-[140px] items-j">공급상태</div>
          <div className="pl-4 border-bl items">
            <ContractRadioInput
              options={[{ label: "도시가스", value: "gas2" }]}
              otherOptionLabel="그 밖의 방식"
              inputWidth="500px"
            />
          </div>
        </div>
        <div className="flex w-[1064px]">
          <div className="w-[150px] h-[72px] items-j border-bx">소방</div>
          <div className="w-[140px] text-center items-j">
            단독경보형
            <br />
            감지기
          </div>
          <div className="w-[320px] pl-4 items border-bx">
            <ContractRadioInputText
              options={[
                { label: "없음", value: "none" },
                { label: "있음", value: "exists" },
              ]}
              inputLabel="수량"
              inputWidth="80px"
              unit="개"
            />
          </div>
          <div className="w-[440px]">
            ▪「소방시설 설치 및 관리에 관한 법률」 제10조 및 같은 법 시행령
            제10조에 따른 주택용 소방시설로서 아파트(주택으로 사용하는 층수가
            5개층 이상인 주택을 말한다)를 제외한 주택의 경우만 작성합니다.
          </div>
        </div>
        <div className="flex border-bt w-[1064px]">
          <div className="w-[150px] h-[123px]  items-j border-bx">
            난료방식 및 <br />
            연료공급
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex border-bb">
              <div className="w-[140px] h-[83px] items-j">공급방식</div>
              <div className="items border-bx">
                <ContractRadio
                  name="supply"
                  options={[
                    { label: "중앙 공급" },
                    { label: "개별 공급" },
                    { label: "지역 난방" },
                  ]}
                />
              </div>
              <div className="w-[140px] h-[83px] items-j">시설 작동</div>
              <div className="flex-col h-full pt-2 border-bl items">
                <ContractRadioInput
                  options={[{ label: "정상", value: "normal" }]}
                  otherOptionLabel="수선필요"
                  inputWidth="150px"
                />
                <div className="flex">
                  *개별 공급인 경우 사용연한(
                  <ContractInput width="60px" />
                  )
                  <ContractRadio
                    name="check"
                    options={[{ label: "확인 불가" }]}
                  />
                </div>
              </div>
            </div>
            <div className="flex ">
              <div className="w-[140px] h-[41px] items-j border-br">종류</div>
              <div className="w-[764px] h-full items pl-4">
                <ContractRadioInput
                  options={[
                    { label: "도시가스", value: "gas" },
                    { label: "기름", value: "oil" },
                    { label: "프로판 가스", value: "propane" },
                    { label: "연탄", value: "briquette" },
                  ]}
                  otherOptionLabel="그 밖의 종류"
                  inputWidth="200px"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex border-by w-[1064px]">
          <div className="w-[150px] h-[41px] items-j  border-bx">승강기</div>
          <div className="pl-4 items">
            <ContractRadioWithSubOptions
              mainOptions={[
                {
                  label: "있음",
                  value: "exists",
                  subOptions: [
                    { label: "양호", value: "good" },
                    { label: "불량", value: "bad" },
                  ],
                },
                { label: "없음", value: "none" },
              ]}
            />
          </div>
        </div>
        <div className="flex w-[1064px]">
          <div className="w-[150px] h-[41px] items-j border-bx">배수</div>
          <div className="w-[914px] h-full items pl-4">
            <ContractRadioInput
              options={[{ label: "정상", value: "normal" }]}
              otherOptionLabel="수선필요"
              inputWidth="700px"
            />
          </div>
        </div>
        <div className="flex w-[1064px] border-bt">
          <div className="w-[150px] h-[41px] items-j  border-bx">
            그밖의 시설물
          </div>
          <div className="flex-1 "></div>
        </div>
      </div>
    </div>
  );
};
export default ConditionOfInternalExternalFacilities;
