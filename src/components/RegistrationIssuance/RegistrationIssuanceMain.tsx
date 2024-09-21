import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { faSquareCheck as faSolidSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { faSquareCheck as faRegularSquareCheck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

const RegistrationIssuanceMain = () => {
  const navigate = useNavigate();
  const [inputAddress, setInputAddress] = useState('');
  const [pageCount, setPageCount] = useState(0);

  const handleInputAddress = (val: string) => {
    setInputAddress(val);
  };

  const clearInput = () => {
    setInputAddress('');
  };

  const [data, setData] = useState<TBuildingData[]>([]);

  // 검색을 위한 요청 함수 (axios 사용)
  const fetchSearchData = async (juso: string, pageNo: number) => {
    const base_url = import.meta.env.VITE_BASE_URL;
    const endpoint = '/juso/search';
    const full_url = `${base_url}${endpoint}`;
    try {
      const response = await axios.post(full_url, {
        juso: juso,
        page_no: pageNo,
      });

      const json: TApiResponse = response.data;

      if (json.status === 200) {
        setData(json.result);
        setPageCount(Number(json.last_page));
      } else {
        console.error('API 요청이 실패했습니다.');
      }
    } catch (error) {
      console.error('API 요청 중 오류 발생:', error);
    }
  };

  const pageRendering = (pageCount: number) => {
    const pages = []; // 반환할 JSX 요소들을 저장할 배열

    for (let i = 0; i < pageCount; i++) {
      pages.push(
        <span key={i}>
          <button
            className='inline-block px-2'
            onClick={() => fetchSearchData(inputAddress, i + 1)}
          >
            {i + 1}
          </button>
        </span>
      );
    }

    return <>{pages}</>; // 배열을 JSX 형태로 반환
  };

  const [allCheck, setAllCheck] = useState(false);
  const toggleCheckbox = () => {
    setAllCheck(!allCheck);
  };

  return (
    <div>
      <div className='pl-[65px] pt-[21px] w-full flex justify-between'>
        <div className='pt-[29px]'>
          <span className='text-[35px] mb-[46px] font-extrabold select-none'>
            등기/대장 열람
          </span>
          <span className='text-[15px] ml-[30px] mb-[46px] font-bold select-none'>
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
          <button
            className='text-[14px] w-[48px] h-[40px] bg-[#347fff] text-white rounded font-normal'
            onClick={() => {
              fetchSearchData(inputAddress, 1);
            }}
          >
            검색
          </button>
        </span>
      </div>

      {/* 받아온 데이터들 출력 */}
      <div className='relative border border-black'>
        {/* 전체선택 체크박스 */}
        {data.length > 0 ? (
          <div className='justify-center items-center absolute left-[94px] top-[50px]'>
            {allCheck ? (
              <div>
                <FontAwesomeIcon
                  icon={faSolidSquareCheck}
                  color='#636363'
                  className='mr-[8px] text-[23px] cursor-pointer'
                  onClick={() => {
                    toggleCheckbox();
                  }}
                />
                <span
                  onClick={() => {
                    toggleCheckbox();
                  }}
                  className='cursor-pointer select-none'
                >
                  전체 선택
                </span>
              </div>
            ) : (
              <div>
                <FontAwesomeIcon
                  icon={faRegularSquareCheck}
                  color='#636363'
                  className='mr-[8px] text-[23px] cursor-pointer'
                  onClick={() => {
                    toggleCheckbox();
                  }}
                />
                <span
                  onClick={() => {
                    toggleCheckbox();
                  }}
                  className='cursor-pointer select-none'
                >
                  전체 선택
                </span>
              </div>
            )}
          </div>
        ) : (
          <></>
        )}
        <div className='absolute left-[94px] top-[100px]'>
          {data?.map((item) => (
            <div key={item.unique} className='pb-4'>
              <p className='text-[16px] border border-[#6f6f6f] p-[12px] w-full'>
                {item.address}
              </p>
            </div>
          ))}
        </div>
        {/* 페이지 네이션 파트 */}
        <div className='absolute left-[94px] top-[750px]'>
          {pageRendering(pageCount)}
        </div>
      </div>
    </div>
  );
};
export default RegistrationIssuanceMain;
