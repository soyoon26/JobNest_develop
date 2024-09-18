import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container text-center">
      <h1 className="text-4xl font-bold mb-4">404 - 페이지를 찾을 수 없습니다.</h1>
      <p className="mb-4">요청하신 페이지가 존재하지 않거나 삭제되었습니다.</p>
      <button
        className="bg-blue-500 text-white px-4 py-2"
        onClick={() => navigate('/')}
      >
        메인 페이지로 돌아가기
      </button>
    </div>
  );
};

export default NotFound;
