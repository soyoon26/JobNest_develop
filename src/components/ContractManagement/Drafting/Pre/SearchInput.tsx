import React, { useState } from "react";

const SearchInput: React.FC = () => {
  const [address, setAddress] = useState<string>("");

  return (
    <div className="relative mt-2 w-[477px] h-[26px]">
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="상세주소를 입력해주세요"
        className="w-full h-full px-3 py-1.5 text-xs text-[#6F6F6F] border border-[#6F6F6F] rounded-md pr-10"
      />
    </div>
  );
};

export default SearchInput;
