import ContractInput from "../../Common/ContractInput";
import ContractRadio from "../../Common/ContractRadio";
import ContractRadioInputText from "../../Common/ContractRadioInputText";

const LocationConditions = () => {
  return (
    <div className="w-[1197px] border-by my-4 flex text-[13px]">
      <div className="w-[150px] items-j border-br flex-none">⑤ 입지조건</div>
      <div className="flex flex-col  w-[1047px]">
        <div className="h-[41px] flex">
          <div className="items-j  w-[130px]">도로와의 관계</div>
          <div className="px-4 border-bl items">
            <span>(</span>
            <div
              className="flex items-center px-2 border-32"
              style={{ width: "100px" }}
            >
              <input
                type="text"
                className="flex-grow text-right border-none focus:outline-none"
                style={{ width: "60px" }}
              />

              <span className="ml-1">m</span>
            </div>
            <span>X</span>{" "}
            <div
              className="flex items-center px-2 border-32"
              style={{ width: "100px" }}
            >
              <input
                type="text"
                className="flex-grow text-right border-none focus:outline-none"
                style={{ width: "60px" }}
              />

              <span className="ml-1">m</span>
            </div>
            <span>) 도로에 접함</span>
            <ContractRadio
              name="road"
              options={[{ label: "포장" }, { label: "비포장" }]}
            />
          </div>
          <div className="items-j w-[130px] border-bx">접근성</div>
          <div className="pl-4 items">
            <ContractRadio
              name="close"
              options={[{ label: "용이함" }, { label: "불편함" }]}
            />
          </div>
        </div>
        <div className="flex border-by w-[1047px]">
          <div className="items-j w-[130px]">대중교통</div>
          <div className="flex flex-col">
            <div className="h-[41px] flex">
              <div className="items-j w-[130px] border-bx">버스</div>
              <div className="pl-4 items">
                <span>(</span>
                <ContractInput width="100px" />
                <span>) 정류장, 소요시간:( </span>
                <ContractRadio
                  name="time"
                  options={[{ label: "도보" }, { label: "차량" }]}
                />
                <span>) 약 &nbsp;</span>
                <ContractInput width="100px" />
                <span>&nbsp;분 </span>
              </div>
            </div>
            <div className="h-[41px] border-bt w-[907px] flex">
              <div className="items-j border-bx  w-[130px]">지하철</div>
              <div className="pl-4 items">
                <span>(</span>
                <ContractInput width="100px" />
                <span>) 역, 소요시간:( </span>
                <ContractRadio
                  name="time"
                  options={[{ label: "도보" }, { label: "차량" }]}
                />
                <span>) 약 &nbsp;</span>
                <ContractInput width="100px" />
                <span>&nbsp;분 </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items">
          <div className="items-j  w-[130px] h-[41px]">주차장</div>
          <div className="pt-2 pl-4 h-[41px] border-bl items">
            <ContractRadioInputText
              options={[
                { label: "없음", value: "none" },
                { label: "전용주차시설", value: "none" },
                { label: "공동주차시설", value: "none" },
                { label: "그 밖의 주차시설", value: "exists" },
              ]}
              inputLabel=""
              inputWidth="500px"
              unit=""
            />
          </div>
        </div>
        <div className="flex border-by">
          <div className="items-j  w-[130px]">교육시설</div>
          <div>
            <div className="flex">
              <div className="items-j border-bx h-[41px] w-[130px]">
                초등학교
              </div>
              <div className="pl-4 items">
                <span>(</span>
                <ContractInput width="100px" />
                <span>) 학교, 소요시간:( </span>
                <ContractRadio
                  name="time"
                  options={[{ label: "도보" }, { label: "차량" }]}
                />
                <span>) 약 &nbsp;</span>
                <ContractInput width="100px" />
                <span>&nbsp;분 </span>
              </div>
              <div></div>
            </div>
            <div className="flex w-[907px] border-by">
              <div className="items-j border-bx h-[41px] w-[130px]">중학교</div>
              <div className="pl-4 items">
                <span>(</span>
                <ContractInput width="100px" />
                <span>) 학교, 소요시간:( </span>
                <ContractRadio
                  name="time"
                  options={[{ label: "도보" }, { label: "차량" }]}
                />
                <span>) 약 &nbsp;</span>
                <ContractInput width="100px" />
                <span>&nbsp;분 </span>
              </div>
            </div>
            <div className="flex">
              <div className="items-j border-bx h-[41px] w-[130px]">
                고등학교
              </div>
              <div className="pl-4 items">
                <span>(</span>
                <ContractInput width="100px" />
                <span>) 학교, 소요시간:( </span>
                <ContractRadio
                  name="time"
                  options={[{ label: "도보" }, { label: "차량" }]}
                />
                <span>) 약 &nbsp;</span>
                <ContractInput width="100px" />
                <span>&nbsp;분 </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="items-j w-[130px] ">판매 및 의료시설</div>
          <div>
            <div className="flex border-bb w-[907px]">
              <div className="h-[71px] border-bx w-[130px] items-j">
                백화점 및 <br />
                할인매장
              </div>

              <div className="pl-4 items">
                <span>(</span>
                <ContractInput width="100px" />
                <span>) 소요시간:( </span>
                <ContractRadio
                  name="time"
                  options={[{ label: "도보" }, { label: "차량" }]}
                />
                <span>) 약 &nbsp;</span>
                <ContractInput width="100px" />
                <span>&nbsp;분 </span>
              </div>
            </div>
            <div className="flex">
              <div className="h-[41px] w-[130px] border-bx items-j">
                종합의료시설
              </div>

              <div className="pl-4 items">
                <span>(</span>
                <ContractInput width="100px" />
                <span>) 소요시간:( </span>
                <ContractRadio
                  name="time"
                  options={[{ label: "도보" }, { label: "차량" }]}
                />
                <span>) 약 &nbsp;</span>
                <ContractInput width="100px" />
                <span>&nbsp;분 </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LocationConditions;
