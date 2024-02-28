import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100vw;
  position: fixed;
  top: 0%;
  gap: 200px;
  height: 12%;
  color: #fff;
  align-items: center;
  background-color: #373737;
  position:fixed;
  top:0;

  img {
    width: 20%;
    max-width: 70px;
    height: 50px;
    border-radius: 50%;
  }
`;

export const DivInfos = styled.div`
  display: none;
  gap: 20px;
  a {
    font-size: 14px;
    color: var(--white);
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const DivBtn = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const LinksMobile = styled.a`
  font-size: 13px;
`;
