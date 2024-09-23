import ContractInput from "../../Common/ContractInput";
import ContractRadio from "../../Common/ContractRadio";

const LandPlanning = () => {
  return (
    <div className="mt-4 w-[1197px] flex text-[13px] border-by">
      <div className="w-[150px] text-center flex-col items-j border-br flex-none">
        ④ 토지이용계획, <br />
        공법상 이용제한 및<br /> 거래 규제에 관한 사항
        <br /> (토지)
        <button className="text-[13px] mt-2  bg-[#335995] rounded-md p-2 items-j text-white">
          PDF 열람 및 연동
        </button>
      </div>
      <div className="flex flex-col">
        <div className="flex">
          <div className="w-[200px] items-j">지역·지구</div>
          <div className="flex flex-col">
            <div className="h-[41px] flex">
              <div className="w-[150px] border-bx items-j">용도지역</div>
              <div className="px-2 items">
                <ContractInput width="500px" />
              </div>
            </div>
            <div className="h-[41px] border-by flex">
              <div className="w-[150px] border-bx items-j">
                지구단위계획구역
              </div>
              <div className="px-2 items">
                <ContractInput width="500px" />
              </div>
            </div>
            <div className="h-[41px] flex">
              <div className="w-[150px] border-bx items-j">도시개발구역</div>
              <div className="px-2 items">
                <ContractInput width="500px" />
              </div>
            </div>
          </div>
          <div className="flex flex-col border-bx">
            <div className="h-[41px] w-[90px] items-j">건폐율상한</div>
            <div className="h-[82px] border-bt items-j">
              <div className="flex w-[80px] items-center px-2 border-32">
                <input
                  type="text"
                  className="flex-grow text-right border-none focus:outline-none"
                  style={{ width: "20px" }}
                />
                <span className="ml-1">%</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="h-[41px] items-j w-[90px]">용적률 상한</div>
            <div className="h-[82px] border-bt items-j">
              <div className="flex w-[80px] items-center px-2 border-32">
                <input
                  type="text"
                  className="flex-grow text-right border-none focus:outline-none"
                  style={{ width: "20px" }}
                />
                <span className="ml-1">%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items border-by h-[122px]">
          <div className="w-[200px] text-center items-j">
            도시·군계획
            <br /> 시설
          </div>
          <div className="h-full border-bx p-2 w-[380px]">
            <textarea className="w-full h-full border-g" />
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <div className="items-j w-[130px] border-br text-center h-[61px]">
                허가·신고 <br />
                구역 여부
              </div>
              <div className="pl-4 items">
                <ContractRadio
                  name="accept"
                  options={[{ label: "토지거래 허가 구역" }]}
                />
              </div>
            </div>
            <div className="flex">
              <div className="items-j border-br  text-center w-[130px] h-[61px]">
                투기지역
                <br /> 여부
              </div>
              <div className="pl-4 items">
                <ContractRadio
                  name="close"
                  options={[
                    { label: "토지투기지역" },
                    { label: "주택투기지역" },
                    { label: "투기과열지구" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[50px] flex">
          <div className="flex">
            <div className="items-j w-[200px] text-center">
              지구단위계획구역,
              <br /> 그 밖의 도시·군관리계획
            </div>
            <div className="h-full p-2 border-bx w-[380px]">
              <textarea className="w-full h-full border-g" />
            </div>
            <div className="items-j border-br w-[130px] text-center">
              그 밖의 이용제한
              <br /> 및 거래규제사항
            </div>
            <div className="w-[340px] p-2 ">
              <textarea className="w-full h-full border-g" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandPlanning;
