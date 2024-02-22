import styled from 'styled-components';
import { IoLogoInstagram } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  gap: 20px;
  flex-direction: column;
  height: 70px;
  background-color: #333333;
  max-width: 100vw;
  width: 95vw;

  p {
    margin: 0;
    display: flex;
    align-items: center;
  }

  div {
    display: flex;
    gap: 10px;
    margin-top: 10px;
    /* width: 0%; Remova ou ajuste conforme necessário */
    height: 50%;
    /* margin-left: 50rem; Remova ou ajuste conforme necessário */
  }

  span {
    display: flex;
    gap: 25px;
  }

  @media (max-width: 600px) {
    flex-direction: column;

    p {
      margin-bottom: 10px;
    }
  }

  /* Outras regras de mídia conforme necessário */

`;

export const IconInstagram = styled(IoLogoInstagram)`
  background: linear-gradient(90deg, white 50%, #8f2828 50%);
  border-radius: 25px;
  width: 40px;
  height: 30px;
`;

export const IconGmail = styled(BiLogoGmail)`
  background: linear-gradient(90deg, white 50%, #8f2828 50%);
  border-radius: 25px;
  width: 40px;
  height: 30px;
`;