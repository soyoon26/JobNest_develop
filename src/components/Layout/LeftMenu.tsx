import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileLines,
  faPaste,
  faHeartCirclePlus,
} from '@fortawesome/free-solid-svg-icons';

const LeftMenu = () => {
  return (
    <>
      <div className='w-[310px] h-screen bg-[#f8f8f8] p-6'>
        <div className='mt-[50px]'>
          <div className='flex items-center mb-5'>
            <FontAwesomeIcon icon={faFileLines} />
            <h2 className='font-bold text-lg ml-3'>리포트 관리</h2>
          </div>

          <ul className='ml-7'>
            <li className='flex justify-between items-center mb-5'>
              <span className='font-medium'>리포트 다운로드권</span>
              <span className='text-[#347fff] font-bold'>4개</span>
            </li>
            <li className='flex justify-between items-center mb-5'>
              <span className='font-medium'>내가 발급한 리포트</span>
              <span className='text-[#347fff] font-bold'>2개</span>
            </li>
            <li className='flex justify-between items-center mb-2'>
              <span className='font-medium'>고객이 발급한 리포트</span>
              <span className='text-[#347fff] font-bold'>1개</span>
            </li>
          </ul>
          <button className='mt-4 w-full h-[50px] bg-[#347fff] text-white py-2 rounded font-medium'>
            다운로드로 결제
          </button>
        </div>

        <div className='mb-4 mt-[50px] flex items-center'>
          <FontAwesomeIcon icon={faPaste} />
          <h2 className='font-bold text-lg ml-3'>리포트 열람 내역</h2>
        </div>

        <div className='flex items-center mb-2'>
          <FontAwesomeIcon icon={faHeartCirclePlus} />
          <h2 className='font-bold text-lg ml-3'>서비스 개발 희망</h2>
        </div>
      </div>
    </>
  );
};
export default LeftMenu;
