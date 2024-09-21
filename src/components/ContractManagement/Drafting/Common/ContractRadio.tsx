import React from "react";

interface ContractRadioProps {
  options: { label: string }[];
  name: string;
}

const ContractRadio: React.FC<ContractRadioProps> = ({ options, name }) => {
  return (
    <div className="flex items-center space-x-6">
      {options.map((option, index) => (
        <label key={index} className="flex items-center space-x-2">
          <input
            type="radio"
            name={name}
            className="text-gray-600 form-radio"
          />
          <span className="text-black ">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default ContractRadio;
