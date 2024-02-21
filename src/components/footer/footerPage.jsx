import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import { MdAlternateEmail } from "react-icons/md";

const FootterPage = () => {
  return (
    <footer>
      <p>
        LLDG
        <MdAlternateEmail />
        2024
      </p>

      <div>
        <IoLogoInstagram />
        <BiLogoGmail />
      </div>
    </footer>
  );
};

export default FootterPage;
