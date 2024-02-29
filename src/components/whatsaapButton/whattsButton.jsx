import React from "react";
import Wpp from "../../assets/whatsaaplogo.png";
import { ImageBtn } from "./styledButton";
const ButtonContact = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=12978131357"
      target="_blank"
      rel="noopener noreferrer"
    >
      <ImageBtn src={Wpp} alt="" />
    </a>
  );
};
export default ButtonContact;
