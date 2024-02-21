import React from "react";
import { MdAlternateEmail } from "react-icons/md";
import { FooterContainer, IconGmail, IconInstagram } from "./styled";

const FootterPage = () => {
  return (
    <>
      <FooterContainer>
        <div>
          <p>
            LLDG
            <MdAlternateEmail />
            2024
          </p>

          <span>
            <IconInstagram/>
            <IconGmail/>
          </span>
        </div>
      </FooterContainer>
    </>
  );
};

export default FootterPage;
