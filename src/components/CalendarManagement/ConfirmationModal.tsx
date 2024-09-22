import React, { useEffect } from 'react';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void; // Confirm button click handler
  message: string;
  confirmText?: string; // Custom text for confirm button
  cancelText?: string; // Custom text for cancel button
  type?: 'success' | 'error'; // Type of the notification (success or error)
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  message,
  confirmText = '확인',
  cancelText = '취소',
  type = 'success',  // Default to success
}) => {

  // Close modal when pressing the Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Determine styles based on the type (success or error)
  const modalStyles = type === 'success' ? styles.successModal : styles.errorModal;

  return (
    <div style={styles.overlay}>
      <div style={{ ...styles.modal, ...modalStyles }}>
        <p style={styles.message}>{message}</p>
        <div style={styles.buttonContainer}>
          <button onClick={onConfirm} style={styles.confirmButton}>
            {confirmText}
          </button>
          <button onClick={onClose} style={styles.cancelButton}>
            {cancelText}
          </button>
        </div>
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
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    textAlign: 'center' as 'center',
    width: '350px',
    animation: 'fadeIn 0.3s ease',
  },
  message: {
    fontSize: '18px',
    fontWeight: 'bold' as 'bold',
    marginBottom: '20px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  confirmButton: {
    padding: '10px 25px',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#347fff',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  cancelButton: {
    padding: '10px 25px',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#dc3545',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  successModal: {
    backgroundColor: '#ffffff',
    color: '#333',
  },
  errorModal: {
    backgroundColor: '#ffffff',
    color: '#ff4d4f',
  },
};

export default ConfirmationModal;
