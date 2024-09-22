import React, { useEffect } from 'react';
import { gapi } from 'gapi-script';

const CLIENT_ID = '843336558883-t6882gjo6vco7pf0ikbr3tlrku7f9kgu.apps.googleusercontent.com';
const API_KEY = 'AIzaSyDlbRl04r8yOjxcmDRZqD9IS6Jo6qgjkn8';
const SCOPES = 'https://www.googleapis.com/auth/calendar';

interface GoogleCalendarAuthProps {
  onSuccess: () => void;
}

const GoogleCalendarAuth: React.FC<GoogleCalendarAuthProps> = ({ onSuccess }) => {
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        scope: SCOPES,
      }).then(() => {
        const authInstance = gapi.auth2.getAuthInstance();
        if (authInstance.isSignedIn.get()) {
          onSuccess();
        }
      });
    };
    gapi.load('client:auth2', initClient);
  }, [onSuccess]);

  const handleSignIn = () => {
    gapi.auth2.getAuthInstance().signIn().then(() => {
      onSuccess(); // Trigger success callback after login
    });
  };

  return (
    <button onClick={handleSignIn}>
      Google 로그인
    </button>
  );
};

export default GoogleCalendarAuth;
