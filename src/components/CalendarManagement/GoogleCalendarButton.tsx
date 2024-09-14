import React, { useState } from 'react';

interface GoogleCalendarButtonProps {
  toggleCalendar: (isVisible: boolean) => void;  
}

const GoogleCalendarButton: React.FC<GoogleCalendarButtonProps> = ({ toggleCalendar }) => {
  const [isCalendarVisible, setIsCalendarVisible] = useState(true);

  const handleClick = () => {
    const newVisibility = !isCalendarVisible;
    setIsCalendarVisible(newVisibility);
    toggleCalendar(newVisibility);
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-5 right-5 w-[140px] h-[40px] font-semibold rounded-md transition-colors duration-300 ${
        isCalendarVisible
          ? 'bg-[#0066FF] text-white'
          : 'bg-white text-[#0066FF] border-2 border-[#0066FF]'
      }`}
    >
      {isCalendarVisible ? '구글 달력 숨기기' : '구글 달력 보기'}
    </button>
  );
};

export default GoogleCalendarButton;
