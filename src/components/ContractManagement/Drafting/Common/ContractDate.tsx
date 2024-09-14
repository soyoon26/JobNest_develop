import { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import { AiOutlineCalendar } from "react-icons/ai";
import "react-datepicker/dist/react-datepicker.css";

const ContractDate = () => {
  const [date, setDate] = useState<Date | null>(null);
  const datePickerRef = useRef<DatePicker | null>(null);

  const handleIconClick = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true);
    }
  };

  return (
    <div className="w-[182px] mx-2 relative">
      <div className="relative">
        <DatePicker
          ref={datePickerRef}
          selected={date}
          onChange={(selectedDate) => setDate(selectedDate)}
          dateFormat="yyyy.MM.dd"
          placeholderText="YYYY.MM.DD"
          className="w-full h-[32px] border border-gray-300 rounded focus:ring-0 text-[12px] pl-3 pr-10"
          popperPlacement="bottom-start"
        />
        <AiOutlineCalendar
          className="absolute transform -translate-y-1/2 cursor-pointer right-2 top-1/2"
          onClick={handleIconClick}
        />
      </div>
    </div>
  );
};

export default ContractDate;
