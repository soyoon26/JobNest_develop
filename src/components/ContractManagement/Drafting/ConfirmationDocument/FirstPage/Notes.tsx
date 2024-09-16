import React from "react";

const Notes: React.FC = () => {
  return (
    <div className="w-[1237px] my-8 border border-gray-300">
      <div className="flex-1  h-[42px] items-j bg-gray-200 border-b border-gray-300">
        유의사항
      </div>
      <div className="flex border-b border-gray-300">
        <div className="w-[189px] h-[53px] items-j border-r border-gray-300 ">
          개업공인중개사의
          <br />
          확인·설명 의무
        </div>
        <div className="flex border-b border-gray-300">
          <div className="flex-1 px-4 border-r border-gray-300">
            개업공인중개사는 중개대상물에 관한 권리를 취득하려는 중개의뢰인에게
            성실·정확하게 설명하고, 토지대장 등본, 등기사항증명서 등 설명의
            근거자료를 제시해야 합니다.
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-[183px] h-[53px] border-r items-j border-gray-300">
          실제 거래가격 신고
        </div>
        <div className="flex-1 px-4">
          「부동산 거래신고 등에 관한 법률」 제3조 및 같은 법 시행령 별표 1
          제1호마목에 따른 실제 거래가격은 매수인이 매수한 부동산을 양도하는
          경우 「소득세법」 제97조제1항과 같은 법 시행 령 제163조제11항제2호에
          따라 취득 당시의 실제 거래가액으로 보아 양도차익이 계산될 수 있음을
          유의하시기 바랍니다.
        </div>
      </div>
    </div>
  );
};

export default Notes;
