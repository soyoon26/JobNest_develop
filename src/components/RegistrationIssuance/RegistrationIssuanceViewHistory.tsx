import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationViewHistory = () => {
  const navigate = useNavigate();
  const [inputAddress, setInputAddress] = useState('');

  const handleInputAddress = (val: string) => {
    setInputAddress(val);
  };

  const clearInput = () => {
    setInputAddress('');
  };

  return (
    <div className='flex flex-col items-center'>
      <div className='pl-[65px] pt-[21px] w-full flex justify-between'>
        <div className='pt-[29px]'>
          <span className='text-[35px] mb-[46px] font-extrabold select-none'>
            등기/대장 열람내역
          </span>
        </div>
        <span>
          <button
            className='bg-[#347fff] w-[130px] h-[42px] mr-[24px] font-medium text-white'
            onClick={() => {
              navigate(-1);
            }}
          >
            뒤로가기
          </button>
        </span>
      </div>
      <div className='w-[80%] mt-[42px]'>
        <div className='flex flex-wrap'>
          <span className='pr-[20px] grow-0 shrink-0 basis-[10%]'>
            <select
              className='text-[#6f6f6f] cursor-pointer w-[100px] h-[40px] border border-[#cccccc] text-[14x] pl-[7px] py-[1px]'
              name='doc'
              id='type'
            >
              <option value='전체'>전체</option>
              <option value='등기'>등기</option>
              <option value='대장'>대장</option>
            </select>
          </span>
          <span className='relative grow-0 shrink-0 basis-[85%]'>
            <input
              type='text'
              placeholder='주소를 입력해주세요.'
              value={inputAddress}
              className='w-[100%] h-[40px] border border-[#cccccc] pl-[15px] pr-[30px]'
              onChange={(e) => {
                handleInputAddress(e.target.value);
              }}
            />
            {inputAddress && (
              <button
                onClick={clearInput}
                className='absolute right-[15px] top-[50%] transform -translate-y-1/2 text-gray-500'
              >
                ×
              </button>
            )}
          </span>
          <span className='pl-[12px] relative grow-0 shrink-0 basis-[5%]'>
            <button className='text-[14px] w-[48px] h-[40px] bg-[#347fff] text-white rounded font-normal'>
              검색
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};
export default RegistrationViewHistory;
