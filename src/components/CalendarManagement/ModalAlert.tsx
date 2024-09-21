import React, { useEffect } from 'react';

interface ModalAlertProps {
  message: string;
  onClose: () => void;
  type?: 'success' | 'error'; // Notification type (success or error)
}

const ModalAlert: React.FC<ModalAlertProps> = ({ message, onClose, type = 'success' }) => {
  const backgroundColor = type === 'error' ? '#ff4d4f' : '#28a745'; // Error (red) or success (green)

  // Close the modal with the Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div style={styles.overlay}>
      <div style={{ ...styles.modal, backgroundColor }}>
        <p style={styles.message}>{message}</p>
        <button style={styles.button} onClick={onClose}>
          확인
        </button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed' as 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay background
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000, // High z-index to ensure it's on top
  },
  modal: {
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center' as 'center',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)', // Subtle shadow
    width: '80%', // Responsive width
    maxWidth: '400px', // Max width for larger screens
    color: 'white',
    animation: 'fadeIn 0.3s ease', // Smooth fade-in animation
  },
  message: {
    fontSize: '16px',
    marginBottom: '15px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#347fff', // Consistent blue button
    color: 'white',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease', // Smooth transition on hover
  },
};

// Optional fade-in animation (CSS keyframes)
const fadeInAnimation = `
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
`;

// Append animation CSS to the document
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = fadeInAnimation;
document.head.appendChild(styleSheet);

export default ModalAlert;