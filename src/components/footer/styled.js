import styled from "styled-components";

export const ImageLogo = styled.img`
  width: 35%;
  max-width: 300px;
  height: 50px;
  border-radius: 100%;
`;

export const FooterContainer = styled.footer`
  width: 100%;
  max-width: 1330px;
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
  border: 1px solid white;
  border-radius: 2rem;
  margin: 0 auto;
  div > h3 > p {
    font-family: "Rubik", sans-serif;
    font-optical-sizing: auto;
    color: #ffff;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    width: 85%;
    margin-left: -2rem;
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
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 6%;
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

