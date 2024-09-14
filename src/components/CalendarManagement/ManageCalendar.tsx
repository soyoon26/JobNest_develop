import React, { useState } from 'react';
import GoogleCalendarAuth from './GoogleCalendarAuth';
import FullCalendarComponent from './FullCalendarComponent';
import GoogleCalendarButton from './GoogleCalendarButton';

const ManageCalendar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);  // 로그인 상태
  const [isCalendarVisible, setIsCalendarVisible] = useState(true);  // 달력 표시 여부

  // 로그인 성공 시 호출되는 함수
  const handleLoginSuccess = () => {
    setIsAuthenticated(true);  // 로그인 성공 시 상태 업데이트
  };

  // 달력 보임/숨김 상태 토글 함수
  const toggleCalendarVisibility = (isVisible: boolean) => {  // boolean 타입 명시
    setIsCalendarVisible(isVisible);  // 달력 상태 업데이트
  };

  return (
    <div>
      {/* 로그인되지 않은 경우 Google 인증 컴포넌트 표시 */}
      {!isAuthenticated ? (
        <GoogleCalendarAuth onSuccess={handleLoginSuccess} />
      ) : (
        <>
          {/* 로그인 후 달력 보임/숨김 상태에 따라 FullCalendarComponent 표시 */}
          <FullCalendarComponent isVisible={isCalendarVisible} />
          
          {/* GoogleCalendarButton으로 달력 상태 토글 */}
          <GoogleCalendarButton toggleCalendar={toggleCalendarVisibility} />
        </>
      )}
    </div>
  );
};

export default ManageCalendar;
