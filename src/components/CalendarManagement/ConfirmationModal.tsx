import React from 'react';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;  // 확인 버튼 클릭 시 처리할 함수
  message: string;
  confirmText?: string;  // 확인 버튼 텍스트
  cancelText?: string;  // 취소 버튼 텍스트
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  message,
  confirmText = '확인',
  cancelText = '취소',
}) => {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <p>{message}</p>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 5px 15px rgba(0,0,0,.3)',
    textAlign: 'center' as 'center',
    width: '300px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
  },
  confirmButton: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#347fff',  // Blue confirmation button
    color: 'white',
    fontWeight: 'bold',  // Bold font for buttons
    cursor: 'pointer',
  },
  cancelButton: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#dc3545',  // Red cancel button
    color: 'white',
    fontWeight: 'bold',  // Bold font for buttons
    cursor: 'pointer',
  },
};

export default ConfirmationModal;
