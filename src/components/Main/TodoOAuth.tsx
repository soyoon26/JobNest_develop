/* import { useEffect } from 'react';
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from './authConfig'; // MSAL 설정 파일을 import

const ToDoOAuth = ({ onSuccess }: { onSuccess: (accessToken: string) => void }) => {
  const msalInstance = new PublicClientApplication(msalConfig);

  useEffect(() => {
    // MSAL 초기화
    msalInstance.initialize().then(() => {
      console.log('MSAL이 성공적으로 초기화되었습니다.');
    }).catch((error) => {
      console.error('MSAL 초기화 중 오류 발생:', error);
    });
  }, [msalInstance]);

  const login = async () => {
    try {
      await msalInstance.initialize(); // 초기화가 완료될 때까지 기다림
      const loginResponse = await msalInstance.loginPopup({
        scopes: ["user.read", "Tasks.Read", "Tasks.ReadWrite"], // 필요한 스코프들 명시
      });
      const accessToken = loginResponse.accessToken;
      onSuccess(accessToken);
    } catch (error) {
      console.error("로그인 중 오류 발생:", error);
    }
  };

  return (
    <button onClick={login} className='px-4 py-2 bg-blue-500 text-white rounded'>
      Microsoft 로그인
    </button>
  );
};

export default ToDoOAuth;
 */