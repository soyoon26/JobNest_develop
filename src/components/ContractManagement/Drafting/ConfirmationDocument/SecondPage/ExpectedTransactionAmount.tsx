const ExpectedTransactionAmount = () => {
  return (
    <div className=" text-[13px] my-2 items h-[86px] font-bold border-by  w-[1163px]">
      <div className="items-j h-full text-center border-br w-[150px]">
        ⑧ 거래예정금액 등
      </div>
      <div className="w-[1013px]">
        <div className="h-[43px] flex border-bb">
          <div className="w-[130px]  items-j">거래예정금액</div>
          <div className="items-j border-bl">
            <input type="text" className="border-32 w-[860px] trans mx-2" />
          </div>
        </div>
        <div className="flex h-[43px]">
          <div className="w-[130px] items-j">개별공시지가(m2당)</div>
          <div className="items-j border-bx">
            <input type="text" className="border-32 w-[355px] trans mx-2" />
          </div>
          <div className="w-[130px] items-j">건물(주택)공시가격</div>
          <div className="items-j border-bl">
            <input type="text" className="border-32 w-[355px] trans mx-2" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExpectedTransactionAmount;
