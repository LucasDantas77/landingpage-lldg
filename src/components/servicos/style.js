import styled from 'styled-components';

export const SectionContent = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 100px;
    gap: 40px;
    justify-content: center;
    align-content: center;
    align-items: center;

@media only screen and (max-width: 600px) {
  margin-top: 100px;
    max-width: 100vw;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-size: 16px;
}

`;
export const H2Title = styled.h2`
font-family: "Rubik", sans-serif;
font-optical-sizing: auto;
color: #ffff;
`;
export const DivService = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
width: 50%;
@media only screen and (max-width: 600px) {
  width:80%;
}

`;
export const BackButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 30%;
  padding: 10px;
  font-size: 24px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }

  @media only screen and (max-width: 600px) {
    font-size: 18px;
    padding: 8px;
  }
`;
export const DivContentImagens = styled.div`
display: flex;
gap: 55px;
width: 60%;
align-items: center;
@media only screen and (max-width: 600px) {
  width:80%;
  display:flex;
  flex-direction: column;
  justify-content:center;
}
`;

export const Ptext = styled.p`
    font-family: "Rubik", sans-serif;
    font-optical-sizing: auto;
    color: #ffff;
    font-weight: 400;
    line-height: 30px;
`;

export const ImagesService = styled.img`
width: 250px;
max-width: 40%;
border-radius:5px;
object-fit: cover;
@media only screen and (max-width: 600px) {
  width: 260px;
  max-width: 80%;
  border-radius: 5px;
  object-fit: cover;
}
`;