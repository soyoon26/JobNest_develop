import React from "react";
import ContractDropDown from "../../Common/ContractDropDown";
import ContractInput from "../../Common/ContractInput";
import ContractRadio from "../../Common/ContractRadio";
// import { FaExclamationCircle } from "react-icons/fa";

const PropertyDescription: React.FC = () => {
  const items = ["직접입력"];
  const select = ["선택"];
  const rand = ["대", "지", "도로"];
  return (
    <div className="bg-white w-[1197px]">
      <h1 className="mb-4 text-lg font-bold">
        1. 개업공인중개사 기본 확인사항
      </h1>

      <div className="h-[467px] flex border-by">
        <div className="flex flex-col border-br h-full items-j w-[150px]">
          <div className="text-center ">
            ① 대상 물건의
            <br /> 표시
          </div>
          <button className="text-[13px] mt-2  bg-[#335995] rounded-md p-2 items-j text-white">
            PDF 열람 및 연동
          </button>
        </div>

        <div className="h-[170px] w-[1198px] text-[14px]">
          <div className="flex">
            <div className="flex-col border-bb border-br items-j h-[126px] w-[100px]">
              <span className="font-bold">토지</span>
              <div className="text-[13px] text-[#335995]">
                공부연동
                <br />
                가능 항목
              </div>
            </div>
            <div className="flex flex-col w-full">
              {/* 소재지 */}
              <div className="h-[42px] flex w-full">
                <div className="w-[150px] border-br border-bb items-j">
                  소재지
                </div>
                <div className="flex-1 items-j border-bb">
                  <ContractInput width="800px" />
                </div>
              </div>
              {/* 면적 */}
              <div className="flex h-[84px]">
                <div className="w-[150px] border-br border-bb items-j">
                  면적
                </div>
                <div className="w-[300px] items-j h-full border-bb border-br">
                  <div className="relative w-[274px] h-[32px]">
                    <input
                      type="text"
                      className="w-full h-full px-3 rounded-full border-32 focus:outline-none"
                    />
                    <span className="absolute text-gray-500 transform -translate-y-1/2 right-3 top-1/2">
                      m²
                    </span>
                  </div>{" "}
                </div>
                <div className="w-[74px] border-br border-bb items-j">지목</div>
                <div className="flex flex-col flex-1">
                  <div className="h-[42px] flex">
                    <div className="w-[150px] items-j h-full">공부상 지목</div>
                    <div className="flex-1 h-[43px] border-bb border-bl items-j">
                      <ContractDropDown width="274px" items={rand} />
                    </div>
                  </div>
                  <div className="h-[42px] w-full flex">
                    <div className="w-[150px] border-by items-j">
                      실제 이용 상태
                    </div>
                    <div className="flex-1 h-[42px] border-bb border-bl items-j">
                      <ContractInput width="274px" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex-col border-br items-j h-[341px] w-[100px]">
              <span className="font-bold">건축물</span>
              <div className="text-[13px] text-[#335995]">
                공부연동
                <br />
                가능 항목
              </div>
            </div>
            {/* 오른쪽 */}
            <div className="flex flex-col w-full">
              <div className="flex h-[42px] border-bb">
                <div className="border-br w-[150px] h-[40px] items-j">
                  전용면적(m2)
                </div>
                <div className="w-[300px] h-full items-j border-br">
                  <div className="relative w-[274px] h-[32px]">
                    <input
                      type="text"
                      className="w-full h-full px-3 rounded-full border-32 focus:outline-none"
                    />
                    <span className="absolute text-gray-500 transform -translate-y-1/2 right-3 top-1/2">
                      m²
                    </span>
                  </div>{" "}
                </div>
                <div className="w-[225px] items-j border-br">대지지분</div>
                <div className="flex-1 items-j">
                  <div className="relative w-[274px] h-[32px]">
                    <input
                      type="text"
                      className="w-full h-full px-3 ml-1 rounded-full border-32 focus:outline-none"
                    />
                    <span className="absolute text-gray-500 transform -translate-y-1/2 right-3 top-1/2">
                      m²
                    </span>
                  </div>
                </div>
              </div>
              <div className=" h-[126px] flex">
                <div className="items-j h-full border-bb w-[150px] border-br">
                  준공 년도
                  <br />
                  중개축년도
                </div>
                <div className="w-[300px] items-j h-full border-bb border-br">
                  <ContractInput width="274px" />
                </div>
                <div className="w-[75px] border-br border-bb items-j">용도</div>
                <div className="flex flex-col">
                  <div className="flex w-full">
                    <div className="w-[150px] border-br h-[42px] items-j">
                      건물대장상 용도
                    </div>
                  </div>
                  <div className="w-[150px] h-[84px] border-br items-j border-by">
                    실제 용도
                  </div>
                </div>
                <div className="flex-1">
                  {/* 건물대장상 */}
                  <div className="h-[42px] flex-1 items-j">
                    <input type="text" className=" ml-2 w-[274px] border-32" />
                  </div>
                  <div className="flex-1 items-j flex-col gap-1 h-[84px] border-by">
                    <ContractDropDown width="274px" items={items} />
                    <ContractInput width="274px" />
                  </div>
                </div>
              </div>
              <div className="flex w-full h-[86px]">
                <div className="border-br w-[150px] border-bb items-j">
                  구조
                </div>
                <div className="w-[300px] items-j border-bb border-br gap-1 flex-col">
                  <ContractDropDown width="274px" items={items} />
                  <ContractInput width="274px" />
                </div>
                <div className="border-br w-[225px] border-bb items-j">
                  방향
                </div>
                <div className="flex flex-1 items-j">
                  <ContractDropDown width="130px" items={select} />
                  <span>(기준:</span>
                  <ContractInput width="130px" />
                </div>
              </div>
              <div className="flex">
                <div className="border-br h-[40px] w-[150px] border-bb items-j">
                  내진설계 적용여부
                </div>
                <div className="w-[299px] items pl-4 border-bb">
                  <ContractRadio
                    name="yesOrNo"
                    options={[{ label: "없음" }, { label: "있음" }]}
                  />
                </div>
                <div className="w-[226px] items-j h-[40px]  border-bx">
                  내진능력
                </div>
                <div className="flex-1 items-j border-by">
                  <ContractInput width="274px" />
                </div>
              </div>
              <div className="flex h-full">
                <div className="border-br w-[150px]  items-j">
                  건축물대장상
                  <br />
                  위반건축물 여부
                </div>
                <div className="w-[299px] items pl-4">
                  <ContractRadio
                    name="legal"
                    options={[{ label: "위법" }, { label: "적법" }]}
                  />
                </div>

                <div className="w-[226px] items-j border-bt border-bx">
                  위반내용
                </div>
                <div className="flex-1 h-full items-j">
                  <textarea className="w-[274px] h-[44px]  p-2 border-g " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDescription;
