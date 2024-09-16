interface SearchResultBtnProps {
  text: string;
  borderColor: string;
  textColor: string;
  width: number;

  onClick: () => void;
}

const SearchResultsBtn: React.FC<SearchResultBtnProps> = ({
  text,
  textColor,
  borderColor,

  width,

  onClick,
}) => {
  return (
    <button
      className={`border bg-white font-bold text-[13px] h-[36px] rounded `}
      style={{
        width: `${width}px`,
        borderColor: borderColor,
        color: textColor,
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default SearchResultsBtn;
