import React from "react";

interface DraftBtnProps {
  color?: string;
  borderColor?: string;
  text?: string;
  textColor?: string;
  onClick?: () => void;
}

const DraftBtn: React.FC<DraftBtnProps> = ({
  color = "white",
  borderColor = "#D9D9D9",
  text = "취소",
  textColor = "black",
  onClick,
}) => {
  return (
    <button
      style={{
        backgroundColor: color,
        borderColor: borderColor,
        color: textColor,
      }}
      className="w-[96px] h-[36px] text-[13px] rounded-lg font-bold border"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default DraftBtn;
