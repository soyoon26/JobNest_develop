type TPropsList = {
  bookmarksArray: [{ id: number; title: string; url: string }];
};

const BookMarkList = ({ bookmarksArray }: TPropsList) => {
  return (
    <>
      {bookmarksArray?.map((val, idx) => (
        <div className='mb-[43px]' key={idx}>
          <div className='border-black boder-solid border w-[180px] h-[180px] mb-[12px]'>
            <img src='src\assets\images\24testimg.png'></img>
          </div>
          <button className='w-[182px] h-[34px] text-[14px] font-medium'>
            {val.title}
          </button>
        </div>
      ))}
    </>
  );
};
export default BookMarkList;
