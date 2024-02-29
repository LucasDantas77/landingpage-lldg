import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  height: 350px;
  background-color: #373737;
  margin-top: 30px;

  @media (min-width: 768px) {
    height: 600px;
  }
`;
export const CarouselContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  overflow: hidden;
  margin-top: 50px;
  width: 80%;
  max-width: 600px;
  justify-content: center;
  align-items: center;
  margin: auto;

  div {
    display: flex;
  }
  h2 {
    color: #fff;

    font-size: 16px;
  }

  @media (min-width: 768px) {
    font-size: 28px;
    h2 {
      font-size: 25px;
    }
  }
`;

export const CarouselWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  transition: transform 0.5s ease;
  transform: translateX(${(props) => props.translateValue}px);
`;

export const Slide = styled.img`
  width: 100%;
  height: 100%;
`;

export const Button = styled.button`
  margin-top: 185px;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 40px; 
  color: yellow;

  ${(props) => (props.direction === "left" ? "left: 5px;" : "right: 5px;")}
  @media(min-width: 768px) {
    margin-top: 290px;
    font-size: 60px;
    ${(props) =>
      props.direction === "left"
        ? "margin-left: 300px;"
        : "margin-right: 300px;"}
  }
`;
