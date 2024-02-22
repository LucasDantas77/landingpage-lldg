import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

 export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 50px; 
  height: auto;
  margin-right: 10px;
  border-radius:10px;
`;

export const LogoText = styled.p`
  margin: 0;
  font-size: 1.2em;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;
