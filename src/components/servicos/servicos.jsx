import React, { useState } from "react";
import HeaderPage from "../header/headerPage";
import {
  SectionContent,
  DivService,
  BackButton,
  H2Title,
  DivContentImagens,
  ImagesService,
  Ptext,
} from "./style";
import { IoIosArrowBack } from "react-icons/io";
import FootterPage from "../footer/footerPage";
import market from "../../assets/marketing.jpg";
import dev from "../../assets/desenv.jpg";
import manu from "../../assets/manutencao.png";
import respon from "../../assets/responsive.jpg";
import siste from "../../assets/gerenciamento.jpg";
import { LoadingSpinner } from "../Loading/load";
import ButtonContact from "../whatsaapButton/whattsButton";
export const ServicesPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      window.location.href = "/";
    }, 5000);
  };
  return (
    <>
      <HeaderPage />

      <SectionContent>
        <BackButton onClick={handleButtonClick} disabled={isLoading}>
          {isLoading ? "" : <IoIosArrowBack />}
        </BackButton>
        {isLoading && <LoadingSpinner />}

        <DivService>
          <H2Title>Por que ter uma Landing Page?</H2Title>
          <p>
            <strong>Maximize Suas Conversões com uma Landing Page; </strong>
            Você já se perguntou por que grandes empresas usam Landing Pages?
            Simples: elas são como vitrines virtuais focadas em uma única
            oferta. Ter uma Landing Page direciona a atenção do visitante para a
            ação desejada, seja comprar um produto, assinar uma newsletter ou
            baixar um recurso. Aqui estão três razões para ter uma Landing Page:
            Conversões Eficientes: Concentrar-se em uma oferta única aumenta as
            chances de conversão. Sem distrações, seus visitantes são
            direcionados diretamente para o que você deseja que eles façam.
            Análise Clara de Resultados: Com uma Landing Page, é mais fácil
            rastrear o desempenho da sua campanha. Você sabe quantos visitantes
            chegaram e quantos converteram, permitindo ajustes rápidos e
            eficazes. Credibilidade e Profissionalismo: Uma Landing Page bem
            projetada transmite confiança. Visitantes se sentem mais
            confortáveis ao tomar uma decisão quando recebem informações claras
            e visualmente atraentes. Em resumo, uma Landing Page é a chave para
            otimizar suas conversões, analisar resultados e transmitir confiança
            aos seus visitantes. Pronto para destacar sua oferta de maneira
            impactante?
          </p>
        </DivService>
        <DivService>
          <H2Title>
            <strong>A Importância do Tráfego Pago</strong>
          </H2Title>
          <p>
            Investir em tráfego pago é como acelerar o crescimento do seu
            negócio online. Imagine sua loja preferida: ela paga por anúncios
            para atrair mais clientes. Da mesma forma, o tráfego pago impulsiona
            visitantes diretos para o seu site. Aqui estão três motivos para
            considerar o tráfego pago: Visibilidade Imediata: Com anúncios
            pagos, sua marca aparece na frente e no centro. Você não precisa
            esperar - alcança seu público-alvo instantaneamente. Controle
            Preciso: Escolha quem vê seus anúncios com base em interesses,
            localização e comportamento online. Isso significa que seu
            investimento é direcionado para as pessoas certas. Resultados
            Mensuráveis: Saiba exatamente o que está funcionando. Com
            ferramentas analíticas, você pode rastrear cliques, conversões e
            retorno sobre o investimento. Em resumo, tráfego pago é como colocar
            seu negócio no fast track. É uma maneira eficaz de aumentar a
            visibilidade, alcançar seu público-alvo e medir o sucesso. Pronto
            para dar um impulso ao seu negócio?
          </p>
        </DivService>
        <H2Title> Quais serviços prestamos?</H2Title>
        <H2Title>Marketing Digital:</H2Title>
        <DivContentImagens>
          <ImagesService src={market} />
          <Ptext>
            Conquiste visibilidade online com nossas estratégias de marketing
            digital abrangentes. Desde otimização de mecanismos de busca (SEO)
            até campanhas nas redes sociais, estamos focados em aumentar sua
            presença e engajamento online.
          </Ptext>
        </DivContentImagens>
        <H2Title>Desenvolvimento de Sites:</H2Title>
        <DivContentImagens>
          <ImagesService src={dev} />
          <Ptext>
            Criamos experiências online envolventes e intuitivas. Nossa equipe
            de desenvolvimento de sites oferece desde sites institucionais a
            plataformas e-commerce, garantindo design atraente e funcionalidade
            de alto nível.
          </Ptext>
        </DivContentImagens>
        <H2Title>Manutenção de Sites:</H2Title>
        <DivContentImagens>
          <ImagesService src={manu} />
          <Ptext>
            Mantenha seu site atualizado e operacional com nossos serviços de
            manutenção. Lidamos com atualizações, correções de bugs e garantimos
            que seu site esteja sempre otimizado para o melhor desempenho.
          </Ptext>
        </DivContentImagens>
        <H2Title>Sites Web Responsivos e Landing Pages:</H2Title>
        <DivContentImagens>
          <ImagesService src={respon} />
          <Ptext>
            Proporcione uma experiência consistente em todos os dispositivos.
            Desenvolvemos sites responsivos e landing pages que se adaptam
            perfeitamente a desktops, tablets e smartphones, maximizando o
            alcance e a acessibilidade.
          </Ptext>
        </DivContentImagens>
        <H2Title>Sistema para Gerenciamento de Negócios:</H2Title>
        <DivContentImagens>
          <ImagesService src={siste} />
          <Ptext>
            Simplifique suas operações com nossas soluções personalizadas de
            gestão empresarial. Desde sistemas de CRM até ferramentas de
            automação, ajudamos a otimizar processos e aprimorar a eficiência
            operacional.
          </Ptext>
        </DivContentImagens>
        <ButtonContact />
      </SectionContent>
      <FootterPage />
    </>
  );
};
