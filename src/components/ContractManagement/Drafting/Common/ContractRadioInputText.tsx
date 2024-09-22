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
    <div className="flex items-center space-x-4">
      {options.map((option, index) => (
        <label key={index} className="flex items-center space-x-2">
          <input
            type="radio"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={handleRadioChange}
          />
          <span>{option.label}</span>
        </label>
      ))}

      <label className="flex items-center space-x-2">
        <span>({inputLabel}</span>
        <input
          type="text"
          disabled={selectedOption !== "exists"}
          className="px-2 border border-gray-300 rounded"
          style={{ width: inputWidth }}
        />
        {unit && <span>{unit}</span>}
        <span>)</span>
      </label>
    </div>
  );
};

export default ContractRadioInputText;
