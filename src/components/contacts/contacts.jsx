import React from "react";

import { ConteinerDiv, IconWpp, IconEmail, IconInstagram,H2text, DivIcons} from "./styled";

export const Contacts = () => {
  return (
    <>
      <ConteinerDiv>
      <H2text>Entre Em Contato Por:</H2text>
        <DivIcons>

        <a href="">
          <IconWpp />
        </a>

        <a
          href="https://www.instagram.com/lldgcontato/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconInstagram />
        </a>
        <a href="mailto:lldgcontato@gmail.com">
          <IconEmail />
        </a>
        </DivIcons>
      </ConteinerDiv>
    </>
  );
};
