import React from "react";
import IconInsta from "../../assets/logoInsta.png";
import IconEmail from "../../assets/iconEmail.png";
import {ImageLogo} from './styled'
const FootterPage = () => {
  return (
    <>
      <footer>
        <div>
          <h3>LLDG</h3>
          <p>@2024</p>
        </div>
        <div>
          <p>Siga e entre em contato!</p>
          <div>
            <a href="">
              <ImageLogo src={IconInsta} alt="logo instagram" />
            </a>

            <a href="">
              <ImageLogo src={IconEmail} alt="logo email" />
            </a>
          </div>
        </div>
        <div>
          <p>Desenvolvido por LLDG</p>

          <p>lldgcontato@gmail.com</p>
          <p>Instagram: @lldgcontato</p>
        </div>
      </footer>
    </>
  );
};

export default FootterPage;
