import React, { useState } from 'react';

interface TodayMemoProps {
  onSave: () => void;  // onSave prop 추가
}

const TodayMemo: React.FC<TodayMemoProps> = ({ onSave }) => {
  const [memo, setMemo] = useState('');

  const handleSaveClick = () => {
    onSave();  // 저장 버튼 클릭 시 부모로부터 받은 onSave 호출
  };

  return (
    <div className="memo-container p-4 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-[#333B4B] mb-2">오늘 할 일 메모</h3>
      <textarea
        className="w-full h-[100px] p-2 border border-gray-300 rounded-md"
        value={memo}
        onChange={(e) => setMemo(e.target.value)}
        placeholder="오늘의 할 일을 작성하세요."
      />
      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleSaveClick}>
        저장
      </button>
    </div>
  );
};

export default TodayMemo;
