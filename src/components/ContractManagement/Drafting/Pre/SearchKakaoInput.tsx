import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchKakaoInputProps {
  onChange: (value: string) => void;
}

const SearchKakaoInput: React.FC<SearchKakaoInputProps> = ({ onChange }) => {
  const [address, setAddress] = useState<string>("");

  const openAddressSearch = () => {
    new window.daum.Postcode({
      oncomplete: function (data: any) {
        let fullAddress = data.roadAddress;
        if (data.userSelectedType === "J") {
          fullAddress = data.jibunAddress;
        }

        setAddress(fullAddress);
        onChange(fullAddress);
      },
    }).open();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAddress = e.target.value;
    setAddress(newAddress);
    onChange(newAddress);
  };

  return (
    <div className="relative w-[477px] h-[26px]">
      <input
        type="text"
        value={address}
        onChange={handleInputChange}
        placeholder="주소를 입력해주세요"
        className="w-full h-full px-3 py-1.5 text-xs text-[#6F6F6F] border border-[#6F6F6F] rounded-md pr-10"
      />
      <div
        className="absolute transform -translate-y-1/2 cursor-pointer right-2 top-1/2"
        onClick={openAddressSearch}
      >
        <FaSearch className="text-[#6F6F6F]" />
      </div>
    </div>
  );
};

export default SearchKakaoInput;
