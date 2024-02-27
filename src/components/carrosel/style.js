import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  height: 300px;
  background-color: #373737;
  margin-top: 30px;

  @media(min-width: 768px){
    height: 600px;
  }

`;
export const CarouselContainer = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  margin-top: 50px;
  width: 80%;
  max-width: 700px;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const CarouselWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  transition: transform 0.5s ease;
  transform: translateX(${(props) => props.translateValue}px);
`;

export const Slide = styled.img`
  width: 100%;
`;

export const Button = styled.button`
 margin-top: 155px;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px; /* Ajuste o tamanho do botão conforme necessário */
  color: yellow;
  z-index: 1; /* Certifica-se de que os botões estejam sobre as imagens */
  ${(props) =>
    props.direction === "left"
      ? "left: 5px;"
      : "right: 5px;"}/* Ajuste a posição conforme necessário */

@media(min-width: 768px){
    margin-top: 290px;
    font-size: 60px;
    ${(props) =>
    props.direction === "left"
      ? "margin-left: 200px;"
      : "margin-right: 200px;"}
}

`


;
