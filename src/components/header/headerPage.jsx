import React from 'react'
import Logo from '../../assets/logo.jpeg'
import { HeaderContainer,LogoContainer,LogoImage,LogoText,Navigation } from './styledHeader';
const HeaderPage = () => {
  return(
    <>      
      <HeaderContainer>
        <LogoContainer>
          <LogoImage src={Logo} alt='Logo' />
          <LogoText>LLDG</LogoText>
        </LogoContainer>
        <Navigation>
          <a href=''>
            Sobre-Nós
          </a>
          <a href=''>
            Siga-Nos
          </a>
          <a href=''>
           Catálogo
          </a>
        </Navigation>
      </HeaderContainer>

    </>
  );
};

export default HeaderPage;
