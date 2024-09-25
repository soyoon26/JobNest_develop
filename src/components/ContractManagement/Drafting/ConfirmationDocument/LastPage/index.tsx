import ContractSignature from "./PeopleInfo";
import HowToWrite from "./HowToWrite";
import Signiture from "./Signiture";
import CalculationDetails from "./CalculationDetails";

const LsatPage = () => {
  return (
    <>
      <span className="text-[20px]">3. 중개보수 등에 관한 사항</span>
      <CalculationDetails />
      <Signiture />
      <ContractSignature />
      <HowToWrite />
    </>
  );
};

export default LsatPage;
