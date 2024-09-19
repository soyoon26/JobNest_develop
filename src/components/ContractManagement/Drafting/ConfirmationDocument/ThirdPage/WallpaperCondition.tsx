const WallpaperCondition = () => {
  return (
    <>
      <div className="w-[1197px] border-by flex text-[14px] my-4">
        <div className="items-j w-[150px] h-[160px]  border-br text-center">
          ⑫벽면 ·바닥면 및<br />
          도배상태
        </div>
        <div className="flex flex-col w-full">
          <div className="h-[80px] flex border-bb">
            <div className="items-j w-[150px] border-br">벽면</div>
            <div className="flex flex-col ">
              <div className="h-[40px] border-bb ">
                <div className="border-br h-full items-j w-[140px]">균열</div>
              </div>
              <div className="h-[40px]">
                <div className="border-br h-full w-[140px] items-j">누수</div>
              </div>
            </div>
          </div>
          <div className="flex h-[40px] border-bb w-full">
            <div className="items-j w-[150px] border-br">바닥면</div>
          </div>
          <div className="flex h-[40px]">
            <div className="items-j w-[150px] border-br">도배</div>
            <div className="items-j w-[370px] "></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default WallpaperCondition;
