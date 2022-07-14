import InfoFrame from "../components/InfoFrame";
import WorkWithUs from '../components/WorkWithUs'
import DropdownFrame from "../components/DropdownFrame";
import MainFrame from "../components/MainFrame";
import Footer from "components/Footer";

const MainPage = () => {
  return (
    <div>
        <MainFrame />
        <WorkWithUs />
        <InfoFrame />
        <DropdownFrame />
        <Footer />
    </div>
  );
};

export default MainPage;

