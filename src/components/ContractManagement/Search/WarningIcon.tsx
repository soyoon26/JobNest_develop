import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

const WarningIcon: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-24">
      <FaExclamationTriangle size={72} color="gray" />
      <span className="text-[25px] font-bold mt-4">리스트가 없습니다.</span>
    </div>
  );
};

export default WarningIcon;
