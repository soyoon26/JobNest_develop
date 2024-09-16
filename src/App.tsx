import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import AppRouter from './AppRouter';
import MainView from './views/MainView';
import RegistrationIssuanceView from './views/RegistrationIssuanceView';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<MainView />} />
        <Route path='*' element={<AppRouter />} />
        <Route
          path='/RegistrationIssuanceView'
          element={<RegistrationIssuanceView />}
        />
      </Route>
    </Routes>
  );
};
export default App;
