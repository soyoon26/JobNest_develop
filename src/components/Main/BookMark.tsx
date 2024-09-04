const BookMark = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className='ml-[65px] mt-[50px] mr-[65px] max-w-[1440px]'>
      <p className='text-[40px] mb-[46px] font-extrabold'>즐겨찾기</p>

      <div className='grid grid-cols-7 gap-[30px]'>
        {arr.map(() => (
          <div className='mb-[43px]'>
            <div className='border-black boder-solid border w-[180px] h-[180px] mb-[12px]'>
              <img src='src\assets\images\24testimg.png'></img>
            </div>
            <button className='w-[182px] h-[34px] text-[14px] font-medium'>
              정부24
            </button>
          </div>
        ))}

        <div className='border-dash flex justify-center items-center w-[180px] h-[180px] mb-[12px] bg-[#f8f8f8]'>
          <button className='bg-[#347fff] text-white px-[20px] py-[12px] rounded-[10px]'>
            관리하기
          </button>
        </div>
      </div>

      {/* <div className='border-black boder-solid border w-[180px] h-[180px] mb-[12px]'>
        <img src='src\assets\images\24testimg.png'></img>
      </div>

      <button className='w-[182px] h-[34px] text-[14px] font-medium'>정부24</button> */}
    </div>
  );
};
export default BookMark;
