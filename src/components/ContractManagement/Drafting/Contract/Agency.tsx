import React, { useState } from "react";

interface AgencyInfo {
  address: string;
  officeName: string;
  representative: string;
  phoneNumber: string;
  registrationNumber: string;
  affiliatedAgent: string;
}

const Agency: React.FC = () => {
  const [currentAgency, setCurrentAgency] = useState<AgencyInfo>({
    address: "",
    officeName: "",
    representative: "",
    phoneNumber: "",
    registrationNumber: "",
    affiliatedAgent: "",
  });

  const [agencies, setAgencies] = useState<AgencyInfo[]>([]);

  const addAgency = () => {
    setAgencies((prevAgencies) => [...prevAgencies, currentAgency]);

    setCurrentAgency({
      address: "",
      officeName: "",
      representative: "",
      phoneNumber: "",
      registrationNumber: "",
      affiliatedAgent: "",
    });
  };

  const handleInputChange = (field: keyof AgencyInfo, value: string) => {
    setCurrentAgency((prevAgency) => ({
      ...prevAgency,
      [field]: value,
    }));
  };

  return (
    <div className="text-[14px]">
      <div className="flex justify-end m-5">
        <button
          onClick={addAgency}
          className="w-[178px] flex justify-center border-32"
        >
          + 개업 공인중개사 정보 추가
        </button>
      </div>
      <div className="flex">
        <div className="w-[189px] items justify-center  text-center border-g h-[137px] bg-[#E5E6EB]">
          개인
          <br />
          공인중개사
        </div>
        <div>
          <div className=" w-[1050px] border-g">
            <div className="w-[189px] h-[44px] pl-2 items border-r border-gray-300 bg-gray-100">
              사무소 소재지
            </div>
            <div className="w-[861px] items-j">
              <input
                type="text"
                value={currentAgency.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                className="w-[842px] border-32"
              />
            </div>
          </div>
          <div className=" w-[1050px] border-g">
            <div className="w-[189px] h-[44px] pl-2 border-r items border-gray-300 bg-gray-100">
              사무소 명칭
            </div>
            <div className="w-[565px] items-j">
              <input
                type="text"
                value={currentAgency.officeName}
                onChange={(e) =>
                  handleInputChange("officeName", e.target.value)
                }
                className="w-[552px] border-32"
              />
            </div>
            <div className="bg-gray-100 w-[92px] pl-2 h-[44px] border-g">
              대표자명
            </div>
            <div className="items-j">
              <input
                type="text"
                value={currentAgency.representative}
                onChange={(e) =>
                  handleInputChange("representative", e.target.value)
                }
                className="w-[169px] ml-1 border-32"
              />
              (인)
            </div>
          </div>
          <div className="flex w-[1050px] border border-gray-300">
            <div className="w-[189px] h-[44px] pl-2 items border-r border-gray-300 bg-gray-100">
              전화번호
            </div>
            <div className="w-[189px] items-j">
              <input
                type="text"
                value={currentAgency.phoneNumber}
                onChange={(e) =>
                  handleInputChange("phoneNumber", e.target.value)
                }
                className="w-[175px] border-32"
              />
            </div>
            <div className="w-[126px] h-[44px] pl-2 items border-x border-gray-300 bg-gray-100">
              등록 번호
            </div>
            <div className="w-[251px] items-j">
              <input
                type="text"
                value={currentAgency.registrationNumber}
                onChange={(e) =>
                  handleInputChange("registrationNumber", e.target.value)
                }
                className="w-[236px]  border-32"
              />
            </div>
            <div className="w-[92px] h-[44px] items  border-x border-gray-300 bg-gray-100">
              소속 공인중개사
            </div>
            <div className="items">
              <input
                type="text"
                value={currentAgency.affiliatedAgent}
                onChange={(e) =>
                  handleInputChange("affiliatedAgent", e.target.value)
                }
                className="w-[169px] ml-1 border-32"
              />
              (인)
            </div>
          </div>
        </div>
      </div>

      {/* 추가정보 */}
      {agencies.length > 0 && (
        <div>
          {agencies.map((agency, index) => (
            <div key={index} className="flex">
              <div className="w-[189px] items justify-center text-center border-g h-[137px] bg-[#E5E6EB]">
                개인
                <br />
                공인중개사
              </div>
              <div>
                <div className="w-[1050px] border-g flex">
                  <div className="w-[189px] h-[44px] pl-2 items border-r border-gray-300 bg-gray-100 flex items-center">
                    사무소 소재지
                  </div>
                  <div className="w-[861px] items-j flex items-center">
                    <span className="w-[842px] ml-2">{agency.address}</span>
                  </div>
                </div>
                <div className="w-[1050px] border-g flex">
                  <div className="w-[189px] h-[44px] pl-2 border-r items border-gray-300 bg-gray-100 flex items-center">
                    사무소 명칭
                  </div>
                  <div className="w-[565px] items-j flex items-center">
                    <span className="w-[552px] ml-2">{agency.officeName}</span>
                  </div>
                  <div className="bg-gray-100 w-[92px] pl-2 h-[44px] border-g flex items-center">
                    대표자명
                  </div>
                  <div className="flex items-center items-j">
                    <span className="w-[169px] ml-2">
                      {agency.representative}
                    </span>
                    (인)
                  </div>
                </div>
                <div className="flex w-[1050px] border border-gray-300">
                  <div className="w-[189px] h-[44px] pl-2 items border-r border-gray-300 bg-gray-100 flex items-center">
                    전화번호
                  </div>
                  <div className="w-[189px] items-j flex items-center">
                    <span className="w-[175px] ml-2">{agency.phoneNumber}</span>
                  </div>
                  <div className="w-[126px] h-[44px] pl-2 items border-x border-gray-300 bg-gray-100 flex items-center">
                    등록 번호
                  </div>
                  <div className="w-[251px] items-j flex items-center">
                    <span className="w-[236px] ml-2">
                      {agency.registrationNumber}
                    </span>
                  </div>
                  <div className="w-[92px] h-[44px] items border-x border-gray-300 bg-gray-100 flex items-center">
                    소속 공인중개사
                  </div>
                  <div className="flex items-center items">
                    <span className="w-[169px] ml-2">
                      {agency.affiliatedAgent}
                    </span>
                    (인)
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Agency;
