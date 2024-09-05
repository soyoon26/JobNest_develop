import React from "react";

interface DraftBtnProps {
  color?: string; // 버튼 배경색
  borderColor?: string; // 보더 색상
  text?: string; // 버튼에 들어갈 텍스트
  textColor?: string; // 버튼 텍스트 색상
  onClick?: () => void; // 클릭 시 동작
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
