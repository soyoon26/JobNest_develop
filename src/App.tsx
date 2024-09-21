import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';

import MainView from './views/MainView';
import RegistrationIssuanceMainView from './views/RegistrationIssuance/RegistrationIssuanceMainView';
import RegistrationIssuanceViewHistoryView from './views/RegistrationIssuance/RegistrationIssuanceViewHistroyView';
import ContractDraftingView from './views/ContractDraftingView';
import ContractManagementView from './views/ContractManagementView';

// Import CalendarManagement components
import ManageCalendar from './components/CalendarManagement/ManageCalendar';
import ConfirmationModal from './components/CalendarManagement/ConfirmationModal';
import FlashNotification from './components/CalendarManagement/FlashNotification';
import FullCalendarComponent from './components/CalendarManagement/FullCalendarComponent';
import GoogleCalendarAuth from './components/CalendarManagement/GoogleCalendarAuth';
import GoogleCalendarButton from './components/CalendarManagement/GoogleCalendarButton';
import ModalAlert from './components/CalendarManagement/ModalAlert';

const App = () => {
  // Define dummy functions and values for the props
  const handleSuccess = () => console.log('Login Successful');
  const handleEventSave = (eventData: { title: string; start: string; end: string }) => {
    console.log('Event Saved:', eventData);
  };
  const handleAlert = (message: string) => console.log('Alert Message:', message);
  const handleEventNotification = (message: string, type: 'success' | 'error') => {
    console.log('Event Notification:', message, type);
  };
  const toggleCalendar = (isVisible: boolean) => {
    console.log('Calendar visibility:', isVisible);
  };
  const handleClose = () => console.log('Closed');
  const isLoggedIn = true; // Mock value for login state

  return (
    <>
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
          <Route
            path='/contractManagement'
            element={<ContractManagementView />}
          />
          <Route path='/contractDrafting' element={<ContractDraftingView />} />

          {/* Calendar Management Routes */}
          <Route path='/calendar/manage' element={<ManageCalendar />} />
          <Route
            path='/calendar/confirmation'
            element={<ConfirmationModal
              isOpen={true} // or any logic to handle modal state
              onClose={handleClose}
              onConfirm={handleClose}
              message="Are you sure?"
            />}
          />
          <Route
            path='/calendar/notification'
            element={<FlashNotification
              visible={true} // or logic to handle visibility
              onClose={handleClose}
            />}
          />
          <Route
            path='/calendar/full'
            element={<FullCalendarComponent
              isVisible={true}
              handleAlert={handleAlert}
              handleEventNotification={handleEventNotification}
              onEventSave={handleEventSave}
            />}
          />
          <Route
            path='/calendar/auth'
            element={<GoogleCalendarAuth onSuccess={handleSuccess} />}
          />
          <Route
            path='/calendar/button'
            element={<GoogleCalendarButton
              isLoggedIn={isLoggedIn}
              toggleCalendar={toggleCalendar}
            />}
          />
          <Route
            path='/calendar/alert'
            element={<ModalAlert message="Test alert" onClose={handleClose} />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
