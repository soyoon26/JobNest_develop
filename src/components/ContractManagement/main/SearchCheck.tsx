import React, { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";

interface CheckboxOption {
  label: string;
}

interface CheckboxGroupProps {
  options: CheckboxOption[];
}

const SearchCheck: React.FC<CheckboxGroupProps> = ({ options }) => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (label: string) => {
    setSelected(selected === label ? null : label);
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
            checked={selected === option.label}
            onChange={() => handleSelect(option.label)}
            className="hidden"
          />

          <div className="w-[21px] h-[21px] rounded border border-[#D9D9D9] flex items-center justify-center cursor-pointer">
            {selected === option.label && (
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
