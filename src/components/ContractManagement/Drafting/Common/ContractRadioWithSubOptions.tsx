import React, { useState } from "react";

interface SubOption {
  label: string;
  value: string;
}

interface MainOption {
  label: string;
  value: string;
  subOptions?: SubOption[];
}

interface ContractRadioWithSubOptionsProps {
  mainOptions: MainOption[];
}

const ContractRadioWithSubOptions: React.FC<
  ContractRadioWithSubOptionsProps
> = ({ mainOptions }) => {
  const [selectedMainOption, setSelectedMainOption] = useState<string>("");
  const [selectedSubOption, setSelectedSubOption] = useState<string>("");

  const handleMainOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedMainOption(value);

    if (!mainOptions.find((option) => option.value === value)?.subOptions) {
      setSelectedSubOption("");
    }
  };

  const handleSubOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSubOption(e.target.value);
  };

  return (
    <div className="flex items-center space-x-4">
      {mainOptions.map((option, index) => (
        <React.Fragment key={index}>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              value={option.value}
              checked={selectedMainOption === option.value}
              onChange={handleMainOptionChange}
            />
            <span>{option.label}</span>
          </label>

          {option.subOptions && (
            <div className="flex items-center space-x-2">
              <span>(</span>
              {option.subOptions.map((subOption, subIndex) => (
                <label key={subIndex} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value={subOption.value}
                    checked={selectedSubOption === subOption.value}
                    onChange={handleSubOptionChange}
                    disabled={selectedMainOption !== option.value}
                  />
                  <span>{subOption.label}</span>
                </label>
              ))}
              <span>)</span>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ContractRadioWithSubOptions;
