import React from "react";
import {FooterContainer,
  DivInfo,DivContacts, 
  DivContactsTwo,
  H3Style,
  PTextStyled,
  IconInstagram,IconEmail} from './styled'
import BackToTopButton from "../ButtonBack/buttonBack";
const FootterPage = () => {
  return (
    <>
      <FooterContainer>
        <DivInfo>
          <H3Style>LLDG</H3Style>
          <PTextStyled>@ 2024</PTextStyled>
        </DivInfo>
        <DivContacts>
          <PTextStyled>Siga e entre em contato!</PTextStyled>
          <div>
            <a href="">
              <IconInstagram/>
            </a>

            <a href="">
              <IconEmail/>
            </a>
          </div>
        </DivContacts>
        <DivContactsTwo>
          <PTextStyled>Desenvolvido por LLDG</PTextStyled>

          <PTextStyled>lldgcontato@gmail.com</PTextStyled>
          <PTextStyled>Instagram: @lldgcontato</PTextStyled>
        </DivContactsTwo>
        <DivContacts>

      <BackToTopButton/>
        </DivContacts>
      </FooterContainer>
    </>
  );
};

export default FootterPage;
