import React, { useEffect, useState } from 'react';
import { gapi } from 'gapi-script';

const CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID';
const API_KEY = 'YOUR_GOOGLE_API_KEY';
const SCOPES = 'https://www.googleapis.com/auth/calendar';

interface GoogleCalendarAuthProps {
  onSuccess: () => void;  // onSuccess 함수 타입 지정
}

const GoogleCalendarAuth: React.FC<GoogleCalendarAuthProps> = ({ onSuccess }) => {
  const [isSigningIn, setIsSigningIn] = useState(false);  // 로그인 중 상태
  const [isSignedIn, setIsSignedIn] = useState(false);  // 로그인 성공 여부

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        scope: SCOPES,
      }).then(() => {
        const authInstance = gapi.auth2.getAuthInstance();
        setIsSignedIn(authInstance.isSignedIn.get());  // 초기 로그인 상태 설정
        authInstance.isSignedIn.listen((signInStatus: boolean) => {  // signInStatus의 타입을 명시적으로 boolean으로 지정
          setIsSignedIn(signInStatus);  // 로그인 상태 변화 시 업데이트
        });
      });
    };
    gapi.load('client:auth2', initClient);
  }, []);

  const handleSignIn = () => {
    setIsSigningIn(true);  // 로그인 중 상태 표시
    gapi.auth2.getAuthInstance().signIn().then(() => {
      console.log('Google 로그인 성공');
      onSuccess();  // 로그인 성공 시 부모 컴포넌트에 전달
    }).finally(() => {
      setIsSigningIn(false);  // 로그인 완료 후 상태 리셋
    });
  };

  const handleSignOut = () => {
    gapi.auth2.getAuthInstance().signOut().then(() => {
      console.log('Google 로그아웃 성공');
    });
  };

  return (
    <div>
      {isSigningIn ? (
        <p>Google 로그인 중...</p>  // 로그인 중 상태 표시
      ) : (
        <>
          {isSignedIn ? (
            <button onClick={handleSignOut}>Sign out of Google</button>
          ) : (
            <button onClick={handleSignIn}>Sign in with Google</button>
          )}
        </>
      )}
    </div>
  );
};

export default GoogleCalendarAuth;
