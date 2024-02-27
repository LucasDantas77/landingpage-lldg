import React from "react";
import IconInsta from "../../assets/logoInsta.png";
import IconEmail from "../../assets/iconEmail.png";
import {FooterContainer, ImageLogo,DivInfo,DivContacts, DivContactsTwo} from './styled'
const FootterPage = () => {
  return (
    <>
      <FooterContainer>
        <DivInfo>
          <h3>LLDG</h3>
          <p>@2024</p>
        </DivInfo>
        <DivContacts>
          <p>Siga e entre em contato!</p>
          <div>
            <a href="">
              <ImageLogo src={IconInsta} alt="logo instagram" />
            </a>

            <a href="">
              <ImageLogo src={IconEmail} alt="logo email" />
            </a>
          </div>
        </DivContacts>
        <DivContactsTwo>
          <p>Desenvolvido por LLDG</p>

          <p>lldgcontato@gmail.com</p>
          <p>Instagram: @lldgcontato</p>
        </DivContactsTwo>
      </FooterContainer>
    </>
  );
};

export default FootterPage;
