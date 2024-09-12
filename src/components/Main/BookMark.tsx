import { useEffect, useState } from 'react';
import BookMarkList from './BookMarkList';
import BookMarkManageModal from './BookMarkManageModal';

type TBookmark = {
  id: number;
  title: string;
  url: string;
  checked: boolean;
};

const BookMark = () => {
  const initialBookmarks = [
    {
      id: 1,
      title: '씨리얼',
      url: 'https://seereal.lh.or.kr/main.do',
      checked: true,
    },
    {
      id: 2,
      title: '부동산거래관리시스템',
      url: 'https://rtms.molit.go.kr/',
      checked: true,
    },
    {
      id: 3,
      title: '건축행정시스템(세움터)',
      url: 'https://www.eais.go.kr/',
      checked: true,
    },
    {
      id: 4,
      title: '토지이용계획열람',
      url: 'https://www.eum.go.kr/',
      checked: true,
    },
    {
      id: 5,
      title: '정부24',
      url: 'https://www.gov.kr/portal/',
      checked: true,
    },
    {
      id: 6,
      title: '인터넷등기소',
      url: 'http://www.iros.go.kr/',
      checked: true,
    },
    {
      id: 7,
      title: '부동산 공시가격 알리미',
      url: 'https://www.realtyprice.kr/',
      checked: true,
    },
    {
      id: 8,
      title: '통계지리정보 서비스',
      url: 'https://sgis.kostat.go.kr/',
      checked: true,
    },
    { id: 9, title: '일사편리', url: 'https://www.kras.go.kr/', checked: true },
    {
      id: 10,
      title: '부동산 계산기',
      url: 'https://www.eais.go.kr/',
      checked: true,
    },
  ];

  // // localStorage에서 데이터를 가져옴
  // const savedBookmarks = localStorage.getItem('Bookmark');

  // useEffect(() => {
  //   if (!savedBookmarks) {
  //     localStorage.setItem('Bookmark', JSON.stringify(initialBookmarks));
  //   }
  // }, []);

  // // 데이터를 다시 객체 배열로 변환
  // const tempBookmarksArray = savedBookmarks ? JSON.parse(savedBookmarks) : [];
  // // 그걸 useState 형태로 저장
  // const [bookmarksArray, setBookmarksArray] = useState(tempBookmarksArray);

  // 초기값을 빈 배열로 설정
  const [bookmarksArray, setBookmarksArray] = useState<TBookmark[]>([]);
  useEffect(() => {
    // 로컬 스토리지에서 북마크 데이터를 가져옴
    const savedBookmarks = localStorage.getItem('Bookmark');
    if (savedBookmarks) {
      setBookmarksArray(JSON.parse(savedBookmarks)); // 로컬 스토리지의 데이터를 상태로 설정
    } else {
      // 로컬 스토리지에 데이터가 없으면 초기 북마크를 저장
      localStorage.setItem('Bookmark', JSON.stringify(initialBookmarks));
      setBookmarksArray(initialBookmarks); // 상태를 초기 북마크로 설정
    }
  }, []); // 컴포넌트가 마운트될 때만 실행

  // 체크박스 상태를 변경하는 함수
  const toggleCheckbox = (id: number) => {
    setBookmarksArray((prevBookmarksArray: TBookmark[]) =>
      prevBookmarksArray.map((bookmarksArray: TBookmark) =>
        bookmarksArray.id === id
          ? { ...bookmarksArray, checked: !bookmarksArray.checked } // 체크 상태를 반전시킴
          : bookmarksArray
      )
    );
  };

  //즐겨찾기 목록 체크 여부 저장
  useEffect(() => {
    localStorage.setItem('Bookmark', JSON.stringify(bookmarksArray));
  }, [bookmarksArray]);

  const updateBookmarksArray = (item: TBookmark[]) => {
    setBookmarksArray(item);
  };

  const [manageModal, setManageModal] = useState(false);

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
        <BookMarkList bookmarksArray={bookmarksArray} />
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
            updateBookmarksArray={updateBookmarksArray}
            toggleCheckbox={toggleCheckbox}
          ></BookMarkManageModal>
        </div>
      )}
    </div>
  );
};
export default BookMark;
