import styled from "styled-components";


export const ImgLogo = styled.img`
  width: 50%; /* Alterado para 100% para tornar responsivo */
  max-width: 450px;
  height: auto; /* Adicionado para manter a proporção da imagem */
  border-radius: 25px;
`;

export const Container = styled.div`
  margin: auto;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin-top: 80px;
`;

export const SectionContainer = styled.section`
  align-items: center;
  align-content: center;
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: space-around;
  flex-direction: column;

  @media (min-width: 1025px) {
    flex-direction: row;
  }
`;
export const TextTitle = styled.h1`
  font-family: "Rubik", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  color: white;
  font-size: 12px;
`;
export const Text = styled.p`
  font-family: "Rubik", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  color: white;
  font-size: 15px;
  width: 80%;
  max-width: 550px;
  line-height: 20px;
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 25px;
  }
`;
export const HighlightedText = styled(Text)`
  font-weight: bold;
  color: #007bff;
`;
