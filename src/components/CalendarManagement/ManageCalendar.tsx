import { useState } from 'react';
import GoogleCalendarAuth from './GoogleCalendarAuth';
import FullCalendarComponent from './FullCalendarComponent';
import GoogleCalendarButton from './GoogleCalendarButton';
import TodayMemo from './TodayMemo';
import FlashNotification from './FlashNotification';  // FlashNotification import

const ManageCalendar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // 로그인 상태
  const [isCalendarVisible, setIsCalendarVisible] = useState(true);  // 달력 표시 여부
  const [isMemoVisible, setIsMemoVisible] = useState(true);  // 메모 표시 여부
  const [isFirstMemoSaved, setIsFirstMemoSaved] = useState(false);  // 최초 메모 작성 여부
  const [showNotification, setShowNotification] = useState(true); // 알림 표시 여부
  const [alertMessage, setAlertMessage] = useState<string | null>(null);  // 알림 메시지 상태
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);  // 이벤트 성공/실패 알림 상태

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);  // 로그인 성공 시 상태 업데이트
    setShowNotification(false);  // 구글 로그인 성공 후 알림 숨기기
  };

  const handleMemoSave = () => {
    if (!isFirstMemoSaved) {
      setIsFirstMemoSaved(true);  // 최초 메모 작성 플래그 설정
    }
  };

  const toggleCalendarVisibility = (isVisible: boolean) => {
    setIsCalendarVisible(isVisible); // 달력 상태 업데이트
    setIsMemoVisible(!isVisible);  // 메모 숨김/보임 상태 토글
  };

  const handleAlert = (message: string) => {
    setAlertMessage(message);  // 알림 메시지 업데이트
  };

  const handleEventNotification = (message: string, type: 'success' | 'error') => {
    setNotification({ message, type });  // 이벤트 성공/실패 알림 설정
  };

  return (
    <div>
      {!isAuthenticated ? (
        <GoogleCalendarAuth onSuccess={handleLoginSuccess} />
      ) : (
        <>
          {isMemoVisible && <TodayMemo onSave={handleMemoSave} />}  {/* 메모 작성 시 handleMemoSave 호출 */}
          {isCalendarVisible && (
            <FullCalendarComponent 
              isVisible={isCalendarVisible} 
              handleAlert={handleAlert}  // 알림 핸들러 전달
              handleEventNotification={handleEventNotification}  // 이벤트 성공/실패 알림 핸들러 전달
            />
          )}
          
          {/* FlashNotification이 GoogleCalendarButton보다 아래에 오도록 배치 */}
          <GoogleCalendarButton toggleCalendar={toggleCalendarVisibility} />
          {isFirstMemoSaved && !isAuthenticated && showNotification && (
            <FlashNotification visible={showNotification} onClose={() => setShowNotification(false)} />
          )}

          {/* 알림 모달 표시 */}
          {alertMessage && (
            <div className="alert">
              {alertMessage}
              <button onClick={() => setAlertMessage(null)}>닫기</button>
            </div>
          )}

          {/* 이벤트 성공/실패 알림 표시 */}
          {notification && (
            <div className={`notification ${notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
              {notification.message}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ManageCalendar;
