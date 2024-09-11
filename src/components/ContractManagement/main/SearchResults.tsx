import React, { useEffect, useState } from "react";

import {
  useTable,
  useRowSelect,
  HeaderGroup,
  Column as TableColumn,
  CellProps,
  HeaderProps,
} from "react-table";
import SearchResultsBtn from "./SearchResultsBtn";
import SearchResultsDropDown from "./SearchResultsDropDown";
import WarningIcon from "./WarningIcon";

type Data = {
  계약일: string;
  잔금일: string;
  만기일: string;
  계약서유형: string;
  거래유형: string;
  소재지: string;
  매매보증금: number;
  매도임대인: string;
  매수입차인: string;
  공동중개업소: string | null;
  계약서번호: string;
};

type SearchResultsProps = {
  filteredData: Data[];
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "-";
  return `${date.getFullYear().toString().slice(2)}.${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}.${date.getDate().toString().padStart(2, "0")}`;
};

const formatNumber = (number: number | undefined): string => {
  if (number === undefined) return "-";
  return number.toLocaleString();
};

const SearchResults: React.FC<SearchResultsProps> = ({ filteredData }) => {
  const [data, setData] = useState<Data[]>(filteredData);

  useEffect(() => {
    setData(filteredData);
  }, [filteredData]);

  const columns: TableColumn<Data>[] = React.useMemo(
    () => [
      {
        id: "selection_column",
        Header: ({ getToggleAllRowsSelectedProps }: HeaderProps<Data>) => (
          <div>
            <input type="checkbox" {...getToggleAllRowsSelectedProps()} />
          </div>
        ),
        Cell: (cellProps: CellProps<Data>) => (
          <div>
            <input
              type="checkbox"
              {...cellProps.row.getToggleRowSelectedProps()}
            />
          </div>
        ),
      },
      {
        Header: "계약일",
        accessor: (row) => formatDate(row.계약일),
        id: "contract_date",
      },
      {
        Header: "잔금일",
        accessor: (row) => formatDate(row.잔금일),
        id: "balance_date",
      },
      {
        Header: "만기일",
        accessor: (row) => formatDate(row.만기일),
        id: "expiry_date",
      },
      {
        Header: () => (
          <div>
            계약서
            <br />
            유형
          </div>
        ),
        accessor: "계약서유형",
        id: "contract_type",
      },
      {
        Header: () => (
          <div>
            거래
            <br />
            유형
          </div>
        ),
        accessor: "거래유형",
        id: "transaction_type",
      },
      {
        Header: "소재지",
        accessor: "소재지",
        id: "location",
      },
      {
        Header: "매매(보증)금",
        accessor: (row) => formatNumber(row.매매보증금),
        id: "sale_deposit",
      },
      { Header: "매도/임대인", accessor: "매도임대인", id: "seller_landlord" },
      { Header: "매수/임차인", accessor: "매수입차인", id: "buyer_tenant" },
      { Header: "공동 중개업소", accessor: "공동중개업소", id: "joint_agency" },
      {
        Header: "계약 관리",
        id: "contract_management",
        Cell: ({}: CellProps<Data>) => (
          <button
            className="px-2 py-1 text-gray-500 border border-gray-300 rounded"
            onClick={() => console.log("계약관리 버튼 클릭")}
          >
            상세보기
          </button>
        ),
      },
      { Header: "계약서번호", accessor: "계약서번호", id: "contract_number" },
    ],
    []
  );

  const { getTableProps, headerGroups, rows, prepareRow } = useTable<Data>(
    { columns, data },
    useRowSelect
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const totalPages = Math.ceil(data.length / pageSize);

  const handleFirstPage = () => setCurrentPage(1);
  const handlePreviousPage = () => setCurrentPage(Math.max(1, currentPage - 1));
  const handleNextPage = () =>
    setCurrentPage(Math.min(totalPages, currentPage + 1));
  const handleLastPage = () => setCurrentPage(totalPages);
  const handlePageSizeChange = (item: string) => {
    const size = parseInt(item.replace("개씩 보기", "").trim());
    setPageSize(size);
    setCurrentPage(1);
  };

  return (
    <div className="w-[1142px]  bg-white">
      <div className="w-[1067px] pt-4 mx-auto">
        <div className="flex items-center justify-between my-4">
          <div className="font-bold">
            검색결과 <span className="text-[#335995]">{data.length}</span>
          </div>
          <div className="flex gap-2">
            {data.length >= 1 ? (
              <>
                <SearchResultsBtn
                  text="개인정보 수집 및 이용 동의서 출력"
                  borderColor="#335995"
                  textColor="#335995"
                  width={191}
                  onClick={() => console.log("")}
                />
                <SearchResultsBtn
                  text="엑셀다운로드"
                  borderColor="#D9D9D9"
                  textColor="black"
                  width={96}
                  onClick={() => console.log("")}
                />
                <SearchResultsDropDown
                  selectedItem={`${pageSize}개씩 보기`}
                  onSelect={handlePageSizeChange}
                />
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
        <table
          {...getTableProps()}
          className="w-full mb-4"
          style={{ maxWidth: "1067px" }}
        >
          <thead>
            {headerGroups.map((headerGroup: HeaderGroup<Data>) => (
              <tr
                {...(headerGroup.getHeaderGroupProps() as React.HTMLProps<HTMLTableRowElement>)}
              >
                {headerGroup.headers.map((column, columnIndex) => (
                  <th
                    {...(column.getHeaderProps() as React.HTMLProps<HTMLTableHeaderCellElement>)}
                    className="font-bold text-center "
                    style={{
                      padding: "10px 5px",
                      fontSize: "15px",
                      backgroundColor: "#D9D9D9",
                      borderTopLeftRadius:
                        columnIndex === 0 ? "12px" : undefined,
                      borderBottomLeftRadius:
                        columnIndex === 0 ? "12px" : undefined,
                      borderTopRightRadius:
                        columnIndex === headerGroup.headers.length - 1
                          ? "12px"
                          : undefined,
                      borderBottomRightRadius:
                        columnIndex === headerGroup.headers.length - 1
                          ? "12px"
                          : undefined,
                    }}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {rows
              .slice((currentPage - 1) * pageSize, currentPage * pageSize)
              .map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td
                        {...cell.getCellProps()}
                        className={`text-[12px] text-center font-bold ${
                          cell.column.id === "location"
                            ? "break-words max-w-[200px]"
                            : "whitespace-nowrap"
                        }`}
                        style={{ padding: "10px 5px" }}
                      >
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                );
              })}
          </tbody>
        </table>
        {data.length === 0 && <WarningIcon />}
        {data.length > 0 && (
          <div className="flex items-center justify-center p-2 pb-8 mt-4 space-x-2 ">
            <button
              onClick={handleFirstPage}
              className="w-[20px] h-[20px] border border-gray-300 text-gray-500 text-[12px] flex items-center justify-center rounded"
            >
              {"<<"}
            </button>
            <button
              onClick={handlePreviousPage}
              className="w-[20px] h-[20px] border border-gray-300 text-gray-500 text-[12px] flex items-center justify-center rounded"
            >
              {"<"}
            </button>
            <span className="w-[20px] h-[20px] flex items-center justify-center border border-[#335995] text-white bg-[#335995] text-[12px] rounded">
              {currentPage}
            </span>
            <button
              onClick={handleNextPage}
              className="w-[20px] h-[20px] border border-gray-300 text-gray-500 text-[12px] flex items-center justify-center rounded"
            >
              {">"}
            </button>
            <button
              onClick={handleLastPage}
              className="w-[20px] h-[20px] border border-gray-300 text-gray-500 text-[12px] flex items-center justify-center rounded"
            >
              {">>"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
