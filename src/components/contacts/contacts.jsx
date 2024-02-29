import React from "react";

import {
  ConteinerDiv,
  IconWpp,
  IconEmail,
  IconInstagram,
  H2text,
  DivIcons,
} from "./styled";

export const Contacts = () => {
  return (
    <>
      <ConteinerDiv>
        <H2text>Entre em contato por:</H2text>
        <DivIcons>
          <a href="https://api.whatsapp.com/send?phone=12978131357">
            <IconWpp style={{ fontSize: "40px" }} />
          </a>

          <a
            href="https://www.instagram.com/lldgcontato/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconInstagram style={{ fontSize: "40px" }} />
          </a>
          <a href="mailto:lldgcontato@gmail.com">
            <IconEmail style={{ fontSize: "40px" }} />
          </a>
        </DivIcons>
      </ConteinerDiv>
    </>
  );
};
