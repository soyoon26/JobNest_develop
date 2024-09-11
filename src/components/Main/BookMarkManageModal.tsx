import {
  faEllipsis,
  faSquareCheck as faSolidSquareCheck,
} from '@fortawesome/free-solid-svg-icons';
import { faSquareCheck as faRegularSquareCheck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import BookMarkAdd from './BookMarkAdd';

type TPropsManageModal = {
  closeModal: () => void;
  bookmarksArray: [{ id: number; title: string; url: string }];
};

const BookMarkManageModal = ({
  closeModal,
  bookmarksArray,
}: TPropsManageModal) => {
  const [checked, setChecked] = useState(false);
  const handleCheckbox = () => {
    setChecked(!checked);
  };

  const [menuBar, setMenuBar] = useState(false);
  const clickMenuBar = () => {
    setMenuBar(!menuBar);
  };

  const [addModal, setAddModal] = useState(false);
  const handleAddModal = () => {
    setAddModal(true);
  };
  const closeAddModal = () => {
    setAddModal(false);
  };

  return (
    <>
      <div
        id='modal-content'
        className='bg-white w-[330px] h-[600px] relative rounded-[10px] overflow-hidden'
      >
        <div className='border border-b-1 p-3 mb-[5px]'>
          <button
            className='absolute top-4 right-4 text-black text-[14px] font-medium'
            onClick={closeModal}
          >
            닫기
          </button>
          <span className='text-black text-[20px] font-medium ml-[6px] my-[9px] cursor-default'>
            즐겨찾기 관리
          </span>
        </div>
        <div className='overflow-y-scroll h-[460px]'>
          {bookmarksArray.map((val, idx) => (
            <div className='pt-[12px] pl-[20px] relative group' key={idx}>
              {checked ? (
                <FontAwesomeIcon
                  icon={faSolidSquareCheck}
                  color='#636363'
                  className='mr-[11px] text-[23px] cursor-pointer'
                  onClick={handleCheckbox}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faRegularSquareCheck}
                  color='#636363'
                  className='mr-[11px] text-[23px] cursor-pointer'
                  onClick={handleCheckbox}
                />
              )}
              <span className='text-[#8894A0] text-[20px] cursor-default'>
                {val.title}
                <FontAwesomeIcon
                  className='absolute hidden cursor-pointer right-3 group-hover:inline-block'
                  color='#8894A0'
                  icon={faEllipsis}
                  onClick={clickMenuBar}
                />
                {menuBar ? (
                  <span className='absolute flex flex-col right-10 top-3'>
                    <button className='text-[14px] border border-black px-[18px] py-[6px] z-50 bg-white'>
                      수정
                    </button>
                    <button className='text-[14px] border border-black px-[18px] py-[6px] z-50 bg-white'>
                      삭제
                    </button>
                  </span>
                ) : (
                  <div></div>
                )}
              </span>
            </div>
          ))}
          <p className='absolute bottom-[14px] left-[20px]'>
            <button
              className='border border-[#ededed] text-[#347fff] bg-[#f8f8f8] w-[289px] h-[53px] text-[18px] font-medium'
              onClick={handleAddModal}
            >
              페이지 추가
            </button>
          </p>
        </div>
      </div>
      {addModal ? (
        <BookMarkAdd
          bookmarksArray={bookmarksArray}
          closeAddModal={closeAddModal}
        />
      ) : (
        <></>
      )}
    </>
  );
};
export default BookMarkManageModal;
