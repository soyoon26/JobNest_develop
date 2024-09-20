import { Outlet } from 'react-router-dom';
import Header from './components/Layout/Header';
import LeftMenu from './components/Layout/LeftMenu';

export const Layout = () => {
  return (
    <div className='bg-[#fffff]'>
      <Header />
      <main className='flex'>
        <LeftMenu />
        <div className='border-dashed border-4px border-gray-150 border-2 w-full m-[56px] relative'>
          <Outlet />
        </div>
      </main>
    </div>
  );
};
