import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import AppRouter from './AppRouter';
import MainView from './views/MainView';
import RegistrationIssuanceMainView from './views/RegistrationIssuance/RegistrationIssuanceMainView';
import RegistrationIssuanceViewHistroyView from './views/RegistrationIssuance/RegistrationIssuanceViewHistroyView';
import ManageCalendar from './components/CalendarManagement/ManageCalendar';  // ManageCalendar 컴포넌트 import
import FlashNotification from './components/CalendarManagement/FlashNotification';  // FlashNotification 컴포넌트 import
import { useState } from 'react';

const App = () => {
  const [showNotification, setShowNotification] = useState(true); // 알림 표시 여부 상태

  const handleNotificationClose = () => {
    setShowNotification(false); // 알림이 3번 깜빡인 후 닫기
  };

  return (
    <div>
      {/* 메인 레이아웃과 라우트 설정 */}
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainView />} />
          <Route path='*' element={<AppRouter />} />
          <Route
            path='/registrationIssuance'
            element={<RegistrationIssuanceMainView />}
          />
          <Route
            path='/registrationIssuance/viewHistory'
            element={<RegistrationIssuanceViewHistroyView />}
          />
          
          {/* ManageCalendar 라우트 추가 */}
          <Route path='/calendarManagement' element={<ManageCalendar />} />
        </Route>
      </Routes>

      {/* Flash Notification 렌더링. 메인 레이아웃을 가리지 않게 설정 */}
      {showNotification && (
        <FlashNotification
          visible={showNotification}  // visible 속성 전달
          onClose={handleNotificationClose}  // onClose 핸들러 전달
        />
      )}
    </div>
  );
};

export default App;
