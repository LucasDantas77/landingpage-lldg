import React from "react";
import LogoLLDG from "../../assets/logolldg.jpg";
import {
  Container,
  ImgLogo,
  SectionContainer,
  TextTitle,
  Text,
  HighlightedText,
} from "./styled";
export const Introducao = () => {
  return (
    <Container>
      <SectionContainer>
        <ImgLogo src={LogoLLDG} alt="" />
        <Text>
          Bem-vindo à LLDG - Sua Jornada Digital Começa Aqui! Na LLDG, não somos
          apenas uma empresa de marketing digital e desenvolvimento web; somos
          impulsionadores de visões, arquitetos de presença online e
          catalisadores de inovação digital. Com uma paixão inabalável por
          transformar ideias em realidade, nossa equipe dedicada é guiada pelo
          compromisso de proporcionar soluções digitais excepcionais que elevam
          sua marca a novas alturas.
        </Text>
      </SectionContainer>
    </Container>
  );
};
