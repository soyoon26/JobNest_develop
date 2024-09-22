import React, { useState, useRef } from "react";
import ThirdPage from "./ThirdPage/index";
import LsatPage from "./LastPage/index";
import FirstPage from "./FirstPage/index";
import SecondPage from "./SecondPage/index";
import ContractBtn from "../Common/ContractBtn";

const ConfirmationDocument: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const pages = [
    { id: 1, content: <FirstPage /> },
    { id: 2, content: <SecondPage /> },
    { id: 3, content: <ThirdPage /> },
    { id: 4, content: <LsatPage /> },
  ];

  return (
    <div className="relative flex bg-white border-g " ref={containerRef}>
      <div className="flex-col flex-1 items-j">
        <div className="flex justify-end w-full gap-2 pr-4 mt-10 mb-4">
          <ContractBtn />
          <ContractBtn text="저장" color="#335995" textColor="white" />
        </div>
        <div className="w-[1223px] mt-4 h-[1px] bg-gray-300 mb-10"></div>
        <div>{pages[currentPage - 1].content}</div>
      </div>

      <div
        className="absolute flex flex-col bg-white border border-gray-200 shadow-lg top-44"
        style={{ left: "100%" }}
      >
        {pages.map((page) => (
          <button
            key={page.id}
            onClick={() => setCurrentPage(page.id)}
            className={`w-[96px] h-[95px] ${
              currentPage === page.id
                ? "bg-[#335995] text-white"
                : "text-[#335995] border border-[#335995]"
            }`}
          >
            {page.id}쪽
          </button>
        ))}
      </div>
    </div>
  );
};

export default ConfirmationDocument;
