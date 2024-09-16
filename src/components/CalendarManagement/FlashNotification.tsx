import { useEffect, useState } from 'react';

interface FlashNotificationProps {
  visible: boolean;
  onClose: () => void;
}

const FlashNotification: React.FC<FlashNotificationProps> = ({ visible, onClose }) => {
  const [flashCount, setFlashCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlashCount((prev) => prev + 1);
    }, 500);

    if (flashCount >= 3) {
      clearInterval(interval);
      onClose();
    }

    return () => clearInterval(interval);
  }, [flashCount, onClose]);

  if (!visible || flashCount >= 3) return null;

  return (
    <div
      className="fixed bottom-[100px] right-[20px] p-3 bg-gray-500 rounded-md shadow-lg"
      style={{ zIndex: 1000, transform: 'scale(0.75)' }}  // Scaling for 75% zoom
    >
      <p className="text-[#ffffff]">스마트폰에 설치되어 있는 구글 달력과 연동되어 있어요. 일정을 확인해보세요!</p>
    </div>
  );
};

export default FlashNotification;
