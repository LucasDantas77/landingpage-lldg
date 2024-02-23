import HeaderPage from "../components/header/headerPage";
import ButtonContact from "../components/whatsaapButton/whattsButton";
import { MainPage } from "./style";
import { Introducao } from "../components/Introducao/Intro";
import BodyPage from "../components/Templates/templatesWeb";


const HomePage = () => {
  return (
  // <MainPage>
      <>
      <HeaderPage />
      <Introducao/> 
      <ButtonContact />
       components
      <BodyPage/>
       {/* <FootterPage />  */}
      </>

    </MainPage>

  );
};

export default HomePage;
