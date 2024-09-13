import { useState } from "react";
import DatePicker from "react-datepicker";
import { AiOutlineCalendar } from "react-icons/ai";
import "react-datepicker/dist/react-datepicker.css";

const ContractDate = () => {
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
    <div className="w-[182px] mx-2 relative">
      <div className="relative">
        <DatePicker
          selected={date}
          onChange={(selectedDate) => {
            if (selectedDate) {
              setDate(selectedDate);
            }
          }}
          dateFormat="yyyy.MM.dd"
          className="w-full h-[32px] border focus:ring-0 text-[12px] pl-3 pr-10"
          popperPlacement="bottom-start"
          onFocus={(e) => e.target.blur()}
        />
        <AiOutlineCalendar
          className="absolute text-gray-500 transform -translate-y-1/2 cursor-pointer right-2 top-1/2"
          onClick={handleIconClick}
        />
      </div>
    </div>
  );
};

export default ContractDate;
