import Logolldg from "../../assets/logolldg.jpg";
import { DivInfos, Header } from "./style";

const HeaderPage = () => {
  return (
    <Header>
      <img src={Logolldg} alt="logo lldg" />
      <DivInfos>
        <a href="">Sobre-Nós</a>
        <a href="">Contatos</a>
        <a href="">Siga-Nós</a>
      </DivInfos>
    </Header>
  );
};

export default HeaderPage;
