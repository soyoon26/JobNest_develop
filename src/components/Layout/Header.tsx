import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);

  //로그인 토큰 받아오기
  const getLoginToken = async () => {
    try {
      const response = await axios.get(
        'https://api.safehomes.co.kr/realtors/api/token'
      );

      if (response.status === 200 && response.data.message === 'success') {
        const token = response.data.cookie;

        // 예: 토큰을 로컬 스토리지에 저장
        localStorage.setItem('authToken', token);
        setLogin(true);
      }
    } catch (error) {
      console.error('Error fetching the token:', error);
    }
  };

  const handleLogin = () => {
    setLogin(false);
  };

  const clickLogo = () => {
    navigate('/');
  };

  return (
    <>
      <div className='h-[100px] flex items-center bg-[#fff] border-b border-[#ededed]'>
        <div
          className='text-[40px] w-[164px] h-[50px] flex items-center justify-center ml-[40px] font-black text-[#347fff] cursor-pointer'
          onClick={clickLogo}
        >
          JobNest
        </div>
        <div className='flex items-center ml-auto'>
          <ul className='flex gap-[38px]'>
            <li className='font-medium text-[18px]'>매물 관리</li>
            <li className='font-medium text-[18px]'>
              <Link to='/contractManagement'>계약 관리</Link>
            </li>
            <li
              className='font-medium text-[18px] cursor-pointer'
              onClick={() => navigate('/registrationIssuance')}
            >
              등기/대장 발급
            </li>
          </ul>
          {login ? (
            <>
              <span className='text-[#8894A0] ml-[88px]'>
                박지우님 환영합니다!
              </span>
              <button
                className='bg-[#347fff] w-[130px] h-[42px] ml-[50px] font-medium mr-[41px] text-white'
                onClick={handleLogin}
              >
                로그아웃
              </button>
            </>
          ) : (
            <button
              className='bg-[#347fff] w-[130px] h-[42px] ml-[50px] font-medium mr-[41px] text-white'
              onClick={getLoginToken}
            >
              로그인
            </button>
          )}
        </div>
      </div>
    </>
  );
};
export default Header;
