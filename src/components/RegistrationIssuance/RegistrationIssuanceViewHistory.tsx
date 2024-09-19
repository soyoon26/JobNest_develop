import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type TBuildingData = {
  unique: string;
  kind: string;
  address: string;
};

type TApiResponse = {
  result: TBuildingData[];
  last_page: string;
  status: number;
};

const RegistrationViewHistory = () => {
  const navigate = useNavigate();
  const [inputAddress, setInputAddress] = useState('');

  const handleInputAddress = (val: string) => {
    setInputAddress(val);
  };

  const clearInput = () => {
    setInputAddress('');
  };

  const [data, setData] = useState<TBuildingData[]>([]);

  // 검색을 위한 요청 함수 (axios 사용)
  const fetchData = async (juso: string, pageNo: number) => {
    try {
      const response = await axios.post('/juso/search', {
        juso: juso,
        page_no: pageNo,
      });

      const json: TApiResponse = response.data;

      if (json.status === 200) {
        setData(json.result);
      } else {
        console.error('API 요청이 실패했습니다.');
      }
    } catch (error) {
      console.error('API 요청 중 오류 발생:', error);
    }
  };

  useEffect(() => {
    // 예시: 특정 주소와 페이지 번호로 데이터 가져오기
    fetchData('궁동 401-2', 5);
  }, []);

  return (
    <>
      <div className='pl-[65px] pt-[21px] w-full flex justify-between'>
        <div className='pt-[29px]'>
          <span className='text-[35px] mb-[46px] font-extrabold'>
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
export default RegistrationViewHistory;
