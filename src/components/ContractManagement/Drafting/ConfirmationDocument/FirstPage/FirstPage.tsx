import Notes from "./Notes";
import TenantConfirmation from "./TenantConfirmation";

const FirstPage = () => {
  return (
    <>
      <div className="w-[1223px] text-center h-[66px] rounded border border-gray text-[45px] font-bold">
        중개대상물 확인 · 설명서[I](주거용 건축물)
      </div>
      <Notes />
      <TenantConfirmation />
    </>
  );
};
export default FirstPage;
