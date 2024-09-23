import DetailsOfRights from "./DetailsOfRights";
import ExpectedTransactionAmount from "./ExpectedTransactionAmount";
import LocationConditions from "./LocationConditions";
import Tax from "./Tax";
import UnwantedFacility from "./UnwantedFacility";

const SecondPage = () => {
  return (
    <>
      <LocationConditions />
      <DetailsOfRights />
      <UnwantedFacility />
      <ExpectedTransactionAmount />
      <Tax />
    </>
  );
};
export default SecondPage;
