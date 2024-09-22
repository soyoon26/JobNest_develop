import ConditionOfInternalExternalFacilities from "./ConditionOfInternalExternalFacilities";
import EnvironmentInformation from "./EnvironmentInformation";
import PropertyRights from "./PropertyRights";
import WallpaperCondition from "./WallpaperCondition";

const ThirdPage = () => {
  return (
    <>
      <span className="text-[20px] font-bold">
        2. 개업공인중개사 세부 확인사항
      </span>
      <PropertyRights />
      <ConditionOfInternalExternalFacilities />
      <WallpaperCondition />
      <EnvironmentInformation />
      <ul className="pl-5 list-disc ">
        <li className="text-[15px] leading-[22px]">
          "중개보조원"이라 함은 공인중개사가 아닌 자로서 개업공인중개사에게
          소속되어 중개대상물에 대한 현장안내 및 일반서무 등 개업공인중개사의
          중개업무와 관련된 단순한 업무를 보조하는 자를 말합니다.
        </li>
        <li className="text-[15px] leading-[22px] mt-2 mb-32">
          중개보조원은 법 제18조의4에 따라 현장안내 등 중개업무를 보조하는 경우
          중개의뢰인에게 본인이 중개보조원이라는 사실을 미리 고지하여야 합니다.
        </li>
      </ul>
    </>
  );
};
export default ThirdPage;
