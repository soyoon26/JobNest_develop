import { useState } from 'react';
import GoogleCalendarAuth from './GoogleCalendarAuth'; 
import FullCalendarComponent from './FullCalendarComponent'; 
import GoogleCalendarButton from './GoogleCalendarButton';
import TodayMemo from '../Main/ToDoApp'; 
import FlashNotification from './FlashNotification';
import ModalAlert from './ModalAlert';

const ManageCalendar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);  // Track if the user is logged in
  const [isCalendarVisible, setIsCalendarVisible] = useState(true);
  const [isMemoVisible, setIsMemoVisible] = useState(true);
  const [isFirstMemoSaved, setIsFirstMemoSaved] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Handle successful login for Google Calendar
  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setShowNotification(false);
  };

  // Handle saving of a memo
  const handleMemoSave = () => {
    if (!isFirstMemoSaved) {
      setIsFirstMemoSaved(true);
    }
  };

  // Toggle calendar visibility
  const toggleCalendarVisibility = (isVisible: boolean) => {
    setIsCalendarVisible(isVisible);
    setIsMemoVisible(!isVisible); // Hide memo when the calendar is visible
  };

  // Handle alert messages
  const handleAlert = (message: string) => {
    setAlertMessage(message);
  };

  // Handle event notification messages
  const handleEventNotification = (message: string, type: 'success' | 'error') => {
    setNotification({ message, type });
  };

  // Handle event saving
  const handleEventSave = (eventData: { title: string; start: string; end: string }) => {
    console.log('Event data saved:', eventData);
    // Here you can trigger other logic such as API calls or Google Calendar saves
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      {/* Google Calendar authentication */}
      {!isAuthenticated ? (
        <GoogleCalendarAuth onSuccess={handleLoginSuccess} />
      ) : (
        <>
          {/* Memo visibility */}
          {isMemoVisible && (
            <div className="mb-4">
              <TodayMemo onSave={handleMemoSave} /> {/* Pass handleMemoSave */}
            </div>
          )}

          {/* Calendar visibility */}
          {isCalendarVisible && (
            <div className="mb-4">
              <FullCalendarComponent
                isVisible={isCalendarVisible}
                handleAlert={handleAlert}
                handleEventNotification={handleEventNotification}
                onEventSave={handleEventSave} // Pass handleEventSave
              />
            </div>
          )}

          {/* Toggle button for Calendar */}
          <GoogleCalendarButton 
            isLoggedIn={isAuthenticated}  // Pass isAuthenticated as isLoggedIn
            toggleCalendar={toggleCalendarVisibility} 
          />

          {/* Show notification after the first memo is saved */}
          {isFirstMemoSaved && showNotification && (
            <FlashNotification visible={showNotification} onClose={() => setShowNotification(false)} />
          )}

          {/* Alert modal */}
          {alertMessage && (
            <ModalAlert message={alertMessage} onClose={() => setAlertMessage(null)} />
          )}

          {/* Notification for event success or failure */}
          {notification && (
            <div
              className={`p-3 mb-4 rounded-lg shadow-md text-white ${
                notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
              }`}
            >
              {notification.message}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ManageCalendar;
