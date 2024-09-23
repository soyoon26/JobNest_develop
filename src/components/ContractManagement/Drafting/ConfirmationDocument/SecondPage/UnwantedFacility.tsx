import React, { useState } from "react";

const UnwantedFacility: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("없음");
  const [facilityDetail, setFacilityDetail] = useState<string>("");

  return (
    <div className="mt-4 text-[13px] items h-[50px] border-by  w-[1197px]">
      <div className="items-j h-full text-center border-br w-[150px]">
        ⑦ 비선호시설 <br />
        (1km 이내)
      </div>

      <div className="flex items-center ">
        <label className="flex items-center mr-4">
          <input
            type="radio"
            name="facility"
            value="없음"
            checked={selectedOption === "없음"}
            onChange={() => setSelectedOption("없음")}
            className="ml-2 mr-2 "
          />
          없음
        </label>

        <label className="flex items-center mr-4">
          <input
            type="radio"
            name="facility"
            value="있음"
            checked={selectedOption === "있음"}
            onChange={() => setSelectedOption("있음")}
            className="mr-2"
          />
          있음 (종류 및 위치:
        </label>

        <input
          type="text"
          disabled={selectedOption !== "있음"}
          value={facilityDetail}
          onChange={(e) => setFacilityDetail(e.target.value)}
          className="flex-1 border-g h-[30px] w-[800px]"
        />
        <span>)</span>
      </div>
    </div>
  );
};

export default UnwantedFacility;
