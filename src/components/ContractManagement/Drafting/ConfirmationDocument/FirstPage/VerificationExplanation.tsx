import { useState } from "react";

const VerificationExplanation = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const options = [
    "등기 권리증",
    "등기사항증명서",
    "토지대장",
    "건축물대장",
    "지적도",
    "임야도",
    "토지이용계획확인서",
    "확정일자 부여현황",
    "전입세대 확인서",
    "국세납세 증명서",
    "지방세납세 증명서",
  ];

  const handleOptionClick = (option: string) => {
    if (selectedOption === option) {
      setSelectedOption(null);
    } else {
      setSelectedOption(option);
    }
  };
  return (
    <>
      <div className="w-[1237px] border-y border-black h-[170px] flex">
        <div className="w-[200px] border-r items-j border-black">
          확인·설명 자료
        </div>
        <div className="flex flex-col">
          <div className="flex border-b h-[100px] border-black">
            <div className="w-[180px] items-j">확인·설명 근거자료 등</div>
            <div className="flex flex-wrap w-[911px] gap-0.5">
              {options.map((option) => (
                <label key={option} className="flex items-center space-x-1">
                  <input
                    type="checkbox"
                    checked={selectedOption === option}
                    onChange={() => handleOptionClick(option)}
                    className="form-checkbox"
                  />
                  <span className="pr-2">{option}</span>
                </label>
              ))}

              <div className="flex items-center w-full space-x-2">
                <label className="flex items-center space-x-1">
                  <input
                    type="checkbox"
                    checked={selectedOption === "그 밖의 자료"}
                    onChange={() => handleOptionClick("그 밖의 자료")}
                    className="form-checkbox"
                  />
                  <span>그 밖의 자료 (</span>
                  <input
                    type="text"
                    className="p-1 border border-gray-300 rounded"
                    disabled={selectedOption !== "그 밖의 자료"}
                  />
                  <span>)</span>
                </label>
              </div>
            </div>
          </div>
          {/* 두번째 칸 */}
          <div className="flex">
            <div className="w-[180px] h-[70px] items-j text-center">
              대상물건의 상태에 관한
              <br />
              자료요구 사항
            </div>
            <div className="items-j">
              <div className="border-g  h-[63px]">
                <div className="w-[911px] p-4">
                  거래당사자는 위 확인·설명근거자료 등에 대한 사항을 발급/열람,
                  검색을 통해 확인하였으며, 물건의 현장답사를 통해 육안으로
                  확인/인지한 후 개업공인중개사가 작성한 아래 10-14항에 대한
                  설명을 통해 각 항목 기재 사항을 확인하고 내용에
                  동의함.(등기권리증 미제출)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default VerificationExplanation;
