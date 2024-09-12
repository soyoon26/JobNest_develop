import { useState } from "react";
import DatePicker from "react-datepicker";
import { AiOutlineCalendar } from "react-icons/ai";
import "react-datepicker/dist/react-datepicker.css";

const ReceiptDate = () => {
  const [date, setDate] = useState(new Date());
  const handleIconClick = () => {
    const inputElement = document.querySelector<HTMLInputElement>(
      ".react-datepicker-wrapper input"
    );
    if (inputElement) {
      inputElement.focus();
    }
  };
  return (
    <div className="relative flex items-center border border-gray-300 rounded w-[181px] h-[36px] px-3 py-2">
      <DatePicker
        selected={date}
        onChange={(selectedDate) => {
          if (selectedDate) {
            setDate(selectedDate);
          }
        }}
        dateFormat="yyyy.MM.dd"
        className="w-full h-full border-none focus:ring-0 text-[12px]"
        popperPlacement="bottom-start"
        onFocus={(e) => e.target.blur()}
      />
      <AiOutlineCalendar
        className="absolute text-gray-500 cursor-pointer right-2"
        onClick={handleIconClick}
      />
    </div>
  );
};

export default ReceiptDate;
