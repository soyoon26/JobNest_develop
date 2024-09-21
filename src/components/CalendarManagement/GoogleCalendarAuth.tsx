import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../../redux/loginSlice'; // Redux 액션 불러오기
import { gapi } from 'gapi-script';

const CLIENT_ID = '843336558883-t6882gjo6vco7pf0ikbr3tlrku7f9kgu.apps.googleusercontent.com';
const API_KEY = 'AIzaSyDlbRl04r8yOjxcmDRZqD9IS6Jo6qgjkn8';
const SCOPES = 'https://www.googleapis.com/auth/calendar';

interface GoogleCalendarAuthProps {
  onSuccess: () => void;
}

const GoogleCalendarAuth: React.FC<GoogleCalendarAuthProps> = ({ onSuccess }) => {
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const dispatch = useDispatch(); // Redux Dispatch 사용

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        scope: SCOPES,
      }).then(() => {
        const authInstance = gapi.auth2.getAuthInstance();
        setIsSignedIn(authInstance.isSignedIn.get());

        authInstance.isSignedIn.listen((signInStatus: boolean) => {
          setIsSignedIn(signInStatus);
          if (signInStatus) {
            dispatch(login()); // 로그인 시 Redux 상태 업데이트
            onSuccess();
          } else {
            dispatch(logout()); // 로그아웃 시 Redux 상태 업데이트
          }
        });
      });
    };
    gapi.load('client:auth2', initClient);
  }, [dispatch, onSuccess]);

  const handleSignIn = () => {
    setIsSigningIn(true);
    gapi.auth2.getAuthInstance().signIn().then(() => {
      onSuccess();
    }).finally(() => {
      setIsSigningIn(false);
    });
  };

  return (
    <div>
      {isSigningIn ? (
        <p>Google 로그인 중...</p>
      ) : (
        <>
          {isSignedIn ? (
            <button onClick={() => gapi.auth2.getAuthInstance().signOut()}>
              Google 로그아웃
            </button>
          ) : (
            <button onClick={handleSignIn}>
              Google 로그인
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default GoogleCalendarAuth;
