import ContractRadio from "../../Common/ContractRadio";
import ContractRadioInputText from "../../Common/ContractRadioInputText";

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
            <div className="flex flex-col flex-1">
              <div className="h-[40px] flex flex-1 border-bb ">
                <div className="border-br h-full items-j w-[140px]">균열</div>
                <div className="pl-4 items">
                  <ContractRadioInputText
                    options={[
                      { label: "없음", value: "none1" },
                      { label: "있음", value: "exists" },
                    ]}
                    inputLabel="위치 :"
                    inputWidth="550px"
                    unit=""
                  />
                </div>
              </div>
              <div className="h-[40px] flex">
                <div className="border-br h-full w-[140px] items-j">누수</div>
                <div className="pl-4 items">
                  <ContractRadioInputText
                    options={[
                      { label: "없음", value: "none1" },
                      { label: "있음", value: "exists" },
                    ]}
                    inputLabel="위치 :"
                    inputWidth="550px"
                    unit=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[40px] border-bb w-full">
            <div className="items-j w-[150px] border-br">바닥면</div>
            <div className="pl-4 items">
              <ContractRadioInputText
                options={[
                  { label: "깨끗함", value: "good1" },
                  { label: "보통임", value: "normal1" },
                  { label: "수선 필요", value: "exists" },
                ]}
                inputLabel="위치 :"
                inputWidth="575px"
                unit=""
              />
            </div>
          </div>
          <div className="flex h-[40px]">
            <div className="items-j w-[150px] border-br">도배</div>
            <div className="items pl-4 w-[370px] ">
              <ContractRadio
                name="wallpaper"
                options={[
                  { label: "깨끗함" },
                  { label: "보통임" },
                  { label: "도배필요" },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default WallpaperCondition;
