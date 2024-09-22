import { useState } from "react";

const EnvironmentInformation = () => {
  const [selectedGuide, setSelectedGuide] = useState<string>("");
  const [disclosure, setDisclosure] = useState<string>("");

  const handleGuideChange = (value: string) => {
    setSelectedGuide(value);
    // 초기화
    if (value !== "중개보조원") {
      setDisclosure("");
    }
  };
  return (
    <>
      <div className="w-[1197px] border-by flex text-[14px] my-4">
        <div className="items-j w-[150px] h-[80px]  border-br text-center">
          ⑬환경
          <br />
          조건
        </div>
        <div className="flex flex-col w-full">
          <div className="flex h-[40px] border-bb w-full">
            <div className="items-j w-[150px] border-br">일조량</div>
          </div>
          <div className="flex h-[40px]">
            <div className="items-j w-[150px] border-br">소음</div>
            <div className="items-j w-[370px] border-br"></div>
            <div className="items-j w-[150px] border-br">진동</div>
          </div>
        </div>
      </div>
      <div className="w-[1197px] border-by flex text-[14px] my-4">
        <div className="items-j w-[133px] h-[40px]  border-br text-center">
          ⑭ 현장안내
        </div>

        <div className="items-j w-[150px]  border-br text-center">
          현장안내자
        </div>

        <div className="flex items-center justify-start w-[850px]  p-2  space-x-4">
          <label className="space-x-1 items">
            <input
              type="radio"
              name="guide"
              value="개업공인중개사"
              checked={selectedGuide === "개업공인중개사"}
              onChange={() => handleGuideChange("개업공인중개사")}
            />
            <span>개업공인중개사</span>
          </label>
          <label className="flex items-center space-x-1">
            <input
              type="radio"
              name="guide"
              value="소속공인중개사"
              checked={selectedGuide === "소속공인중개사"}
              onChange={() => handleGuideChange("소속공인중개사")}
            />
            <span>소속공인중개사</span>
          </label>
          <label className="flex items-center space-x-1">
            <input
              type="radio"
              name="guide"
              value="중개보조원"
              checked={selectedGuide === "중개보조원"}
              onChange={() => handleGuideChange("중개보조원")}
            />
            <span>중개보조원 (신분고지 여부:</span>
            <input
              type="radio"
              name="disclosure"
              value="예"
              checked={selectedGuide === "중개보조원" && disclosure === "여"}
              onChange={() => setDisclosure("여")}
              disabled={selectedGuide !== "중개보조원"}
            />
            <span>여</span>
            <input
              type="radio"
              name="disclosure"
              value="부"
              checked={selectedGuide === "중개보조원" && disclosure === "부"}
              onChange={() => setDisclosure("부")}
              disabled={selectedGuide !== "중개보조원"}
            />
            <span>부)</span>
          </label>
          <label className="flex items-center space-x-1">
            <input
              type="radio"
              name="guide"
              value="해당없음"
              checked={selectedGuide === "해당없음"}
              onChange={() => handleGuideChange("해당없음")}
            />
            <span>해당없음</span>
          </label>
        </div>
      </div>
    </>
  );
};
export default EnvironmentInformation;
