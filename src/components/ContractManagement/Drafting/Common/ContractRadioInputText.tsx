import React, { useState } from "react";

interface ContractRadioInputTextProps {
  options: { label: string; value: string }[];
  inputLabel: string;
  inputWidth: string;
  unit?: string;
}

const ContractRadioInputText: React.FC<ContractRadioInputTextProps> = ({
  options,
  inputLabel,
  inputWidth,
  unit,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="flex flex-wrap items-center">
      {options.slice(0, -1).map((option, index) => (
        <label key={index} className="flex items-center mb-2 mr-2 space-x-2">
          <input
            type="radio"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={handleRadioChange}
          />
          <span>{option.label}</span>
        </label>
      ))}

      <div className="flex items-center mb-2 space-x-2">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            value={options[options.length - 1].value}
            checked={selectedOption === options[options.length - 1].value}
            onChange={handleRadioChange}
          />
          <span>{options[options.length - 1].label}</span>
        </label>

        <span>({inputLabel}</span>
        <input
          type="text"
          disabled={selectedOption !== "exists"}
          className="px-2 border border-gray-300 rounded"
          style={{ width: inputWidth }}
        />
        {unit && <span>{unit}</span>}
        <span>)</span>
      </div>
    </div>
  );
};

export default ContractRadioInputText;
