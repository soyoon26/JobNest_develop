import React, { useEffect } from 'react';
import { gapi } from 'gapi-script';

// Define the Google API Client details using environment variables
const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const SCOPES = 'https://www.googleapis.com/auth/calendar';
const REDIRECT_URI = 'http://localhost:3000'; // Update with your local or production environment URI

// export const initGoogleClient = (onSuccess: () => void) => {
//   gapi.load('client:auth2', () => {
//     gapi.client
//       .init({
//         apiKey: API_KEY,
//         clientId: CLIENT_ID,
//         scope: SCOPES,
//         discoveryDocs: [
//           'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
//         ],
//       })
//       .then(() => {
//         const authInstance = gapi.auth2.getAuthInstance();
//         if (authInstance.isSignedIn.get()) {
//           onSuccess();
//         }
//       })
//       .catch((error: unknown) => {
//         console.error('Google API Client initialization failed:', error);
//       });
//   });
// };
export const initGoogleClient = (onSuccess: () => void) => {
  gapi.load('client:auth2', () => {
    gapi.client
      .init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        scope: SCOPES,
        discoveryDocs: [
          'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
        ],
      })
      .then(() => {
        const authInstance = gapi.auth2.getAuthInstance();
        if (authInstance.isSignedIn.get()) {
          onSuccess();
          console.log('CLIENT_ID:', CLIENT_ID);
          console.log('API_KEY:', API_KEY);
        } else {
          console.log('User is not signed in.');
        }
      })
      .catch((error: unknown) => {
        console.error('Google API Client initialization failed:', error);
      });
  });
};

// export const handleGoogleSignIn = (onSuccess: () => void) => {
//   const authInstance = gapi.auth2.getAuthInstance();
//   authInstance
//     .signIn({
//       prompt: 'consent',
//       response_type: 'token',
//       redirect_uri: REDIRECT_URI,
//     })
//     .then(() => {
//       onSuccess();
//     })
//     .catch((error: unknown) => {
//       console.error('Google Sign-In failed:', error);
//     });
// };

export const handleGoogleSignIn = async (onSuccess: () => void) => {
  try {
    const authInstance = gapi.auth2.getAuthInstance();
    if (authInstance) {
      await authInstance.signIn({
        prompt: 'consent',
        response_type: 'token',
        redirect_uri: REDIRECT_URI,
      });
      onSuccess();
    } else {
      console.error('Google Auth Instance is not initialized.');
    }
  } catch (error) {
    console.error('Google Sign-In failed:', error);
  }
};

export const handleGoogleLogout = () => {
  const authInstance = gapi.auth2.getAuthInstance();
  authInstance
    .signOut()
    .then(() => {
      console.log('Google Logout successful');
    })
    .catch((error: unknown) => {
      console.error('Google Sign-Out failed:', error);
    });
};

const GoogleCalendarAuth: React.FC<{ onSuccess: () => void }> = ({
  onSuccess,
}) => {
  useEffect(() => {
    initGoogleClient(onSuccess);
  }, [onSuccess]);

  return (
    <button onClick={() => handleGoogleSignIn(onSuccess)}>Google 로그인</button>
  );
};

export default GoogleCalendarAuth;
