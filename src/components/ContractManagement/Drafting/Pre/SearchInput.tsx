import React, { useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";

interface SearchInputProps {
  value: string; // 선택된 주소 값
  onChange: (detailAddress: string) => void; // 선택된 주소를 부모 컴포넌트로 전달하는 함수
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
  const [searchTerm, setSearchTerm] = useState<string>(""); // 검색어 상태
  const [results, setResults] = useState<string[]>([]); // 검색 결과 상태
  const [showDropdown, setShowDropdown] = useState<boolean>(false); // 드롭다운 표시 여부

  // API 요청 함수
  const fetchData = async () => {
    if (searchTerm) {
      try {
        const response = await axios.post(
          "https://test-dm.store/juso/search", // 서버 요청 URL
          {
            juso: searchTerm, // 입력된 검색어
            page_no: 5,
          },
          {
            headers: {
              "Referrer-Policy": "no-referrer", // 헤더 설정
            },
          }
        );

        const filteredResults = response.data.result.map(
          (item: { address: string }) => item.address
        );
        setResults(filteredResults); // 검색 결과 업데이트
        setShowDropdown(true); // 드롭다운 표시
      } catch (error) {
        console.error(error);
        setShowDropdown(false);
        alert("검색 결과가 없습니다."); // 에러 발생 시 알림
      }
    } else {
      setResults([]);
      setShowDropdown(false); // 검색어 없으면 드롭다운 숨김
    }
  };

  return (
    <div className="relative">
      <div className="relative mt-2 w-[477px] h-[26px]">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="상세주소를 입력해주세요"
          className="w-full h-full px-3 py-1.5 text-xs text-[#6F6F6F] border border-[#6F6F6F] rounded-md pr-10"
          onKeyDown={(e) => {
            if (e.key === "Enter") fetchData(); // Enter 키로 검색 실행
          }}
        />
        <div
          className="absolute transform -translate-y-1/2 cursor-pointer right-2 top-1/2"
          onClick={fetchData} // 돋보기 클릭 시 검색 실행
        >
          <FaSearch className="text-[#6F6F6F]" />
        </div>
      </div>

      {/* 검색 결과 드롭다운 */}
      {showDropdown && (
        <ul className="absolute z-10 w-full mt-1 overflow-auto bg-white border border-gray-300 rounded-md max-h-60">
          {results.map((result, index) => (
            <li
              key={index}
              className="px-3 py-1 text-sm text-[#6F6F6F] hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                onChange(result); // 선택된 주소를 부모 컴포넌트로 전달
                setSearchTerm(result); // 선택된 주소로 입력창 업데이트
                setShowDropdown(false); // 드롭다운 숨기기
              }}
            >
              {result}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchInput;
