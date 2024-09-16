import React, { useState } from 'react';

interface GoogleCalendarButtonProps {
  toggleCalendar: (isVisible: boolean) => void;  // Props to toggle calendar visibility
}

const GoogleCalendarButton: React.FC<GoogleCalendarButtonProps> = ({ toggleCalendar }) => {
  const [isCalendarVisible, setIsCalendarVisible] = useState(true);

  const handleClick = () => {
    const newVisibility = !isCalendarVisible;
    setIsCalendarVisible(newVisibility);
    toggleCalendar(newVisibility);  // Trigger the parent handler to toggle calendar
  };

  return (
    <button
  onClick={handleClick}
  className={`fixed bottom-[50px] right-[20px] w-[140px] h-[40px] font-semibold rounded-md transition-colors duration-300 ${
    isCalendarVisible
      ? 'bg-[#347FFF] text-white'
      : 'bg-white text-[#347FFF] border-2 border-[#347FFF]'
  }`}
  style={{ zIndex: 5000, transform: 'scale(1.00)' }}  // z-index 5000으로 설정
>
  {isCalendarVisible ? '구글 달력 숨기기' : '구글 달력 보기'}
</button>
  );
};

export default GoogleCalendarButton;
