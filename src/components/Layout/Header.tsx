const Header = () => {
  return (
    <>
      <div className='h-[100px] flex items-center bg-[#fff] border-b border-[#ededed]'>
        <div className='text-[40px] w-[164px] h-[50px] flex items-center justify-center ml-[40px] font-black text-[#347fff]'>
          JobNest
        </div>
        <div className='flex items-center ml-auto'>
          <ul className='flex gap-[38px]'>
            <li className='font-medium text-[18px]'>매물 관리</li>
            <li className='font-medium text-[18px]'>계약 관리</li>
            <li className='font-medium text-[18px]'>등기/대장 발급</li>
          </ul>
          <span className='text-[#8894A0] ml-[88px]'>010-0000-0000</span>
          <button className='bg-[#347fff] w-[130px] h-[42px] ml-[50px] font-medium mr-[41px] text-white'>
            로그아웃
          </button>
        </div>
      </div>
    </>
  );
};
export default Header;
