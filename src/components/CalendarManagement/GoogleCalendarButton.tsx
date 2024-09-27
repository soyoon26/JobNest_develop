import React, { useState } from 'react';
import FullCalendarComponent from './FullCalendarComponent';

interface GoogleCalendarButtonProps {
  isLoggedIn: boolean;
  toggleCalendar: (isVisible: boolean) => void;
}

const GoogleCalendarButton: React.FC<GoogleCalendarButtonProps> = ({
  isLoggedIn,
  toggleCalendar,
}) => {
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);

  const handleClick = () => {
    if (isLoggedIn) {
      setIsCalendarVisible(!isCalendarVisible); // Toggle the visibility state
      toggleCalendar(!isCalendarVisible); // Pass the state back to the parent component
    } else {
      alert('로그인 후 구글 달력에 접근 가능합니다.'); // Show alert if not logged in
    }
  };

  return (
    <div>
      <div className='mt-[20px]'>
        <button
          onClick={handleClick}
          className='bg-[#347fff] text-white w-[136px] h-[42px] rounded-md shadow-md text-[15px] font-extrabold'
        >
          구글 캘린더
        </button>
      </div>
      {isCalendarVisible && (
        <FullCalendarComponent
          handleAlert={() => {}}
          handleEventNotification={() => {}}
          onEventSave={() => {}}
        />
      )}
    </div>
  );
};

export default GoogleCalendarButton;
