import Btn from "./Btn";
import clipboard from "../../../assets/images/clipboard.png";
import SearchDropDown from "./SearchDropDown";
import SearchCheck from "./SearchCheck";
import SearchDate from "./SearchDate";
import { FiSearch, FiRefreshCw } from "react-icons/fi";
import SearchBtn from "./SearchBtn";
import { useState } from "react";
import SearchResults from "./SearchResults";

interface SearchProps {
  onCreateDraft: () => void;
}

const Search: React.FC<SearchProps> = ({ onCreateDraft }) => {
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

  const [selectedContractType, setSelectedContractType] = useState<
    string | null
  >(null);
  const [selectedTransactionType, setSelectedTransactionType] = useState<
    string | null
  >(null);
  const [selectedContractStatus, setSelectedContractStatus] = useState<
    string | null
  >(null);
  const [selectedBrokerageType, setSelectedBrokerageType] = useState<
    string | null
  >(null);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [selectedPeriod, setSelectedPeriod] = useState<string>("");

  const resetAll = () => {
    setSelectedContractType(null);
    setSelectedTransactionType(null);
    setSelectedContractStatus(null);
    setSelectedBrokerageType(null);
    setStartDate(new Date());
    setEndDate(new Date());
    setSelectedPeriod("");
  };

  return (
    <div>
      <div className="flex  w-[1142px] mt-[80px] justify-between">
        <div className="flex items-center mb-4">
          <img src={clipboard} alt="Clipboard" className="w-[23px] h-[23px]" />
          <span className="text-[23px]  font-bold">계약관리</span>
        </div>
        <Btn onClick={onCreateDraft} />
      </div>
      <div className="bg-white w-[1142px] h-[457px] flex justify-center">
        <h1>
          <div className="text-[20px] font-bold my-4">계약서 검색</div>
          <div className="w-[1076px] h-[1px] bg-black"></div>
          <div className="flex items-center">
            <div className="text-[13px] w-[100px] my-4 font-bold">날짜조회</div>
            <SearchDate
              startDate={startDate}
              endDate={endDate}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
              selectedPeriod={selectedPeriod}
              setSelectedPeriod={setSelectedPeriod}
            />
          </div>
          <div className="w-[1076px] h-[1px] bg-[#CCCCCC]"></div>
          <div className="flex items-center">
            <div className="w-[500px] flex items-center">
              <div className="text-[13px] my-4 font-bold w-[100px]">
                계약서 종류
              </div>
              <SearchDropDown
                items={contractType}
                selectedItem={selectedContractType}
                onSelect={setSelectedContractType}
              />
            </div>
            <div className="text-[13px] my-4 font-bold w-[100px]">
              계약서상태
            </div>
            <SearchCheck
              options={contractStatusOptions}
              selectedOption={selectedContractStatus}
              onSelect={setSelectedContractStatus}
            />
          </div>
          <div className="w-[1076px] h-[1px] bg-[#CCCCCC]"></div>
          <div className="flex items-center">
            <div className="flex w-[500px] items-center">
              <div className="text-[13px] my-4 font-bold w-[100px]">
                거래유형
              </div>
              <SearchDropDown
                items={transactionType}
                selectedItem={selectedTransactionType}
                onSelect={setSelectedTransactionType}
              />
            </div>
            <div className="text-[13px] my-4 font-bold w-[100px]">중개유형</div>
            <SearchCheck
              options={brokerageTypeOptions}
              selectedOption={selectedBrokerageType}
              onSelect={setSelectedBrokerageType}
            />
          </div>
          <div className="w-[1076px] h-[1px] bg-[#CCCCCC]"></div>
          <div className="flex justify-center gap-2 mt-6">
            <SearchBtn
              icon={<FiRefreshCw />}
              text="초기화"
              borderColor="gray"
              textColor="black"
              onClick={resetAll}
            />

            <SearchBtn
              icon={<FiSearch />}
              text="검색"
              borderColor="#335995"
              textColor="#335995"
              onClick={() => {}}
            />
          </div>
        </h1>
      </div>
      <SearchResults />
    </div>
  );
};

export default Search;
