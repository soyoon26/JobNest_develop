import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationIssuanceMain = () => {
  const navigate = useNavigate();
  const [inputAddress, setInputAddress] = useState('');

  const handleInputAddress = (val: string) => {
    setInputAddress(val);
  };

  const clearInput = () => {
    setInputAddress('');
  };

  return (
    <>
      <div className='pl-[65px] pt-[21px] w-full flex justify-between'>
        <div className='pt-[29px]'>
          <span className='text-[35px] mb-[46px] font-extrabold'>
            등기/대장 열람
          </span>
          <span className='text-[15px] ml-[30px] mb-[46px] font-bold'>
            동시에 여러 개의 등기 또는 대장을 발급받을 수 있어요.
          </span>
        </div>
        <span>
          <button
            className='bg-[#347fff] w-[130px] h-[42px] mr-[24px] font-medium text-white'
            onClick={() => {
              navigate('/registrationIssuance/viewHistory');
            }}
          >
            열람내역
          </button>
        </span>
      </div>
      <div className='pl-[94px] pt-[73px] relative'>
        <span className='pr-[20px]'>
          <select
            className='text-[#6f6f6f] cursor-pointer w-[100px] h-[40px] border border-[#cccccc] text-[14x] pl-[7px] py-[1px]'
            name='doc'
            id='type'
          >
            <option value='등기+대장'>전체</option>
            <option value='등기'>등기</option>
            <option value='대장'>대장</option>
          </select>
        </span>
        <span className='relative'>
          <input
            type='text'
            placeholder='주소를 입력해주세요.'
            value={inputAddress}
            className='w-[1000px] h-[40px] border border-[#cccccc] pl-[15px] pr-[30px]'
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
        <span className='pl-[12px] relative top-[-2px]'>
          <button className='text-[11px] w-[48px] h-[40px] bg-[#347fff] text-white rounded'>
            검색
          </button>
        </span>
      </div>
    </>
  );
};
export default RegistrationIssuanceMain;
