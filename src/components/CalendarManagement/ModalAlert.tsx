import React from 'react';

interface ModalAlertProps {
  message: string;
  onClose: () => void;
  type?: 'success' | 'error';  // 알림 타입 추가
}

const ModalAlert: React.FC<ModalAlertProps> = ({ message, onClose, type = 'success' }) => {
  const backgroundColor = type === 'error' ? '#ff4d4f' : '#28a745';  // 오류일 경우 빨간색, 성공일 경우 초록색

  return (
    <div style={styles.overlay}>
      <div style={{ ...styles.modal, backgroundColor }}>
        <p>{message}</p>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: '#28a745',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center' as 'center',
  },
  button: {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ModalAlert;
