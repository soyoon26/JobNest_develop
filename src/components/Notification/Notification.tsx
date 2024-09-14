// components/Notification/Notification.tsx
import React from 'react';

interface NotificationProps {
  message: string;
  type: 'success' | 'error'; // 성공 또는 오류 메시지
}

const Notification: React.FC<NotificationProps> = ({ message, type }) => {
  const getBackgroundColor = () => {
    switch (type) {
      case 'success':
        return 'bg-green-500';
      case 'error':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className={`fixed top-4 right-4 p-4 text-white rounded-lg shadow-lg ${getBackgroundColor()}`}>
      {message}
    </div>
  );
};

export default Notification;
