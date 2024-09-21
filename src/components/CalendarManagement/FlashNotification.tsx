import { useEffect, useState } from 'react';

interface FlashNotificationProps {
  visible: boolean; // Whether the notification is initially visible
  onClose: () => void; // Callback to hide the notification after it flashes
}

const FlashNotification: React.FC<FlashNotificationProps> = ({ visible, onClose }) => {
  const [flashCount, setFlashCount] = useState(0); // Track the number of flashes

  useEffect(() => {
    if (!visible) return;

    const interval = setInterval(() => {
      setFlashCount((prev) => prev + 1);
    }, 500); // Flash every 500ms

    if (flashCount >= 3) {
      clearInterval(interval);
      onClose(); // Automatically close after 3 flashes
    }

    return () => clearInterval(interval); // Cleanup interval on unmount or if condition changes
  }, [flashCount, onClose, visible]);

  if (!visible || flashCount >= 3) return null; // Hide notification after 3 flashes or if not visible

  return (
    <div
      className="fixed bottom-[100px] right-[20px] p-3 bg-gray-500 rounded-md shadow-lg transition-opacity"
      style={{ zIndex: 2000, opacity: visible ? 1 : 0 }} // Apply opacity based on visibility
    >
      <p className="text-[#ffffff]">
        스마트폰에 설치되어 있는 구글 달력과 연동되어 있어요. 일정을 확인해보세요!
      </p>
    </div>
  );
};

export default FlashNotification;
