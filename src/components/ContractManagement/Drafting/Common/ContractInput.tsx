import React from "react";

interface ContractInputProps {
  width: string;
}

const ContractInput: React.FC<ContractInputProps> = ({ width }) => {
  return (
    <input
      type="text"
      className={`border border-32 focus:outline-none px-3`}
      style={{ width }}
    />
  );
};

export default ContractInput;
