import HeaderPage from "../components/header/headerPage";
import ButtonContact from "../components/whatsaapButton/whattsButton";
import { MainPage } from "./style";
import { Introducao } from "../components/Introducao/Intro";
import { Carousel } from "../components/carrosel/carrosel";
import FootterPage from "../components/footer/footerPage";
import { Sobre } from "../components/sobre";
import { Contacts } from "../components/contacts/contacts";
import image1 from "../assets/template1.jpg";
import image2 from "../assets/template2.png";
import image3 from "../assets/template3.png";
import image4 from "../assets/template4.png";
import image5 from "../assets/template5.png";
import { Planos } from "../components/Planos";
const HomePage = () => {
  const images = [image1, image2, image3, image4, image5];
  return (
    <MainPage>
      <HeaderPage />
      <Introducao />
      <Carousel images={images} />
      <Sobre />
      <ButtonContact />
      <Planos />
      <Contacts />
      <FootterPage />
    </MainPage>
  );
};

export default HomePage;
