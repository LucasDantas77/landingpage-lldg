import HeaderPage from "../components/header/headerPage";
import FootterPage from "../components/footer/footerPage";
import ButtonContact from "../components/whatsaapButton/whattsButton";
import { MainPage } from "./style";
import { Introducao } from "../components/Introducao/Intro";
import BodyPage from "../components/Templates/templatesWeb";
import CarrosselPage from "../components/Templates/templatesWeb";


const HomePage = () => {
  return (
  // <MainPage>
      <>
      <HeaderPage />
      <Introducao/> 
      <ButtonContact />
    
       {/* <FootterPage />  */}
      </>

  );
};

export default HomePage;
