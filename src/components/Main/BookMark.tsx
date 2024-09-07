import { useState } from 'react';

const BookMark = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [manageModal, setManageModal] = useState(false);

  const handleBookMark = () => {
    setManageModal(true);
  };

  const closeModal = () => {
    setManageModal(false);
  };

  return (
    <div className='ml-[65px] mt-[50px] mr-[65px] max-w-[1440px]'>
      <p className='text-[40px] mb-[46px] font-extrabold'>즐겨찾기</p>

      <div className='grid grid-cols-7 gap-[30px]'>
        {arr.map(() => (
          <div className='mb-[43px]'>
            <div className='border-black boder-solid border w-[180px] h-[180px] mb-[12px]'>
              <img src='src\assets\images\24testimg.png'></img>
            </div>
            <button className='w-[182px] h-[34px] text-[14px] font-medium'>
              정부24
            </button>
          </div>
        ))}

        <div className='border-dash flex justify-center items-center w-[180px] h-[180px] mb-[12px] bg-[#f8f8f8]'>
          <button
            className='bg-[#347fff] text-white px-[20px] py-[12px] rounded-[10px]'
            onClick={handleBookMark}
          >
            관리하기
          </button>
        </div>
      </div>

      {/* <div className='bg-black a w-[311px] h-[566px]'>
        <span className='text-white'>즐겨찾기 관리</span>
      </div> */}
      {manageModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
          <div className='bg-white w-[311px] h-[566px] relative'>
            <div className='border border-b-1 p-3'>
              <button
                className='absolute top-4 right-3 text-gray-500'
                onClick={closeModal}
              >
                닫기
              </button>
              <span className='text-black text-[20px] font-bold ml-[12  px] my-[9px]'>
                즐겨찾기 관리
              </span>
            </div>

            <div className='mt-4'>
              {/* 모달 안의 내용 추가 */}
              <p>여기에 즐겨찾기 관리 내용을 추가하세요.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default BookMark;
