import HeaderPage from "../components/header/headerPage";
import FootterPage from "../components/footer/footerPage";
import ButtonContact from "../components/whatsaapButton/whattsButton";
import { MainPage } from "./style";

const HomePage = () => {
  return (
    <MainPage>
      <HeaderPage />
      <ButtonContact />
      <FootterPage />
    </MainPage>
  );
};

export default HomePage;
