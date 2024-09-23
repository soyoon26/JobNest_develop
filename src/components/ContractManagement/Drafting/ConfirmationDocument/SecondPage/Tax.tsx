const Tax = () => {
  return (
    <div className="mt-4 mb-32 text-[13px] items h-[81px]  border-by  w-[1197px]">
      <div className="items-j h-full text-center flex-none border-br w-[150px]">
        ⑨취득 시부담할
        <br />
        조세의 종류 및 세율
      </div>
      <div className="flex flex-col w-[1313px]">
        <div className="flex h-[41px]">
          <div className="w-[130px] items-j ">취득세</div>
          <div className="relative items-j w-[215px] border-bx">
            <input type="text" className="border-32 w-[200px] trans" />
            <span className="absolute font-bold text-black transform -translate-y-1/2 right-3 top-1/2">
              %
            </span>
          </div>
          <div className="w-[130px] items-j">농어촌특별세</div>
          <div className="relative items-j w-[220px] border-bx">
            <input type="text" className="border-32 w-[200px] trans" />
            <span className="absolute font-bold text-black transform -translate-y-1/2 right-3 top-1/2">
              %
            </span>
          </div>
          <div className="w-[130px] items-j">지방교육세</div>
          <div className="relative items-j w-[220px] border-bl">
            <input type="text" className="border-32 w-[200px] trans" />
            <span className="absolute font-bold text-black transform -translate-y-1/2 right-3 top-1/2">
              %
            </span>
          </div>
        </div>
        <div className="pl-2 h-[40px] items list-disc border-bt">
          <li>
            재산세와 종합부동산세는 6월 1일 기준 대상물건 소유자가 납세의무를
            부담
          </li>
        </div>
      </div>
    </div>
  );
};

export default Tax;
