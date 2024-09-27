import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login, logout } from '../../redux/loginSlice';
import { RootState } from '../../redux/store';
import {
  initGoogleClient,
  handleGoogleSignIn,
  handleGoogleLogout,
} from '../CalendarManagement/GoogleCalendarAuth';

const Header = () => {
  const navigate = useNavigate();
  const loginState = useSelector((state: RootState) => state.auth.login);
  const dispatch = useDispatch();

  // Google 로그인 상태 추적
  const [googleLogin, setGoogleLogin] = useState(false);

  // 기존 로그인 상태를 토글하는 함수
  const handleLogin = (value: boolean) => {
    if (value) {
      dispatch(login());
    } else {
      dispatch(logout());
    }
  };

  // Google 로그인 성공 시 호출되는 함수
  const handleGoogleLoginSuccess = () => {
    setGoogleLogin(true); // 구글 로그인 상태 업데이트
    handleLogin(true); // Redux 상태 업데이트 (로그인 성공)
  };

  // 기존 로그인 토큰 받아오기
  const getLoginToken = async () => {
    try {
      const response = await axios.get(
        'https://api.safehomes.co.kr/realtors/api/token'
      );

      if (response.status === 200 && response.data.message === 'success') {
        const token = response.data.cookie;
        localStorage.setItem('authToken', token); // 토큰 저장
        handleGoogleSignIn(handleGoogleLoginSuccess); // 구글 로그인도 처리
      }
    } catch (error) {
      console.error('로그인 토큰을 가져오는 도중 에러 발생:', error);
    }
  };

  // 로그아웃 처리 함수
  const handleLogout = () => {
    localStorage.removeItem('authToken'); // 로컬 토큰 삭제
    handleGoogleLogout(); // 구글 로그아웃도 처리
    setGoogleLogin(false); // 구글 로그인 상태 초기화
    handleLogin(false); // Redux 상태 업데이트 (로그아웃)
  };

  // 페이지 로드 시 로컬 스토리지에서 토큰 확인
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      handleLogin(true); // 토큰이 있으면 로그인 상태로 설정
    }
    initGoogleClient(handleGoogleLoginSuccess); // 구글 클라이언트 초기화
  }, []);

  const clickLogo = () => {
    navigate('/'); // 홈 페이지로 이동
  };

  return (
    <div className='h-[100px] flex items-center bg-[#fff] border-b border-[#ededed]'>
      <div
        className='text-[40px] w-[164px] h-[50px] flex items-center justify-center ml-[40px] font-black text-[#347fff] cursor-pointer select-none'
        onClick={clickLogo}
      >
        JobNest
      </div>
      <div className='flex items-center ml-auto'>
        <ul className='flex gap-[38px]'>
          <li className='font-medium text-[18px] select-none'>매물 관리</li>
          <li className='font-medium text-[18px] select-none'>
            <Link to='/contractManagement'>계약 관리</Link>
          </li>
          <li
            className='font-medium text-[18px] cursor-pointer select-none'
            onClick={() => navigate('/registrationIssuance')}
          >
            등기/대장 발급
          </li>
        </ul>

        {loginState || googleLogin ? (
          <>
            <span className='text-[#8894A0] ml-[88px] select-none'>
              환영합니다!
            </span>
            <button
              className='bg-[#347fff] w-[130px] h-[42px] ml-[50px] font-medium mr-[41px] text-white select-none'
              onClick={handleLogout}
            >
              로그아웃
            </button>
          </>
        ) : (
          <button
            className='bg-[#347fff] w-[130px] h-[42px] ml-[50px] font-medium mr-[41px] text-white select-none'
            onClick={getLoginToken}
          >
            로그인
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
