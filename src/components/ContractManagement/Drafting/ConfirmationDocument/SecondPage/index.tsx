import DetailsOfRights from "./DetailsOfRights";
import ExpectedTransactionAmount from "./ExpectedTransactionAmount";
import Tax from "./Tax";
import UnwantedFacility from "./UnwantedFacility";

const SecondPage = () => {
  return (
    <>
      <DetailsOfRights />
      <UnwantedFacility />
      <ExpectedTransactionAmount />
      <Tax />
    </>
  );
};
export default SecondPage;
