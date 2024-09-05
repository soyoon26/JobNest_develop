import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
interface DropdownProps {
  items: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="relative w-[132px] h-[26px]">
      <button
        onClick={toggleDropdown}
        className="w-full h-full rounded border border-[#6F6F6F] bg-white text-[#6F6F6F] text-sm flex items-center justify-between px-2"
      >
        <span>{selectedItem || "선택"}</span>
        <FaChevronDown className="text-[#6F6F6F] text-sm" />
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-full bg-white border border-[#6F6F6F] rounded max-h-40 overflow-y-auto z-10 custom-scrollbar">
          {items.length > 0 ? (
            items.map((item, index) => (
              <div
                key={index}
                onClick={() => handleItemClick(item)}
                className="px-2 py-1 text-[#6F6F6F] text-sm cursor-pointer hover:bg-gray-100 rounded"
              >
                {item}
              </div>
            ))
          ) : (
            <div className="px-2 py-1 text-[#6F6F6F] text-sm">No items</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
