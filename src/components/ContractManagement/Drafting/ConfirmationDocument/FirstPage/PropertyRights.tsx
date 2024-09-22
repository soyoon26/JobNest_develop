const PropertyRights = () => {
  return (
    <div className="w-[1198px] mt-8 border-y border-black flex h-[386px]">
      <div className="flex flex-col border-br h-full items-j w-[150px]">
        <div>② 권리관계</div>
        <button className="text-[13px] mt-2 bg-[#335995] rounded-md p-2 items-j text-white">
          PDF 열람 및 연동
        </button>
      </div>
      <div>
        <div className="w-[170px] border-br text-center flex-col items-j h-full">
          등기부 기재사항
          <br />
          <span className="text-[#335995] text-[13px]">공부연동 가능 항목</span>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="border-bb h-[48px] flex">
          <div className="w-1/2 border-r border-black items-j">소재지</div>
          <div className="w-1/2 items-j">소유권 외의 권리사항</div>
        </div>
        <div className="flex w-full border-bb">
          <div className="flex w-1/2 border-br">
            <div className="border-br items-j w-[150px]">토지</div>
            <div>
              <textarea className="w-[267px] h-[140px] m-4 p-2 border-g " />
            </div>
          </div>
          <div className="border-br items-j w-[150px]">토지</div>
          <div>
            <textarea className="w-[267px] h-[140px] m-4 p-2 border-g " />
          </div>
        </div>
        <div className="flex w-full ">
          <div className="flex w-1/2 border-br">
            <div className="border-br w-[150px] items-j">건축물</div>
            <div>
              <textarea className="w-[267px] h-[140px] m-4 p-2 border-g " />
            </div>
          </div>
          <div className="border-br w-[150px] items-j">건축물</div>

          <div>
            <textarea className="w-[267px] h-[140px] m-4 p-2 border-g " />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PropertyRights;
