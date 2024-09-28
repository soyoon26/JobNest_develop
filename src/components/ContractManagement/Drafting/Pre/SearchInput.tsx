import React, { useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";

interface SearchInputProps {
  value: string;
  onChange: (detailAddress: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
  const [results, setResults] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const fetchData = async () => {
    if (value) {
      try {
        const url = `${import.meta.env.VITE_BASE_URL}/juso/search`;

        const response = await axios.post(
          url,
          {
            juso: value,
            page_no: 5,
          },
          {
            headers: {
              "Referrer-Policy": "no-referrer",
            },
          }
        );

        const filteredResults = response.data.result.map(
          (item: { address: string }) => item.address
        );
        setResults(filteredResults);
        setShowDropdown(true);
      } catch (error) {
        console.error(error);
        setShowDropdown(false);
        alert("검색 결과가 없습니다.");
      }
    } else {
      setResults([]);
      setShowDropdown(false);
    }
  };

  return (
    <div className="relative">
      <div className="relative mt-2 w-[477px] h-[26px]">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="주소를 검색해주세요. 예시)궁동 201-4"
          className="w-full h-full px-3 py-1.5 text-xs text-[#6F6F6F] border border-[#6F6F6F] rounded-md pr-10"
          onKeyDown={(e) => {
            if (e.key === "Enter") fetchData();
          }}
        />
        <div
          className="absolute transform -translate-y-1/2 cursor-pointer right-2 top-1/2"
          onClick={fetchData}
        >
          <FaSearch className="text-[#6F6F6F]" />
        </div>
      </div>

      {showDropdown && (
        <ul className="absolute z-10 w-full mt-1 overflow-auto bg-white border border-gray-300 rounded-md max-h-60">
          {results.map((result, index) => (
            <li
              key={index}
              className="px-3 py-1 text-sm text-[#6F6F6F] hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                onChange(result);
                setShowDropdown(false);
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
