import React, { useState, useRef } from "react";
import ThirdPage from "./ThirdPage";
import LsatPage from "./LsatPage";
import FirstPage from "./FirstPage/FirstPage";
import SecondPage from "./SecondPage";

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
    <div className="relative flex bg-white" ref={containerRef}>
      <div className="flex-1">
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
