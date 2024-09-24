import React, { useEffect } from 'react';
import { gapi } from 'gapi-script';

// Define the Google API Client details
const CLIENT_ID = '843336558883-9k8mq52uiro8hbuhm10fl5vc44lksmrk.apps.googleusercontent.com';
const API_KEY = 'AIzaSyDlbRl04r8yOjxcmDRZqD9IS6Jo6qgjkn8';
const SCOPES = 'https://www.googleapis.com/auth/calendar';
const REDIRECT_URI = 'http://localhost:3000'; // Update with your local or production environment URI

// Initialize Google API Client
export const initGoogleClient = (onSuccess: () => void) => {
  gapi.load('client:auth2', () => {
    gapi.client
      .init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        scope: SCOPES,
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
      })
      .then(() => {
        const authInstance = gapi.auth2.getAuthInstance();
        if (authInstance.isSignedIn.get()) {
          onSuccess(); // If the user is signed in, execute the success callback
        }
      })
      .catch((error: unknown) => {
        console.error('Google API Client initialization failed:', error);
      });
  });
};

// Function to handle Google Sign-In with explicit redirect_uri
export const handleGoogleSignIn = (onSuccess: () => void) => {
  const authInstance = gapi.auth2.getAuthInstance();
  authInstance
    .signIn({
      prompt: 'consent',
      response_type: 'token',
      redirect_uri: REDIRECT_URI, // Explicitly set redirect_uri
    })
    .then(() => {
      onSuccess(); // On successful login, trigger the success callback
    })
    .catch((error: unknown) => {
      console.error('Google Sign-In failed:', error);
    });
};

// Function to handle Google Logout
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

// Google Calendar Authentication Component
const GoogleCalendarAuth: React.FC<{ onSuccess: () => void }> = ({ onSuccess }) => {
  useEffect(() => {
    // Initialize Google API Client when the component is mounted
    initGoogleClient(onSuccess);
  }, [onSuccess]);

  // Render the Google Login button
  return (
    <button onClick={() => handleGoogleSignIn(onSuccess)}>
      Google 로그인
    </button>
  );
};

export default GoogleCalendarAuth;
