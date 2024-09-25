/* import { Client } from '@microsoft/microsoft-graph-client';
import { PublicClientApplication, BrowserAuthError } from '@azure/msal-browser';
import { msalConfig } from './authConfig';

let msalInstance: PublicClientApplication | null = null;

// MSAL 인스턴스를 초기화하고 반환하는 함수
const getMsalInstance = async () => {
  if (!msalInstance) {
    msalInstance = new PublicClientApplication(msalConfig);
    try {
      // 인스턴스가 생성된 후에 initialize 호출
      await msalInstance.initialize(); 
      console.log('MSAL 클라이언트 초기화 완료');
    } catch (error) {
      console.error('MSAL 초기화 중 오류 발생:', error);
      throw error;
    }
  }
  return msalInstance;
};

export const fetchMicrosoftTodos = async () => {
  try {
    const msalInstance = await getMsalInstance(); // MSAL 인스턴스 가져오기
    const accounts = msalInstance.getAllAccounts(); // 현재 로그인된 사용자 정보 확인

    if (accounts.length === 0) {
      throw new Error('사용자가 로그인하지 않았습니다.');
    }

    let accessToken: string | undefined;

    try {
      // 액세스 토큰을 조용히 얻으려 시도
      const tokenResponse = await msalInstance.acquireTokenSilent({
        scopes: ["Tasks.Read", "Tasks.ReadWrite"],
        account: accounts[0], // 첫 번째 계정 선택
      });
      accessToken = tokenResponse.accessToken;
    } catch (error) {
      if (error instanceof BrowserAuthError && error.errorCode === 'interaction_required') {
        // 상호작용이 필요한 경우, 팝업 창을 통해 다시 로그인 시도
        console.log('팝업을 통해 사용자 상호작용이 필요합니다.');
        const loginResponse = await msalInstance.loginPopup({
          scopes: ["Tasks.Read", "Tasks.ReadWrite"],
        });
        accessToken = loginResponse.accessToken;
      } else {
        console.error('토큰을 가져오는 중 오류 발생:', error);
        throw error;
      }
    }

    // Microsoft Graph 클라이언트를 사용하여 할 일 목록 가져오기
    const client = Client.init({
      authProvider: (done) => {
        done(null, accessToken); // 액세스 토큰을 사용하여 인증 처리
      },
    });

    const todos = await client
      .api('/me/todo/lists')
      .version('v1.0')
      .get(); // 할 일 목록 API 호출

    return todos.value;
  } catch (error) {
    console.error('Microsoft To Do 할 일 목록을 가져오는 중 오류 발생:', error);
    throw error;
  }
}; */