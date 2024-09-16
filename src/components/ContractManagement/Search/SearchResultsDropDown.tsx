import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface SearchResultsDropDownProps {
  selectedItem: string | null;
  onSelect: (item: string) => void;
}

const SearchResultsDropDown: React.FC<SearchResultsDropDownProps> = ({
  selectedItem,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const items = ["5개씩 보기", "10개씩 보기", "20개씩 보기"];

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleItemClick = (item: string) => {
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleDropdown}
        className="px-1 w-[96px] h-[36px] rounded border border-gray-300 bg-white text-black text-[13px] font-bold flex items-center justify-between"
      >
        <span>{selectedItem || "10개씩 보기"}</span>
        <FaChevronDown className="text-black text-[14px]" />
      </button>
      {isOpen && (
        <div className="absolute z-10 w-[96px] mt-2 overflow-y-auto bg-white border border-gray-300 rounded max-h-40 custom-scrollbar">
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => handleItemClick(item)}
              className="px-2 py-1 text-black text-[13px] cursor-pointer hover:bg-gray-100 rounded"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResultsDropDown;
