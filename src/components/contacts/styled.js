import styled from "styled-components";
import { PiWhatsappLogoThin } from "react-icons/pi";
import { CiInstagram } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";

export const ConteinerDiv = styled.div`
  margin: auto;
  height: 25%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  margin-top: 30px;
  gap: 20px;
`;
export const IconWpp = styled(PiWhatsappLogoThin)`
  width: 80%;
  max-width: 300px;

  border-radius: 100%;
  font-size: 50px;
`;
export const IconInstagram = styled(CiInstagram)`
  width: 80%;
  max-width: 300px;

  border-radius: 100%;
  font-size: 50px;
`;
export const IconEmail = styled(MdOutlineMail)`
  width: 80%;
  max-width: 300px;

  border-radius: 100%;
  font-size: 50px;
`;

export const DivIcons = styled.div`
  justify-content: center;
  display: flex;
  gap: 20px;
`;
export const H2text = styled.h2`
  font-family: "Rubik", sans-serif;
  font-optical-sizing: auto;
  color: #ffff;
`;
