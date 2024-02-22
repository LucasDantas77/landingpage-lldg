import HeaderPage from "../components/header/headerPage";
import ButtonContact from "../components/whatsaapButton/whattsButton";
import { MainPage } from "./style";

const HomePage = () => {
  return (
    <MainPage>
      <HeaderPage />
      <ButtonContact />
    </MainPage>
  );
};

export default HomePage;
