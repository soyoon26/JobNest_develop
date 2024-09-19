import React, { useState } from "react";
import ContractDropDown from "../Common/ContractDropDown";

interface PersonInfo {
  address: string;
  idNumber: string;
  phone: string;
  name: string;
}

interface TransactionFormProps {
  formType: "매도인" | "매수인";
}

const TransactionForm: React.FC<TransactionFormProps> = ({ formType }) => {
  const [currentPerson, setCurrentPerson] = useState<PersonInfo>({
    address: "",
    idNumber: "",
    phone: "",
    name: "",
  });

  const [people, setPeople] = useState<PersonInfo[]>([]);
  const information = ["주민등록번호"];

  const addPerson = () => {
    setPeople((prevPeople) => [...prevPeople, currentPerson]);
    setCurrentPerson({
      address: "",
      idNumber: "",
      phone: "",
      name: "",
    });
  };

  const handleInputChange = (field: keyof PersonInfo, value: string) => {
    setCurrentPerson((prevPerson) => ({
      ...prevPerson,
      [field]: value,
    }));
  };

  return (
    <div className="text-[14px]">
      <div className="flex justify-end m-5">
        <button
          onClick={addPerson}
          className="w-[125px] flex justify-center border-32"
        >
          +{formType} 정보 추가
        </button>
      </div>

      {/* 입력 폼 */}
      <div className="flex">
        <div className="w-[189px] flex-col items justify-center text-center border-g h-[89px] bg-[#E5E6EB]">
          {formType}
          <button className=" bg-[#747474] w-[167px] h-[29px] text-white">
            고객검색
          </button>
        </div>

        {/* 테이블 */}
        <div className="flex flex-col w-[851px] border-g">
          <div className="flex">
            <div className="w-[189px] h-[44px] pl-2 items border-gright border-gb bg-gray-100 flex items-center">
              주소
            </div>
            <div className="w-[662px] border-gb items-j">
              <input
                type="text"
                value={currentPerson.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                className="w-[649px] border rounded h-[32px]"
              />
            </div>
          </div>
          {/* 두번째 행 */}
          <div className="h-[43px] flex">
            <div className="w-[189px] h-[43px] pl-2 items border-gright bg-gray-100 flex items-center">
              <ContractDropDown items={information} width="175px" />
            </div>
            <div className="w-[188px] items-j">
              <input
                type="text"
                value={currentPerson.idNumber}
                onChange={(e) => handleInputChange("idNumber", e.target.value)}
                className="w-[175px] border h-[32px]"
              />
            </div>
            <div className="w-[92px] h-[44px] pl-2 items border-gx border-gb bg-gray-100 items-center flex">
              전화
            </div>
            <div className="w-[151px] items-j">
              <input
                type="text"
                value={currentPerson.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="border rounded w-[138px] h-[32px]"
              />
            </div>
            <div className="w-[92px] h-[44px] pl-2 items border-gb border-gx bg-gray-100 items-center flex">
              성명
            </div>
            <div className="w-[139px] items-j">
              <input
                type="text"
                value={currentPerson.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="border rounded w-[125px] h-[32px]"
              />
            </div>
          </div>
        </div>
        <div className="w-[198px] items-j border-g">(인)</div>
      </div>

      {/* 추가*/}
      {people.length > 0 && (
        <div>
          {people.map((person, index) => (
            <div key={index} className="flex">
              <div className="w-[189px] flex-col items justify-center text-center border-g h-[89px] bg-[#E5E6EB]">
                {formType}
              </div>

              <div className="flex flex-col w-[851px] border-g">
                <div className="flex">
                  <div className="w-[189px] h-[44px] pl-2 items border-gright border-gb bg-gray-100 flex items-center">
                    주소
                  </div>
                  <div className="w-[662px] border-gb items pl-3 flex items-center">
                    {person.address}
                  </div>
                </div>
                <div className="h-[43px] flex">
                  <div className="w-[189px] h-[43px] pl-2 items border-gright bg-gray-100 flex items-center">
                    주민등록번호
                  </div>
                  <div className="w-[188px] items-j flex items-center pl-2">
                    {person.idNumber}
                  </div>
                  <div className="w-[92px] h-[44px] pl-2 items border-gx border-gb bg-gray-100 items-center flex">
                    전화
                  </div>
                  <div className="w-[151px] items-j flex items-center pl-2">
                    {person.phone}
                  </div>
                  <div className="w-[92px] h-[44px] pl-2 items border-gb border-gx bg-gray-100 items-center flex">
                    성명
                  </div>
                  <div className="w-[139px] items-j flex items-center pl-2">
                    {person.name}
                  </div>
                </div>
              </div>
              <div className="w-[198px] items-j border-g flex items-center">
                (인)
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TransactionForm;
