import HeaderPage from "../components/header/headerPage";
import ButtonContact from "../components/whatsaapButton/whattsButton";
import { MainPage } from "./style";
import { Introducao } from "../components/Introducao/Intro";
import { Carousel } from "../components/carrosel/carrosel";
import FootterPage from "../components/footer/footerPage";
import { Sobre } from "../components/sobre";
import { Contacts } from "../components/contacts/contacts";

const HomePage = () => {
  const images = [
    "./src/assets/template1.jpg",
    "./src/assets/template2.png",
    "./src/assets/template3.png",
    "./src/assets/template4.png",
    "./src/assets/template5.png",
  ];
  return (
    <MainPage>
      <HeaderPage />
      <Introducao />
      <Carousel images={images} />
      <Sobre />
      <ButtonContact />
      <Contacts/>
      <FootterPage />
    </MainPage>
  );
};

export default HomePage;
