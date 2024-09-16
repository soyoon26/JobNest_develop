import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import AppRouter from './AppRouter';
import MainView from './views/MainView';
import RegistrationIssuanceMainView from './views/RegistrationIssuance/RegistrationIssuanceMainView';
import RegistrationIssuanceViewHistroyView from './views/RegistrationIssuance/RegistrationIssuanceViewHistroyView';

const App = () => {
  return (
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
      </Route>
    </Routes>
  );
};
export default App;
