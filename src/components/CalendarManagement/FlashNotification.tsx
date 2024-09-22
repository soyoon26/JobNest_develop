import { useEffect, useState } from 'react';

interface FlashNotificationProps {
  visible: boolean;
  onClose: () => void;
}

const FlashNotification: React.FC<FlashNotificationProps> = ({
  visible,
  onClose,
}) => {
  const [flashCount, setFlashCount] = useState(0);
  const [opacity, setOpacity] = useState(0); // For animation effect

  useEffect(() => {
    if (!visible) return;

    const interval = setInterval(() => {
      setFlashCount((prev) => prev + 1);
      setOpacity(1); // Fade-in effect
    }, 500); // Flash every 500ms

    const fadeOut = setTimeout(() => {
      setOpacity(0); // Fade-out effect
    }, 1500); // Fade out after 1.5 seconds

    if (flashCount >= 3) {
      clearInterval(interval);
      clearTimeout(fadeOut);
      onClose(); // Close after 3 flashes
    }

    return () => {
      clearInterval(interval);
      clearTimeout(fadeOut);
    };
  }, [flashCount, onClose, visible]);

  if (!visible || flashCount >= 3) return null;

  return (
    <div
      className='bottom-[50px] right-[90px] p-3 bg-gray-500 rounded-md shadow-lg transition-opacity'
      style={{ zIndex: 2000, opacity, transition: 'opacity 0.5s ease-in-out' }} // Smooth animation
    >
      <span className='text-white'>
        로그인 성공! 이제 일정을 확인하거나 작업을 시작하세요!
      </span>
    </div>
  );
};

export default FlashNotification;
