import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineCalendar } from "react-icons/ai";
import SearchRadio from "./SearchRadio";

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

const SearchDate: React.FC = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [selectedPeriod, setSelectedPeriod] = useState<string>("");

  const handleStartDateChange = (date: Date | null): void => {
    if (date) {
      if (endDate < date) {
        alert("시작 날짜는 종료 날짜보다 늦을 수 없습니다.");
        return;
      }
      setStartDate(date);
      if (selectedPeriod) {
        setEndDate(addPeriodToDate(date, selectedPeriod));
        setSelectedPeriod("");
      }
    }
  };

  const handleEndDateChange = (date: Date | null): void => {
    if (date) {
      if (date < startDate) {
        alert("종료 날짜는 시작 날짜보다 빠를 수 없습니다.");
        return;
      }
      setEndDate(date);
      setSelectedPeriod("");
    }
  };

  const handlePeriodSelect = (period: string): void => {
    setSelectedPeriod(period);
    setEndDate(addPeriodToDate(startDate, period));
  };

  return (
    <div className="flex items-center space-x-4">
      {/* <div className="relative">
        <select className="px-3 py-2 border border-gray-300 rounded cursor-pointer">
          <option>전체</option>
          <option>일별</option>
          <option>주별</option>
          <option>월별</option>
        </select>
      </div> */}

      <div className="relative flex items-center border border-gray-300 rounded w-[111px] h-[36px] px-3 py-2">
        <DatePicker
          selected={startDate}
          onChange={handleStartDateChange}
          dateFormat="yyyy.MM.dd"
          className="w-full h-full border-none focus:ring-0 text-[12px]"
          popperPlacement="bottom-start"
          preventOpenOnFocus
          onClickOutside={() => {}}
        />
        <AiOutlineCalendar
          className="absolute text-gray-500 cursor-pointer right-2"
          onClick={(e) => e.stopPropagation()}
        />
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
          onClickOutside={() => {}}
        />
        <AiOutlineCalendar
          className="absolute text-gray-500 cursor-pointer right-2"
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      <SearchRadio
        onPeriodChange={handlePeriodSelect}
        selectedPeriod={selectedPeriod}
      />
    </div>
  );
};

export default SearchDate;
