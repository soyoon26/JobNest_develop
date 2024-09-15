import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons';

type Bookmark = {
  id: number;
  title: string;
  url: string;
  checked: boolean;
  ogImage: string;
};

type TPropsList = {
  bookmarksArray: Bookmark[];
};

const BookMarkList = ({ bookmarksArray }: TPropsList) => {
  const navigate = useNavigate();
  return (
    <>
      {bookmarksArray.map((val, idx) =>
        //bookmarksArray의 checked가 true인 것만 나열
        val.checked ? (
          <div className='mb-[43px]' key={idx}>
            <div className='border-black boder-solid border w-[180px] h-[180px] mb-[12px] flex'>
              {val.ogImage !== 'local image' ? (
                <img
                  className='w-[100%] h-[100%] object-contain'
                  src={val.ogImage}
                  alt={`${val.title} og image`}
                  onClick={() => {
                    navigate(`${val.url}`);
                  }}
                ></img>
              ) : (
                <FontAwesomeIcon
                  className='m-auto w-[40px] h-[40px] text-[#347fff]'
                  icon={faBookBookmark}
                />
              )}
            </div>
            <button className='w-[182px] h-[34px] text-[14px] font-medium'>
              {val.title}
            </button>
          </div>
        ) : (
          <></>
        )
      )}
    </>
  );
};
export default BookMarkList;
