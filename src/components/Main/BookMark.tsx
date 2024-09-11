import { useEffect, useState } from 'react';
import BookMarkList from './BookMarkList';
import BookMarkManageModal from './BookMarkManageModal';

const BookMark = () => {
  const initialBookmarks = [
    { id: 1, title: '씨리얼', url: 'https://seereal.lh.or.kr/main.do' },
    { id: 2, title: '부동산거래관리시스템', url: 'https://rtms.molit.go.kr/' },
    { id: 3, title: '건축행정시스템(세움터)', url: 'https://www.eais.go.kr/' },
    {
      id: 4,
      title: '토지이용계획열람',
      url: 'https://www.eum.go.kr/',
    },
    { id: 5, title: '정부24', url: 'https://www.gov.kr/portal/' },
    { id: 6, title: '인터넷등기소', url: 'http://www.iros.go.kr/' },
    {
      id: 7,
      title: '부동산 공시가격 알리미',
      url: 'https://www.realtyprice.kr/',
    },
    { id: 8, title: '통계지리정보 서비스', url: 'https://sgis.kostat.go.kr/' },
    { id: 9, title: '일사편리', url: 'https://www.kras.go.kr/' },
    { id: 10, title: '부동산 계산기', url: 'https://www.eais.go.kr/' },
  ];

  // localStorage에서 데이터를 가져옴
  const savedBookmarks = localStorage.getItem('Bookmark');

  useEffect(() => {
    if (!savedBookmarks) {
      localStorage.setItem('Bookmark', JSON.stringify(initialBookmarks));
    }
  }, []);

  // 데이터를 다시 객체 배열로 변환
  const tempBookmarksArray = savedBookmarks ? JSON.parse(savedBookmarks) : [];
  // 그걸 useState 형태로 저장
  const [bookmarksArray, setBookmarksArray] = useState(tempBookmarksArray);

  const [manageModal, setManageModal] = useState(false);
  // const [checked, setChecked] = useState(false);
  // const [menuBar, setMenuBar] = useState(false);

  // const clickMenuBar = () => {
  //   setMenuBar(!menuBar);
  // };

  // const handleCheckbox = () => {
  //   setChecked(!checked);
  // };

  const handleBookMark = () => {
    setManageModal(true);
  };

  const closeModal = () => {
    setManageModal(false);
  };

  // 모달이 열릴 때 바디 스크롤 비활성화
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (manageModal) {
        const modalElement = document.getElementById('modal-content');
        if (modalElement && !modalElement.contains(e.target as Node)) {
          // 모달 외부에서 스크롤이 발생하면, body의 스크롤을 허용
          document.body.style.overflow = 'auto';
        } else {
          // 모달 내부에서 스크롤이 발생하면, body의 스크롤을 막음
          document.body.style.overflow = 'hidden';
        }
      }
    };

    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      document.body.style.overflow = 'auto'; // 컴포넌트가 unmount될 때 cleanup
    };
  }, [manageModal]);

  return (
    <div className='ml-[65px] mt-[50px] mr-[65px] max-w-[1440px]'>
      <p className='text-[40px] mb-[46px] font-extrabold'>즐겨찾기</p>

      <div className='grid grid-cols-7 gap-[30px]'>
        <BookMarkList bookmarksArray={bookmarksArray}></BookMarkList>
        {/* {bookmarksArray?.map((val, idx) => (
          <div className='mb-[43px]'>
            <div className='border-black boder-solid border w-[180px] h-[180px] mb-[12px]'>
              <img src='src\assets\images\24testimg.png'></img>
            </div>
            <button className='w-[182px] h-[34px] text-[14px] font-medium'>
              {val.title}
            </button>
          </div>
        ))} */}

        <div className='border-dash flex justify-center items-center w-[180px] h-[180px] mb-[12px] bg-[#f8f8f8]'>
          <button
            className='bg-[#347fff] text-white px-[20px] py-[12px] rounded-[10px]'
            onClick={handleBookMark}
          >
            관리하기
          </button>
        </div>
      </div>

      {manageModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50'>
          <BookMarkManageModal
            closeModal={closeModal}
            bookmarksArray={bookmarksArray}
            setBookmarksArray={setBookmarksArray}
          ></BookMarkManageModal>
          {/* <div
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
              {bookmarksArray.map((val, index) => (
                <div className='pt-[12px] pl-[20px] relative'>
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
                      className='cursor-pointer absolute right-3'
                      color='#8894A0'
                      icon={faEllipsis}
                      onClick={clickMenuBar}
                    />
                    {menuBar ? (
                      <span className='absolute right-10 top-3 flex flex-col'>
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
                <button className='border border-[#ededed] text-[#347fff] bg-[#f8f8f8] w-[289px] h-[53px] text-[18px] font-medium'>
                  페이지 추가
                </button>
              </p>
            </div>
          </div> */}
        </div>
      )}
    </div>
  );
};
export default BookMark;
