import ContractRadio from "../../Common/ContractRadio";

const LeaseConfirmationItems = () => {
  return (
    <div className="w-[1198px] flex mt-10 h-[354px] border-by">
      <div className="w-[129px] h-full items-j border-br text-center ">
        ③임대차
        <br /> 확인사항
      </div>
      <div className="flex-1">
        <div className="border-bb h-[41px] flex">
          <div className="w-[170px] h-full items-j">확정일자 부여현황 정보</div>
          <div className="flex-1 pl-4 border-bx items">
            <ContractRadio
              name="landlord1"
              options={[{ label: "임대인 자료 제출" }, { label: "열람 동의" }]}
            />
          </div>
          <div className="w-[300px] items pl-4">
            <ContractRadio
              name="tenant1"
              options={[{ label: "임차인 권리설명" }]}
            />
          </div>
        </div>
        <div className="border-bb flex h-[41px]">
          <div className="w-[170px]  items-j">국세 및 지방세 체납정보</div>
          <div className="flex-1 pl-4 border-bx items">
            <ContractRadio
              name="landlord2"
              options={[{ label: "임대인 자료 제출" }, { label: "열람 동의" }]}
            />
          </div>
          <div className="w-[300px] items pl-4">
            <ContractRadio
              name="tenant2"
              options={[{ label: "임차인 권리설명" }]}
            />
          </div>
        </div>
        <div className="border-bb flex h-[41px]">
          <div className="w-[170px] h-full items-j">전입세대 확인서 제출</div>
          <div className="pl-4 items border-bl">
            <ContractRadio
              name="send"
              options={[
                { label: "제출(확인서류 첨부)" },
                { label: "미제출" },
                { label: "해당없음" },
              ]}
            />
          </div>
        </div>
        <div className="border-bb flex h-[41px]">
          <div className="w-[170px] h-full items-j">최우선변제금</div>
          <div className="items-j w-[150px] border-bx">소액임차인범위</div>
          <div className="flex-1"></div>
          <div className="w-[150px] items-j border-bx">최우선변제금액</div>
          <div className="w-[300px]"></div>
        </div>
        <div className="flex border-bb">
          <div className="w-[170px] h-[149px] items-j">민간임대 등록여부</div>
          <div className="flex flex-col border-bl">
            <div></div>
            <div className="flex">
              <div className="w-[149px] items-j h-[41px] border-br">미등록</div>
              <div className="flex-1 h-full px-4 items">
                <ContractRadio
                  name="unregister"
                  options={[{ label: "해당 사항 없음" }]}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-[170px] h-[41px] items-j">
            계약갱신 요구권 행사 여부
          </div>
          <div className="h-[39px] pl-4 items border-bl">
            <ContractRadio
              name="send2"
              options={[
                { label: "제출(확인서류 첨부)" },
                { label: "미제출" },
                { label: "해당없음" },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LeaseConfirmationItems;
