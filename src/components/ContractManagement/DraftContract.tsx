import DraftBtn from "./DraftBtn";
import DraftDropdown from "./DraftDropDown";
import SearchInput from "./SearchInput";

const DraftContract = () => {
  const contractType = [
    "아파트",
    "주상복합",
    "오피스텔",
    "도시형생활주택",
    "상가",
    "사무실",
    "연립",
    "다세대",
    "아파트분양권",
    "주상복합분양권",
  ];
  const transactionType = ["매매", "전세", "월세", "연세"];
  return (
    <div className="bg-white w-[584px] h-[364px] flex flex-col items-center justify-center rounded-lg">
      <div className="w-[477px]">
        <span className="text-[23px] font-bold">계약서 작성</span>
        <div className="mt-4 text-[15px] font-bold">계약서 선택</div>

        <div className="flex justify-between mt-4">
          <div className="flex items-center">
            <div className=" mr-4 text-[13px] font-bold">계약서 종류</div>
            <DraftDropdown items={contractType} />
          </div>
          <div className="flex items-center">
            <div className=" mr-4 text-[13px] font-bold">거래 유형</div>
            <DraftDropdown items={transactionType} />
          </div>
        </div>
        <div className="text-[13px] font-bold my-4">주소 입력</div>
        <SearchInput />
        <div className="flex items-center justify-center gap-2 mt-7">
          <DraftBtn />
          <DraftBtn
            color="#335995"
            borderColor="#335995"
            text="계약서 작성"
            textColor="white"
          />
        </div>
      </div>
    </div>
  );
};
export default DraftContract;
