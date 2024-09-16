const RegistrationIssuanceMain = () => {
  return (
    <>
      <div className='pl-[65px] pt-[21px] w-full flex justify-between'>
        <div className='pt-[29px]'>
          <span className='text-[35px] mb-[46px] font-extrabold'>
            등기/대장 열람
          </span>
          <span className='text-[15px] ml-[30px] mb-[46px] font-bold'>
            동시에 여러 개의 등기 또는 대장을 발급받을 수 있어요.
          </span>
        </div>
        <span>
          <button className='bg-[#347fff] w-[130px] h-[42px] mr-[24px] font-medium text-white'>
            열람내역
          </button>
        </span>
      </div>
      <div className='pl-[94px] pt-[73px]'>
        <span className='pr-[20px]'>
          <select
            className='text-[#6f6f6f] w-[100px] h-[50px] border border-[#cccccc] text-[14x] pl-[7px] py-[1px]'
            name='doc'
            id='type'
          >
            <option value='등기+대장'>등기+대장</option>
            <option value='등기'>등기</option>
            <option value='대장'>대장</option>
          </select>
        </span>
        <span>
          <input
            type='search'
            placeholder='주소를 입력해주세요.'
            className='w-[1000px] h-[40px] border border-[#cccccc] pl-[15px]'
          />
        </span>
        <span className='pl-[12px]'>
          <button className='text-[11px] w-[48px] h-[40px] bg-[#347fff] text-white rounded'>
            검색
          </button>
        </span>
      </div>
    </>
  );
};
export default RegistrationIssuanceMain;
