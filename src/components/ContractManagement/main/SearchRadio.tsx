import React, { useEffect, useState } from "react";

interface SearchRadioProps {
  onPeriodChange: (period: string) => void;
  selectedPeriod: string;
}

const SearchRadio: React.FC<SearchRadioProps> = ({
  onPeriodChange,
  selectedPeriod,
}) => {
  const [selected, setSelected] = useState<string | null>(selectedPeriod);

  useEffect(() => {
    setSelected(selectedPeriod);
  }, [selectedPeriod]);

  const options = ["1개월", "3개월", "6개월", "1년"];

  const handleSelect = (option: string) => {
    setSelected(option);
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
            checked={selected === option}
            onChange={() => handleSelect(option)}
            className="hidden"
          />
          <div
            className={`w-[21px] h-[21px] rounded-full border border-[#D9D9D9] flex items-center justify-center cursor-pointer ${
              selected === option ? "border-black" : ""
            }`}
          >
            {selected === option && (
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
