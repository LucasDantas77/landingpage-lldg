import styled from "styled-components";
import { CiInstagram } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";


export const IconInstagram = styled(CiInstagram)`
width: 35%;
max-width: 300px;
height: 50px;
border-radius: 100%;
`;
export const IconEmail = styled(MdOutlineMail)`
width: 35%;
max-width: 300px;
height: 50px;
border-radius: 100%;
`;

export const FooterContainer = styled.footer`
  width: 100%;
  max-width: 1330px;
  height: 220px;
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
  border: 1px solid white;
  margin: 0 auto;
  div > h3 > p {
    font-family: "Rubik", sans-serif;
    font-optical-sizing: auto;
    color: #ffff;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    width: 109%;
    margin-left: -2rem;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
  }
`;
export const DivInfo = styled.div`
  display: flex;

  gap: 30px;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 600px) {
    gap: 15px;
  }
`;

export const DivContacts = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 11px;
  justify-content: center;
`;

export const DivContactsTwo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 11px;
  justify-content: center;
  gap:5%
`;
export const H3Style = styled.h3`
  font-family: "Rubik", sans-serif;
  font-optical-sizing: auto;
  color: #ffff;
`;

export const PTextStyled = styled.p`
  font-family: "Rubik", sans-serif;
  font-optical-sizing: auto;
  color: #ffff;
`;
