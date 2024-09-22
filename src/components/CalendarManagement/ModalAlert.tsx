import React, { useEffect, ReactNode } from 'react';

interface ModalAlertProps {
  onClose: () => void;
  message?: string;
  type?: 'success' | 'error'; // Type of alert (success or error)
  confirmText?: string; // Confirm button text
  cancelText?: string; // Cancel button text
  onConfirm?: () => void; // Confirm action handler
  onCancel?: () => void; // Cancel action handler
  children?: ReactNode; // Optional children
}

const ModalAlert: React.FC<ModalAlertProps> = ({
  onClose,
  message,
  type = 'success',
  confirmText = '확인',
  cancelText = '취소',
  onConfirm,
  onCancel,
  children,
}) => {
  const modalColor = type === 'error' ? '#ff4d4f' : '#007bff'; // Use the type prop to set modal color

  // Escape key closes the modal
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
      <div style={styles.modal}>
        {children ? (
          <div>{children}</div>
        ) : (
          <p style={styles.message}>{message}</p>
        )}
        <div style={styles.buttonContainer}>
          <button
            onClick={onConfirm || onClose} // If onConfirm is undefined, use onClose
            style={{ ...styles.confirmButton, backgroundColor: modalColor }}
          >
            {confirmText}
          </button>
          <button
            onClick={onCancel || onClose}
            style={styles.cancelButton}
          >
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
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: '#fff',
    padding: '20px 25px',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    textAlign: 'center' as 'center',
    width: '350px',
    animation: 'fadeIn 0.3s ease',
  },
  message: {
    fontSize: '16px',
    fontWeight: 'bold' as 'bold',
    marginBottom: '20px',
    color: '#333',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  confirmButton: {
    padding: '10px 20px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#007bff', // Blue color for confirm button
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginLeft: '10px',
  },
  cancelButton: {
    padding: '10px 20px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#dc3545', // Red color for cancel button
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginRight: '10px',
  },
};

export default ModalAlert;
