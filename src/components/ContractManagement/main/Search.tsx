import Btn from "./Btn";
import clipboard from "../../../assets/images/clipboard.png";
import SearchDropDown from "./SearchDropDown";
import SearchCheck from "./SearchCheck";
import SearchDate from "./SearchDate";
const Search = () => {
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
  const contractStatusOptions = [
    { label: "전체" },
    { label: "계약중" },
    { label: "계약완료" },
  ];

  const brokerageTypeOptions = [{ label: "공동중개" }, { label: "단독중개" }];
  return (
    <div>
      <div className="flex  w-[1142px] mt-[80px] justify-between">
        <div className="flex items-center mb-4">
          <img src={clipboard} alt="Clipboard" className="w-[23px] h-[23px]" />
          <span className="text-[23px]  font-bold">계약관리</span>
        </div>
        <Btn />
      </div>
      <div className="bg-white w-[1142px] h-[457px] flex justify-center">
        <h1>
          <div className="text-[20px] font-bold my-4">계약서 검색</div>
          <div className="w-[1076px] h-[1px] bg-black"></div>
          <div className="flex items-center">
            <div className="text-[13px] w-[100px] my-4 font-bold">날짜조회</div>
            <SearchDate />
          </div>
          <div className="w-[1076px] h-[1px] bg-[#CCCCCC]"></div>
          <div className="flex items-center">
            <div className="w-[500px] flex items-center">
              <div className="text-[13px] my-4 font-bold w-[100px]">
                계약서 종류
              </div>
              <SearchDropDown items={contractType} />
            </div>
            <div className="text-[13px] my-4 font-bold w-[100px]">
              계약서상태
            </div>
            <SearchCheck options={contractStatusOptions} />
          </div>
          <div className="w-[1076px] h-[1px] bg-[#CCCCCC]"></div>
          <div className="flex items-center">
            <div className="flex w-[500px] items-center">
              <div className="text-[13px] my-4 font-bold w-[100px]">
                거래유형
              </div>
              <SearchDropDown items={transactionType} />
            </div>
            <div className="text-[13px] my-4 font-bold w-[100px]">중개유형</div>
            <SearchCheck options={brokerageTypeOptions} />
          </div>
          <div className="w-[1076px] h-[1px] bg-[#CCCCCC]"></div>
        </h1>
      </div>
    </div>
  );
};
export default Search;
