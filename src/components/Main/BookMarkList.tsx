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
  return (
    <>
      {bookmarksArray.map((val, idx) =>
        //bookmarksArray의 checked가 true인 것만 나열
        val.checked ? (
          <div className='mb-[43px]' key={idx}>
            <div className='border-black boder-solid border w-[180px] h-[180px] mb-[12px]'>
              <img src={val.ogImage} alt={`${val.title} og image`}></img>
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
