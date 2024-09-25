import ContractDate from "../../Common/ContractDate";

const Signiture = () => {
  return (
    <div className="w-[1197px] border-by">
      <div className="m-2">
        「공인중개사법」 제25조제3항 및 제30조제5항에 따라 거래당사자는
        개업공인중개사로부터 위 중개대상물에 관한 확인·설명 및 손해배상책임의
        보장에 관한 설명을 듣고, 같은 법 시행령 제21조제3항에 따른 본
        확인·설명서와 같은 법시행령 제24조제2항에 따른 손해배상책임 보장
        증명서류(사본 또는 전자문서)를 수령합니다.
      </div>
      <div className=" m-2 flex justify-end w-full">
        <ContractDate />
      </div>
    </div>
  );
};
export default Signiture;
