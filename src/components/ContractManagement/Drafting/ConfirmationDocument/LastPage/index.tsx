import ContractSignature from "./PeopleInfo";
import HowToWrite from "./HowToWrite";
import Signiture from "./Signiture";

const LsatPage = () => {
  return (
    <>
      <span>3. 중개보수 등에 관한 사항</span>
      <Signiture />
      <ContractSignature />
      <HowToWrite />
    </>
  );
};

export default LsatPage;
