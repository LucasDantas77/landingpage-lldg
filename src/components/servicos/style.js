import styled from 'styled-components';

export const SectionContent = styled.section`
    display: flex;
    flex-direction: column;
    margin: 20px;
    width: 1200px;
    max-width: 100%;
    margin-top: 100px;
    gap:15px;
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