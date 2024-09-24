import axios from 'axios';
import { useEffect, useState } from 'react';

type TApiResponse = {
  result: Array<{
    id: number;
    category: string;
    unique: string;
    juso: string;
    owner: string[];
    is_change: boolean;
    pdf_url: string;
    created_at: string;
  }>;
};

const RegistrationIssuanceHistoryTable = () => {
  const data = [
    {
      type: '등기, 대장',
      number: '1718-2019-000001',
      address: '대전광역시 유성구 문화원로 77 1104',
      owner: '홍길동',
      changeInfo: '있음',
      openDate: '2024.08.29',
      newOpen: true,
      contractCreate: true,
      download: true,
    },
    {
      type: '등기',
      number: '-',
      address: '-',
      owner: '-',
      changeInfo: '없음',
      openDate: '2024.08.27',
      newOpen: true,
      contractCreate: true,
      download: true,
    },
    {
      type: '등기',
      number: '-',
      address: '-',
      owner: '-',
      changeInfo: '-',
      openDate: '-',
      newOpen: true,
      contractCreate: true,
      download: true,
    },
    {
      type: '대장',
      number: '-',
      address: '-',
      owner: '-',
      changeInfo: '-',
      openDate: '-',
      newOpen: false,
      contractCreate: false,
      download: true,
    },
    {
      type: '대장',
      number: '-',
      address: '-',
      owner: '-',
      changeInfo: '-',
      openDate: '-',
      newOpen: false,
      contractCreate: false,
      download: true,
    },
    {
      type: '대장',
      number: '-',
      address: '-',
      owner: '-',
      changeInfo: '-',
      openDate: '-',
      newOpen: false,
      contractCreate: false,
      download: true,
    },
  ];

  const [historyData, setHistoryData] = useState<TApiResponse['result']>([]);
  const [loading, setLoading] = useState(false);

  // 열람 내역 요청 함수 (axios 사용)
  const fetchHistoryData = async () => {
    const base_url = import.meta.env.VITE_BASE_URL;
    const endpoint = '/pdf-list';
    const full_url = `${base_url}${endpoint}`;

    setLoading(true); // 검색을 시작할 때 로딩 상태 시작

    try {
      const response = await axios.get(full_url);
      const json: TApiResponse = response.data;

      // 성공적으로 데이터를 받아오면 상태 업데이트
      setHistoryData(json.result);
    } catch (error) {
      console.error('API 요청 중 오류 발생:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistoryData();
  }, []);

  return (
    <div>
      {loading ? (
        <span className='flex justify-center items-center mt-[100px] mb-[140px]'>
          <span className='loader'></span>
        </span>
      ) : (
        <div className='overflow-x-auto mt-[72px]'>
          <table className='min-w-full table-auto border-collapse border border-gray-300'>
            <thead>
              <tr className='bg-gray-100 border border-[#7f7f7f] text-[15px]'>
                <th className='flex justify-center items-center pt-[11px]'>
                  <input
                    type='checkbox'
                    className='accent-[#347fff] w-[18px] h-[18px]'
                  />
                </th>
                <th className='border border-[#7f7f7f] p-2'>구분</th>
                <th className='border border-[#7f7f7f] p-2'>고유번호</th>
                <th className='border border-[#7f7f7f] p-2'>주소</th>
                <th className='border border-[#7f7f7f] p-2'>소유자</th>
                <th className='border border-[#7f7f7f] p-2'>변동정보</th>
                <th className='border border-[#7f7f7f] p-2'>열람 날짜</th>
                <th className='border border-[#7f7f7f] p-2'>등기 신규 열람</th>
                <th className='border border-[#7f7f7f] p-2'>계약서 작성</th>
                <th className='border border-[#7f7f7f] p-2'>다운로드</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className='text-[14px]'>
                  <td className='border border-[#7f7f7f] p-2 text-center'>
                    <input
                      type='checkbox'
                      className='accent-[#347fff] w-[18px] h-[18px]'
                    />
                  </td>
                  <td className='border border-[#7f7f7f] p-2 text-center'>
                    {row.type}
                  </td>
                  <td className='border border-[#7f7f7f] p-2 text-center'>
                    {row.number}
                  </td>
                  <td className='border border-[#7f7f7f] p-2 text-center'>
                    {row.address}
                  </td>
                  <td className='border border-[#7f7f7f] p-2 text-center'>
                    {row.owner}
                  </td>
                  <td className='border border-[#7f7f7f] p-2 text-center'>
                    {row.changeInfo}
                  </td>
                  <td className='border border-[#7f7f7f] p-2 text-center'>
                    {row.openDate}
                  </td>
                  <td className='border border-[#7f7f7f] p-2 text-center'>
                    <button className='bg-blue-500 text-white px-[20px] py-1 rounded text-[14px] w-[68px] h-[30px]'>
                      열람
                    </button>
                  </td>
                  <td className='border border-[#7f7f7f] p-2 text-center'>
                    <button className='bg-[#347fff] text-white px-[20px] py-1 rounded text-[14px] w-[68px] h-[30px]'>
                      작성
                    </button>
                  </td>
                  <td className='border border-[#7f7f7f] p-2 text-center'>
                    <button className='bg-[#347fff] text-white px-2 py-[5px] rounded text-[14px] w-[68px] h-[30px]'>
                      다운로드
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
export default RegistrationIssuanceHistoryTable;
