import React, { useState } from "react";

interface ContractRadioInputProps {
  options: { label: string; value: string }[];
  otherOptionLabel: string;
  inputWidth: string;
}

const ContractRadioInput: React.FC<ContractRadioInputProps> = ({
  options,
  otherOptionLabel,
  inputWidth,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [otherValue, setOtherValue] = useState<string>("");

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
    setOtherValue("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtherValue(e.target.value);
    setSelectedOption("other");
  };

  return (
    <div className="flex flex-wrap mt-1">
      {options.map((option, index) => (
        <label key={index} className="flex items-center mr-4 space-x-1">
          <input
            type="radio"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={handleRadioChange}
          />
          <span>{option.label}</span>
        </label>
      ))}

      <label className="flex items-center mr-4 space-x-2">
        <input
          type="radio"
          value="other"
          checked={selectedOption === "other"}
          onChange={handleRadioChange}
        />
        <span>{otherOptionLabel} (</span>
        <input
          type="text"
          value={otherValue}
          onChange={handleInputChange}
          disabled={selectedOption !== "other"}
          className="px-2 border border-gray-300 rounded"
          style={{ width: inputWidth }}
        />
        <span>)</span>
      </label>
    </div>
  );
};

export default ContractRadioInput;
