import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { FaExclamationCircle } from "react-icons/fa";
import ContractDropDown from "../Common/ContractDropDown";

const RealEstate = () => {
  const landRights = [
    "소유권",
    "지상권",
    "전세권",
    "임차권",
    "저당권",
    "지역권",
    "기타",
  ];
  const landTypeOptions = [
    "전",
    "답",
    "대",
    "과수원",
    "임야",
    "목장용지",
    "공장용지",
    "학교용지",
    "체육용지",
    "주차장",
    "도로",
    "구거",
    "철도용지",
    "공원",
    "유원지",
    "하천",
    "유휴지",
    "제방",
    "묘지",
    "잡종지",
  ];
  const buildingStructure = ["직접입력"];

  // 리덕스에서 detailAddress 사용
  const detailAddress = useSelector(
    (state: RootState) => state.contract.detailAddress
  );

  // [] 부분을 제외하고 추출
  const addressWithoutBracket = detailAddress?.split("[")[0].trim() || "";

  // 동과 호 추출
  const dong =
    addressWithoutBracket.split(" ").find((part) => part.endsWith("동")) || "";
  const ho =
    addressWithoutBracket.split(" ").find((part) => part.endsWith("호")) || "";

  // 주소에서 동과 호를 제외한 나머지 주소
  let locationAddress = addressWithoutBracket;
  if (dong) {
    locationAddress = locationAddress.replace(dong, "").trim();
  }
  if (ho) {
    locationAddress = locationAddress.replace(ho, "").trim();
  }

  return (
    <div className="p-4 bg-white">
      <span className="mr-2">1. 부동산의 표시</span>
      <button className="text-white bg-[#335995] rounded-md text-[13px] w-[129px] h-[32px] ">
        PDF 열람 및 연동
      </button>
      <div className="flex items-center text-sm text-gray-600">
        <FaExclamationCircle className="mr-2 text-gray-500" />
        <span className="my-4">
          공부연동이 가능한 항목입니다. 마우스로 클릭 시 기준 공부명을 확인할 수
          있습니다.
        </span>
      </div>

      {/* 소재지 */}
      <div className="flex">
        <div className="h-[42px] w-[114px] flex items-center pl-4 text-center bg-[#E5E6EB] border border-gray-300">
          소재지
        </div>
        <div className="w-[1113px] text-[12px] gap-1 items-center flex border border-gray-300 h-[42px]">
          <input
            type="text"
            value={locationAddress} // 동, 호 제외한 주소
            readOnly
            className="w-[798px] ml-1 pl-2 rounded h-[32px] bg-[#F0F0F3] border border-gray-300 "
          />
          <div className="flex items-center gap-1">
            <div className="flex items-center border w-[144px] h-[32px] bg-[#F0F0F3] border-gray-300 rounded-md">
              <input
                type="text"
                value={dong.replace("동", "").trim()} // 동만 표시
                readOnly
                className="w-4/5 pl-2 bg-[#F0F0F3] text-left focus:outline-none"
              />
              <span>동</span>
            </div>
            <div className="flex items-center bg-[#F0F0F3] border w-[144px] h-[32px] border-gray-300 rounded-md">
              <input
                type="text"
                value={ho.replace("호", "").trim()} // 호만 표시
                readOnly
                className="w-4/5 pl-2 bg-[#F0F0F3] text-left border-none focus:outline-none"
              />
              <span>호</span>
            </div>
          </div>
        </div>
      </div>

      {/* 토지 */}
      <div className="flex border w-[1227px] border-gray-300 text-[12px]">
        <div className=" h-[52px] text-[15px] w-[114px] flex items-center pl-4 text-center bg-[#E5E6EB] border-x border-gray-300">
          토지
        </div>
        <div className="flex pl-2 items-center w-[68px] h-[52px] text-center bg-gray-100 border-x border-gray-300 ">
          지목
          <FaExclamationCircle className="ml-1 text-gray-500 " />
        </div>
        <div className="w-[221px] flex items-center justify-center">
          <ContractDropDown items={landTypeOptions} width="211px" />
        </div>
        <div className="w-[92px] flex items-center pl-2 text-center bg-gray-100 border-x border-gray-300 ">
          면적
          <FaExclamationCircle className="ml-1 text-gray-500 " />
        </div>
        <div className="w-[159px] flex items-center justify-center">
          <div className="relative w-[150px] h-[32px] border border-gray-300 rounded-md ">
            <input
              type="text"
              className="w-full h-full p-2 pr-8 text-right bg-transparent outline-none "
            />
            <span className="absolute transform -translate-y-1/2 right-2 top-1/2">
              m2
            </span>
          </div>
        </div>

        <div className="p-2 w-[92px] text-center bg-gray-100 border-x border-gray-300 ">
          대지권 종류
          <FaExclamationCircle className="ml-2 text-gray-500 " />
        </div>
        <div className="w-[158px] flex items-center justify-center">
          <ContractDropDown items={landRights} width="150px" />
        </div>
        <div className="p-2 w-[92px] text-center bg-gray-100 border border-gray-300 ">
          대지권 비율
          <FaExclamationCircle className="ml-2 text-gray-500 " />
        </div>
        <div className="w-[235px] flex items-center justify-center">
          <input
            type="text"
            className="w-[87px] h-[32px] border mx-1 border-gray-300 rounded "
          />
          분의
          <input
            type="text"
            className="w-[87px] h-[32px] border mx-1 border-gray-300 rounded "
          />
        </div>
      </div>

      {/* 건물 */}
      <div className="flex w-[1227px] border text-[12px] border-gray-300 h-[42px]">
        <div className=" h-[42px] text-[15px] w-[114px] flex items-center pl-4 text-center bg-[#E5E6EB] border border-gray-300">
          건물
        </div>
        <div className="flex pl-2 items-center w-[68px]  text-center bg-gray-100 border-x border-gray-300 ">
          구조
          <FaExclamationCircle className="ml-1 text-gray-500 " />
        </div>
        <div className="w-[221px] gap-2 flex items-center justify-center">
          <ContractDropDown items={buildingStructure} width="104px" />
          <input
            type="text"
            className="w-[100px] h-[32px] border border-gray-300 rounded "
          />
        </div>

        <div className="flex pl-2 w-[92px] items-center  text-center bg-gray-100 border-x border-gray-300 ">
          용도
          <FaExclamationCircle className="ml-1 text-gray-500 " />
        </div>
        <div className="w-[408px] gap-2 flex items-center justify-center">
          <ContractDropDown items={buildingStructure} width="169px" />
          <input
            type="text"
            className="w-[220px] h-[32px] border border-gray-300 rounded "
          />
        </div>
        <div className="flex pl-2 w-[92px] items-center  text-center bg-gray-100 border-x border-gray-300 ">
          면적
          <FaExclamationCircle className="ml-1 text-gray-500 " />
        </div>
        <div className="w-[235px] flex justify-center items-center">
          <div className="relative w-[223px] h-[26px] border border-gray-300 rounded-md ">
            <input
              type="text"
              className="w-full h-full p-2 pr-8 text-right bg-transparent outline-none "
            />
            <span className="absolute transform -translate-y-1/2 right-2 top-1/2">
              m2
            </span>
          </div>
        </div>
      </div>
      <div className="flex mt-10 items">
        <input type="text" className="w-[169px] ml-1 mr-2 border-32" />
        원정 은 계약 시에 지급하고 영수함.
      </div>
    </div>
  );
};

export default RealEstate;
