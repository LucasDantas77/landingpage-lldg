import React from "react";
import IconInsta from "../../assets/logoInsta.png";
import IconEmail from "../../assets/iconEmail.png";
import {FooterContainer, ImageLogo,DivInfo,DivContacts, DivContactsTwo, H3Style, PTextStyled} from './styled'
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
            {/* <a href="">
              <ImageLogo src={IconInsta} alt="logo instagram" />
            </a>

            <a href="">
              <ImageLogo src={IconEmail} alt="logo email" />
            </a> */}
          </div>
        </DivContacts>
        <DivContactsTwo>
          <PTextStyled>Desenvolvido por LLDG</PTextStyled>

          <PTextStyled>lldgcontato@gmail.com</PTextStyled>
          <PTextStyled>Instagram: @lldgcontato</PTextStyled>
        </DivContactsTwo>
      </FooterContainer>
    </>
  );
};

export default FootterPage;
