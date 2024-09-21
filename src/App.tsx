import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';

import MainView from './views/MainView';
import RegistrationIssuanceMainView from './views/RegistrationIssuance/RegistrationIssuanceMainView';
import RegistrationIssuanceViewHistoryView from './views/RegistrationIssuance/RegistrationIssuanceViewHistroyView';
import ContractDraftingView from './views/ContractDraftingView';
import ContractManagementView from './views/ContractManagementView';

// Import Calendar Management components
import ManageCalendar from './components/CalendarManagement/ManageCalendar';
import ConfirmationModal from './components/CalendarManagement/ConfirmationModal';
import FlashNotification from './components/CalendarManagement/FlashNotification';
import FullCalendarComponent from './components/CalendarManagement/FullCalendarComponent';
import GoogleCalendarButton from './components/CalendarManagement/GoogleCalendarButton';
import ModalAlert from './components/CalendarManagement/ModalAlert';

const App = () => {
  // Define state for managing calendar visibility and logged-in status
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Controls login state
  const [isCalendarVisible, setIsCalendarVisible] = useState(false); // Controls calendar visibility
  const [notificationVisible, setNotificationVisible] = useState(true); // Flash notification state

  // Handlers for different actions
  const handleLogin = () => {
    setIsLoggedIn(true); // Mark as logged in
  };

  const handleEventSave = (eventData: { title: string; start: string; end: string }) => {
    console.log('Event Saved:', eventData);
  };

  const handleAlert = (message: string) => {
    console.log('Alert Message:', message);
  };

  const handleEventNotification = (message: string, type: 'success' | 'error') => {
    console.log('Event Notification:', message, type);
  };

  const toggleCalendar = (isVisible: boolean) => {
    setIsCalendarVisible(isVisible);
    console.log('Calendar visibility:', isVisible);
  };

  const handleClose = () => {
    setNotificationVisible(false); // Hide flash notification
    console.log('Closed');
  };

  return (
    <>
      {/* Login Button */}
      {!isLoggedIn && (
        <div className="login-section">
          <button onClick={handleLogin} className="login-button">
            로그인 {/* Display login button */}
          </button>
        </div>
      )}

      {/* Calendar and Management Components */}
      {isLoggedIn && (
        <>
          <GoogleCalendarButton
            isLoggedIn={isLoggedIn}
            toggleCalendar={toggleCalendar}
          />
          <FlashNotification
            visible={notificationVisible}
            onClose={handleClose}
          />
          {isCalendarVisible && (
            <FullCalendarComponent
              isVisible={isCalendarVisible}
              handleAlert={handleAlert}
              handleEventNotification={handleEventNotification}
              onEventSave={handleEventSave}
            />
          )}
        </>
      )}

      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainView />} />
          <Route
            path='/registrationIssuance'
            element={<RegistrationIssuanceMainView />}
          />
          <Route
            path='/registrationIssuance/viewHistory'
            element={<RegistrationIssuanceViewHistoryView />}
          />
          <Route path='/contractManagement' element={<ContractManagementView />} />
          <Route path='/contractDrafting' element={<ContractDraftingView />} />

          {/* Calendar Management Components */}
          {isLoggedIn && (
            <>
              <Route
                path='/calendar/manage'
                element={<ManageCalendar />}
              />
              <Route
                path='/calendar/full'
                element={<FullCalendarComponent
                  isVisible={isCalendarVisible}
                  handleAlert={handleAlert}
                  handleEventNotification={handleEventNotification}
                  onEventSave={handleEventSave}
                />}
              />
              <Route
                path='/calendar/notification'
                element={<FlashNotification
                  visible={notificationVisible}
                  onClose={handleClose}
                />}
              />
              <Route
                path='/calendar/confirmation'
                element={<ConfirmationModal
                  isOpen={true}
                  onClose={handleClose}
                  onConfirm={handleClose}
                  message="Are you sure?"
                />}
              />
              <Route
                path='/calendar/alert'
                element={<ModalAlert message="Test alert" onClose={handleClose} />}
              />
            </>
          )}
        </Route>
      </Routes>
    </>
  );
};

export default App;
