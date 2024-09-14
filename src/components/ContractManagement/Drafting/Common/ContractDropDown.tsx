import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface DropdownProps {
  items: string[];
  width?: string;
}

const ContractDropDown: React.FC<DropdownProps> = ({
  items,
  width = "1196px",
}) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(
    items.length > 0 ? items[0] : null
  );
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className={`relative mx-4 h-[30px]`} style={{ width }}>
      <button
        onClick={toggleDropdown}
        className="w-full h-full rounded border border-[#CCCCCC] bg-white text-[14px] flex items-center justify-between px-2"
      >
        <span>{selectedItem}</span>
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

export default ContractDropDown;
