import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

interface CheckboxOption {
  label: string;
}

interface SearchCheckProps {
  options: CheckboxOption[];
  selectedOption: string | null;
  onSelect: (option: string) => void;
}

const SearchCheck: React.FC<SearchCheckProps> = ({
  options,
  selectedOption,
  onSelect,
}) => {
  const handleSelect = (label: string) => {
    onSelect(selectedOption === label ? "" : label);
  };

  return (
    <div className="flex space-x-4">
      {options.map((option) => (
        <label
          key={option.label}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <input
            type="checkbox"
            checked={selectedOption === option.label}
            onChange={() => handleSelect(option.label)}
            className="hidden"
          />
          <div className="w-[21px] h-[21px] rounded border border-[#D9D9D9] flex items-center justify-center cursor-pointer">
            {selectedOption === option.label && (
              <AiOutlineCheck className="text-black" />
            )}
          </div>
          <span className="font-bold text-[13px] text-black">
            {option.label}
          </span>
        </label>
      ))}
    </div>
  );
};

export default SearchCheck;
