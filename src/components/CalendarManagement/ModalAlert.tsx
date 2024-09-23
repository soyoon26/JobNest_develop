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
  const modalColor = type === 'error' ? '#636363' : '#347fff'; // Use the type prop to set modal color

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
          <p style={styles.message} className='flex justify-center'>
            {message}
          </p>
        )}
        <div style={styles.buttonContainer} className='justify-center'>
          <button
            onClick={onConfirm || onClose} // If onConfirm is undefined, use onClose
            style={{ ...styles.confirmButton, backgroundColor: modalColor }}
            className='mx-[10px]'
          >
            {confirmText}
          </button>
          <button onClick={onCancel || onClose} style={styles.cancelButton}>
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
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
    textAlign: 'center' as 'center',
    width: '250px',
    animation: 'fadeIn 2s ease',
  },
  message: {
    fontSize: '16px',
    marginBottom: '20px',
  },
  buttonContainer: {
    display: 'flex',
    marginTop: '20px',
  },
  confirmButton: {
    padding: '10px 20px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#347fff', // Blue color for confirm button
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
    backgroundColor: '#636363', // Red color for cancel button
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginRight: '10px',
  },
};

export default ModalAlert;
