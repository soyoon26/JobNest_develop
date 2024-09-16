import React from "react";

interface SearchRadioProps {
  options: string[];
  selectedPeriod: string;
  onPeriodChange: (period: string) => void;
}

const SearchRadio: React.FC<SearchRadioProps> = ({
  options,
  selectedPeriod,
  onPeriodChange,
}) => {
  const handleSelect = (option: string) => {
    onPeriodChange(option);
  };

  return (
    <div className="flex items-center ml-4 space-x-4">
      {options.map((option) => (
        <label
          key={option}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <input
            type="radio"
            name="period"
            value={option}
            checked={selectedPeriod === option}
            onChange={() => handleSelect(option)}
            className="hidden"
          />
          <div
            className={`w-[21px] h-[21px] rounded-full border border-[#D9D9D9] flex items-center justify-center cursor-pointer ${
              selectedPeriod === option ? "border-black" : ""
            }`}
          >
            {selectedPeriod === option && (
              <div className="w-[11px] h-[11px] bg-black rounded-full"></div>
            )}
          </div>
          <span className="font-medium text-[13px] text-black">{option}</span>
        </label>
      ))}
    </div>
  );
};

export default SearchRadio;
