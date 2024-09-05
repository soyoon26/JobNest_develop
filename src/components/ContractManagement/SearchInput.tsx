import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchInput: React.FC = () => {
  return (
    <div className="relative w-[477px] h-[26px]">
      <input
        type="text"
        placeholder="주소를 입력해주세요"
        className="w-full h-full px-3 py-1.5 text-xs text-[#6F6F6F] border border-[#6F6F6F] rounded-md pr-10"
      />
      <div className="absolute transform -translate-y-1/2 right-2 top-1/2">
        <FaSearch className="text-[#6F6F6F]" />
      </div>
    </div>
  );
};

export default SearchInput;
