interface ContractBtnProps {
  color?: string;
  borderColor?: string;
  text?: string;
  textColor?: string;
  onClick?: () => void;
}
const ContractBtn: React.FC<ContractBtnProps> = ({
  color = "white",
  borderColor = "#D9D9D9",
  text = "출력",
  textColor = "#335995",
}) => {
  return (
    <>
      <button
        style={{
          backgroundColor: color,
          borderColor: borderColor,
          color: textColor,
        }}
        className="w-[105px] h-[41px] border rounded-md"
      >
        {text}
      </button>
    </>
  );
};
export default ContractBtn;
