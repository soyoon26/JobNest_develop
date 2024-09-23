import DetailsOfRights from "./DetailsOfRights";
import ExpectedTransactionAmount from "./ExpectedTransactionAmount";
import LandPlanning from "./LandPlanning";
import LocationConditions from "./LocationConditions";
import Tax from "./Tax";
import UnwantedFacility from "./UnwantedFacility";

const SecondPage = () => {
  return (
    <>
      <LandPlanning />
      <LocationConditions />
      <DetailsOfRights />
      <UnwantedFacility />
      <ExpectedTransactionAmount />
      <Tax />
    </>
  );
};
export default SecondPage;
