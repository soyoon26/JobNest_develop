import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineCalendar } from "react-icons/ai";
import SearchRadio from "./SearchRadio";

interface SearchDateProps {
  startDate: Date | null;
  endDate: Date | null;
  setStartDate: (date: Date | null) => void;
  setEndDate: (date: Date | null) => void;
  selectedPeriod: string;
  setSelectedPeriod: (period: string) => void;
}

const addPeriodToDate = (startDate: Date, period: string): Date => {
  const newDate = new Date(startDate);
  switch (period) {
    case "1개월":
      newDate.setMonth(newDate.getMonth() + 1);
      break;
    case "3개월":
      newDate.setMonth(newDate.getMonth() + 3);
      break;
    case "6개월":
      newDate.setMonth(newDate.getMonth() + 6);
      break;
    case "1년":
      newDate.setFullYear(newDate.getFullYear() + 1);
      break;
    default:
      break;
  }
  return newDate;
};

const SearchDate: React.FC<SearchDateProps> = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  selectedPeriod,
  setSelectedPeriod,
}) => {
  const handleStartDateChange = (date: Date | null): void => {
    if (date) {
      if (endDate && endDate < date) {
        alert("시작 날짜는 종료 날짜보다 늦을 수 없습니다.");
        return;
      }
      setStartDate(date);
      setSelectedPeriod("");
    }
  };

  const handleEndDateChange = (date: Date | null): void => {
    if (date) {
      if (date && date < startDate!) {
        alert("종료 날짜는 시작 날짜보다 빠를 수 없습니다.");
        return;
      }
      setEndDate(date);
      setSelectedPeriod("");
    }
  };

  const handlePeriodChange = (period: string) => {
    setSelectedPeriod(period);
    if (startDate) {
      setEndDate(addPeriodToDate(startDate, period));
    }
  };

  return (
    <div className="flex items-center space-x-4">
      <div className="relative flex items-center border border-gray-300 rounded w-[111px] h-[36px] px-3 py-2">
        <DatePicker
          selected={startDate}
          onChange={handleStartDateChange}
          dateFormat="yyyy.MM.dd"
          className="w-full h-full border-none focus:ring-0 text-[12px]"
          popperPlacement="bottom-start"
          preventOpenOnFocus
        />
        <AiOutlineCalendar className="absolute text-gray-500 cursor-pointer right-2" />
      </div>

      <span>~</span>

      <div className="relative flex items-center border border-gray-300 rounded w-[111px] h-[36px] px-3 py-2">
        <DatePicker
          selected={endDate}
          onChange={handleEndDateChange}
          dateFormat="yyyy.MM.dd"
          className="w-full h-full border-none focus:ring-0 text-[12px]"
          popperPlacement="bottom-start"
          preventOpenOnFocus
        />
        <AiOutlineCalendar className="absolute text-gray-500 cursor-pointer right-2" />
      </div>

      <SearchRadio
        options={["1개월", "3개월", "6개월", "1년"]}
        selectedPeriod={selectedPeriod}
        onPeriodChange={handlePeriodChange}
      />
    </div>
  );
};

export default SearchDate;
