import React from "react";

const B: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-32">
      <span className="text-[15px] font-bold w-[1232px] text-left">
        특약사항
      </span>
      <div className=" w-[1232px] bg-white mt-4 border border-gray-300 ">
        <div className="flex items-center border-b w-full h-[72px] bg-[#F8F8F9] border-gray-300">
          <span className="text-[30px] pl-8 font-bold">B</span>
        </div>

        <ol className="flex flex-col justify-center px-6 space-y-2 text-[14px] h-[314px] leading-6 list-decimal list-inside">
          <li>
            현 시설 상태에서의 매매 계약이며, 등기사항 증명서를 확인하고, 계약을
            체결함
          </li>
          <li>잔금 시까지의 각종 공과금은 매도자 부담으로 한다.</li>
          <li>
            본 특약사항에 기재되지 않은 사항은 민법상 계약에 관한 규정과
            부동산매매 일반 관례에 따른다.
          </li>
          <li>
            현 시설물 상태의 계약이나 계약서에 매도인이 고지하지 않은 부분에
            하자가 있을 경우, 하자담보책임과는 별개로 매도인은 이를 수리해주기로
            한다.
          </li>
          <li>
            <input className="w-[175px] border mr-1 border-gray-300 rounded-md" />
            <span>은행</span> 채권최고액 금
            <input className="w-[175px] border mx-1 border-gray-300 rounded-md" />
            <span>
              원 상태의 계약으로 잔금일에 매도인이 상환하고 말소하기로 하며,
              매도인은 잔금일까지 채무를 부담하는 등의 새로운 권리변동을
            </span>
            <span className="pl-4">일으키지 않도록 한다.</span>
          </li>
          <li>
            첨부서류: 실제 첨부하여 교부한 서류만 기재. 예시)중개대상물
            확인·설명서
          </li>
        </ol>
      </div>
    </div>
  );
};

export default B;
