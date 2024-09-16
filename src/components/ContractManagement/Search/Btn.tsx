import React from "react";

interface BtnProps {
  onClick: () => void;
}

const Btn: React.FC<BtnProps> = ({ onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="border-2 bg-white w-[140px] font-semibold h-[36px] border-[#335995] text-[#335995] rounded-md"
      >
        ✍ 계약서 작성하기
      </button>
    </>
  );
};

export default Btn;
