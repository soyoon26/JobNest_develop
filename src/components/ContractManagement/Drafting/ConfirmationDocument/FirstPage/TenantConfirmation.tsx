import React from "react";

const TenantConfirmation: React.FC = () => {
  return (
    <>
      <ul className="pl-6 my-4 list-disc list-inside">
        <li>
          주택임대사업자는 「민간임대주택에 관한 특별법」 제49조에 따라
          임대보증금에 대한 보증에 가입하여야 합니다.
        </li>
        <li>
          임차인에 대한 권고 사항: 주택도시보증공사(HUG)등이 운영하는 전세보증금
          반환보증 가입
        </li>
        <li>
          임대차 계약 후 「부동산거래신고법」 제6조의2에 따라 30일 이내
          신고하여야 합니다(신고 시 확정일자 자동부여)
        </li>
        <li>
          최우선변제금은 근저당권 등 선순위 담보물권 설정 당시의 소액임차인범위
          및 최우선변제금액을 기준으로 합니다.
        </li>
      </ul>
      <div className="w-[1198px] h-[121px] border border-black">
        <div className="flex">
          <div className="w-[120px] h-[120px] border-r border-black text-center  flex flex-col items-center justify-center">
            <div className="font-bold">{`<서명란>`}</div>
            임대차확인사항
            <br />
            확인·설명
          </div>
          <div className="flex items-center justify-center w-[600px] text-center border-r border-black">
            개업공인중개사가 "③ 임대차 확인사항"을
            <br />
            임대인 및 임차인에게 설명하였음을 확인함
          </div>
          <div className="flex flex-col">
            <div className="flex h-[40px]">
              <div className="w-[120px] border-r items-j border-black ">
                개업공인중개사
              </div>
              <div className="w-[358px] flex items-j">
                <input type="text" className="w-[250px] border-32" />
                <div className="w-[100px] text-center">(서명 또는 인)</div>
              </div>
            </div>
            <div className="flex h-[40px]">
              <div className="w-[120px] items-j border-r border-y border-black ">
                임대인
              </div>
              <div className="w-[358px] flex items-j border-y border-black">
                <input type="text" className="w-[250px] border-32" />
                <div className="w-[100px] text-center">(서명 또는 인)</div>
              </div>
            </div>
            <div className="flex h-[40px]">
              <div className="w-[120px] items-j border-r border-black ">
                임차인
              </div>
              <div className="w-[358px] flex items-j">
                <input type="text" className="w-[250px] border-32" />
                <div className="w-[100px] text-center">(서명 또는 인)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TenantConfirmation;
