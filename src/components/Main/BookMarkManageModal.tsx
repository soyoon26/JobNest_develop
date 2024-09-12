import {
  faEllipsis,
  faSquareCheck as faSolidSquareCheck,
} from '@fortawesome/free-solid-svg-icons';
import { faSquareCheck as faRegularSquareCheck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import BookMarkAdd from './BookMarkAdd';

type TBookmark = { id: number; title: string; url: string; checked: boolean };

type TPropsManageModal = {
  closeModal: () => void;
  bookmarksArray: TBookmark[];
  updateBookmarksArray: (item: TBookmark[]) => void;
  toggleCheckbox: (id: number) => void;
};

const BookMarkManageModal = ({
  closeModal,
  bookmarksArray,
  updateBookmarksArray,
  toggleCheckbox,
}: TPropsManageModal) => {
  const [menuBar, setMenuBar] = useState<{ [key: number]: boolean }>({});

  const clickMenuBar = (id: number, idx: number) => {
    setMenuBar((prev) => ({
      [id]: !prev[id],
    }));
    const element = document.getElementById('scrollbar');
    setTimeout(() => {
      if (idx > 9) {
        element?.scrollTo({
          top: element.scrollHeight,
        });
      }
    }, 10);
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
        <div id='scrollbar' className='overflow-y-scroll h-[450px]'>
          {bookmarksArray.map((val, idx) => (
            <div className='pt-[12px] pl-[20px] relative group' key={idx}>
              {val.checked ? (
                <FontAwesomeIcon
                  icon={faSolidSquareCheck}
                  color='#636363'
                  className='mr-[11px] text-[23px] cursor-pointer'
                  onClick={() => {
                    toggleCheckbox(val.id);
                  }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faRegularSquareCheck}
                  color='#636363'
                  className='mr-[11px] text-[23px] cursor-pointer'
                  onClick={() => {
                    toggleCheckbox(val.id);
                  }}
                />
              )}
              <span className='text-[#8894A0] text-[20px] cursor-default'>
                <span
                  onClick={() => {
                    toggleCheckbox(val.id);
                  }}
                  className='cursor-pointer'
                >
                  {val.title}
                </span>
                <FontAwesomeIcon
                  className='absolute hidden cursor-pointer right-3 group-hover:inline-block'
                  color='#8894A0'
                  icon={faEllipsis}
                  onClick={() => clickMenuBar(val.id, idx)}
                />
              </span>
              {menuBar[val.id] ? (
                <span className='flex flex-col right-10 top-3 absolute z-60'>
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
            </div>
          ))}
        </div>
        <p className='absolute bottom-[14px] left-[20px]'>
          <button
            className='border border-[#ededed] text-[#347fff] bg-[#f8f8f8] w-[289px] h-[53px] text-[18px] font-medium rounded-[10px]'
            onClick={handleAddModal}
          >
            페이지 추가
          </button>
        </p>
      </div>
      {addModal ? (
        <BookMarkAdd
          bookmarksArray={bookmarksArray}
          updateBookmarksArray={updateBookmarksArray}
          closeAddModal={closeAddModal}
        />
      ) : (
        <></>
      )}
    </>
  );
};
export default BookMarkManageModal;
