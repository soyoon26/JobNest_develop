import React from "react";

interface TopBtnProps {
  text: string;
  isSelected: boolean;
  width?: string;
  defaultBackgroundColor?: string;
  defaultBorderColor?: string;
  defaultTextColor?: string;
  selectedBackgroundColor?: string;
  selectedBorderColor?: string;
  selectedTextColor?: string;
  onClick?: () => void;
}

const TopBtn: React.FC<TopBtnProps> = ({
  text,
  isSelected,
  width,
  defaultBackgroundColor = "white",
  defaultBorderColor = "gray",
  defaultTextColor = "gray",
  selectedBackgroundColor = "#A0BCEB",
  selectedBorderColor = "#335995",
  selectedTextColor = "#335995",
  onClick,
}) => {
  return (
    <button
      className={`font-bold h-[43px] text-[17px] rounded-3xl border`}
      style={{
        width: width,
        backgroundColor: isSelected
          ? selectedBackgroundColor
          : defaultBackgroundColor,
        borderColor: isSelected ? selectedBorderColor : defaultBorderColor,
        color: isSelected ? selectedTextColor : defaultTextColor,
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default TopBtn;
