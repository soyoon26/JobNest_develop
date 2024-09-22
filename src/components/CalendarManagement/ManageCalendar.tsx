import { useState } from 'react';
import GoogleCalendarAuth from './GoogleCalendarAuth'; 
import FullCalendarComponent from './FullCalendarComponent'; 
import GoogleCalendarButton from './GoogleCalendarButton';
import TodayMemo from '../Main/ToDoApp'; 
import FlashNotification from './FlashNotification';
import ModalAlert from './ModalAlert';
import ConfirmationModal from './ConfirmationModal';

const ManageCalendar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);  // Track if the user is logged in
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);  // Calendar visibility toggle
  const [isMemoVisible, setIsMemoVisible] = useState(true);  // Memo visibility
  const [isFirstMemoSaved, setIsFirstMemoSaved] = useState(false);  // Track memo save status
  const [showNotification, setShowNotification] = useState(true);  // Show FlashNotification
  const [alertMessage, setAlertMessage] = useState<string | null>(null);  // Alert message for events
  const [confirmationModal, setConfirmationModal] = useState<{ message: string; type: 'success' | 'error' } | null>(null);  // Modal for success/failure notifications

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
    setIsMemoVisible(!isVisible);  // Optionally hide memo when the calendar is visible
  };

  // Handle alert messages
  const handleAlert = (message: string) => {
    setAlertMessage(message);
  };

  // Handle event notification messages for success/failure
  const handleEventNotification = (message: string, type: 'success' | 'error') => {
    setConfirmationModal({ message, type });
  };

  // Handle event saving logic and display appropriate messages
  const handleEventSave = (eventData: { title: string; start: string; end: string }) => {
    console.log('Event data saved:', eventData);
    handleEventNotification('일정 등록이 완료되었습니다.', 'success');
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
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
            <div
              className="calendar-fixed"
              style={{
                position: 'fixed',
                top: '700px',
                right: '400px',
                width: '1000px',    // Set width
                height: '600px',   // Set height
                overflowY: 'scroll', // Enable scrolling for overflow content
                zIndex: 1000,     // Ensure it stays above other components
              }}
            >
              <FullCalendarComponent
                handleAlert={handleAlert}
                handleEventNotification={handleEventNotification}
                onEventSave={handleEventSave} // Pass handleEventSave
              />
            </div>
          )}

          {/* Buttons for Google Calendar and Memo */}
          <div className="flex space-x-4 items-start mb-6">
            {/* Google Calendar Button */}
            <GoogleCalendarButton
              isLoggedIn={isAuthenticated}  // Pass isAuthenticated as isLoggedIn
              toggleCalendar={toggleCalendarVisibility}
            />

            {/* Today Memo Button */}
            <TodayMemo onSave={handleMemoSave} />
          </div>

          {/* Show notification after the first memo is saved */}
          {isFirstMemoSaved && showNotification && (
            <div className="mt-1">
              <FlashNotification visible={showNotification} onClose={() => setShowNotification(false)} />
            </div>
          )}

          {/* Alert modal */}
          {alertMessage && (
            <ModalAlert message={alertMessage} onClose={() => setAlertMessage(null)} />
          )}

          {/* Modal for event success or failure */}
          {confirmationModal && (
            <ConfirmationModal
              isOpen={true}
              message={confirmationModal.message}
              onConfirm={() => setConfirmationModal(null)}
              onClose={() => setConfirmationModal(null)}
              confirmText="확인"
              cancelText="취소"
              type={confirmationModal.type} // Pass the type to the modal
            />
          )}
        </>
      )}
    </div>
  );
};

export default ManageCalendar;
