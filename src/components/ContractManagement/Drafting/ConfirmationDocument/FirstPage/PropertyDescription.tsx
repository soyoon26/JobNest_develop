import React from "react";
// import { FaExclamationCircle } from "react-icons/fa";

const PropertyDescription: React.FC = () => {
  return (
    <div className="bg-white ">
      <h1 className="mb-4 text-lg font-bold">
        1. 개업공인중개사 기본 확인사항
      </h1>

      <div className="h-[467px] flex border-by">
        <div className="flex flex-col border-br h-full items-j w-[153px]">
          <div className="text-center">
            ① 대상 물건의
            <br /> 표시
          </div>
          <button className="text-[13px] mt-2 bg-[#335995] rounded-md p-2 items-j text-white">
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
                  <input type="text" className="w-[834px] border-32" />
                </div>
              </div>
              {/* 면적 */}
              <div className="flex h-[84px]">
                <div className="w-[150px] border-br border-bb items-j">
                  면적
                </div>
                <div className="w-[300px] h-full border-bb border-br"> </div>
                <div className="w-[75px] border-br border-bb items-j">지목</div>
                <div className="flex flex-col flex-1">
                  <div className="h-[42px] flex">
                    <div className="w-[150px] items-j h-full">공부상 지목</div>
                    <div className="flex-1 h-[43px] border-bb border-bl">
                      ??
                    </div>
                  </div>
                  <div className="h-[42px] flex">
                    <div className="w-[150px] border-by items-j h-full">
                      실제 이용 상태
                    </div>
                    <div className="flex-1 h-[42px] border-bb border-bl">
                      ??
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
                <div className="border-br w-[150px] items-j">전용면적(m2)</div>
                <div className="w-[300px] h-full  border-br"> </div>
                <div className="w-[225px] items-j border-br">대지지분</div>
                <div></div>
              </div>
              <div className=" h-[126px] flex">
                <div className="items-j h-full border-bb w-[150px] border-br">
                  준공 년도
                  <br />
                  중개축년도
                </div>
                <div className="w-[300px] items-j h-full border-bb border-br">
                  <input type="text" className="w-[290px] border-32" />
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
                <div>
                  <div className="h-[42px]">
                    <input type="text" className="w-[345px] border-32" />
                  </div>
                  <div className="w-[150px] h-[84px] border-by"></div>
                </div>
              </div>
              <div className="flex h-[84px]">
                <div className="border-br w-[150px] border-bb items-j">
                  구조
                </div>
                <div></div>
                <div className="border-br w-[225px] border-bb items-j">
                  방향
                </div>
                <div></div>
              </div>
              <div></div>
              <div className="flex">
                <div>
                  건축물대장상
                  <br />
                  위반건축물 여부
                </div>
                <div></div>
                <div>위반 내용</div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDescription;
