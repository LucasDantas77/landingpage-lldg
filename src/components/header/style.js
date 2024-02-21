import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100vw;
  max-width: 1200px;
  gap: 200px;
  height: 12%;
  align-items: center;
  background-color: #373737;

  img {
    width: 20%;
    max-width: 70px;
    height: 50px;
    border-radius: 50%;
  }

  @media (min-width: 768px) {
    position: fixed;
    left: 6%;

    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export const DivInfos = styled.div`
  display: flex;
  gap: 20px;
  a {
    font-size: 14px;
    color: var(--white);
  }
`;
