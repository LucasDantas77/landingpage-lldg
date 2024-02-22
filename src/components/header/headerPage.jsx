import Logolldg from "../../assets/logolldg.jpg";
import { DivBtn, DivInfos, Header, LinksMobile } from "./style";
import { RiApps2Line } from "react-icons/ri";
import { useSpring, animated } from "react-spring";
import React, { useState } from "react";

const AnimatedRiApps2Line = animated(RiApps2Line);

const HeaderPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const iconAnimation = useSpring({
    transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
    color: isOpen ? "red" : "grey",
  });

  const divInfosAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? "translateY(0)" : "translateY(-100%)",
  });

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Header>
      <img src={Logolldg} alt="logo lldg" />
      <DivInfos>
        <a href="">Sobre-Nós</a>
        <a href="">Contatos</a>
        <a href="">Siga-Nós</a>
      </DivInfos>
      <DivBtn onClick={handleClick} style={{ cursor: "pointer" }}>
        <AnimatedRiApps2Line style={iconAnimation} size={30} />
        {isOpen && (
          <animated.div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              gap: "15px",
              position: "absolute",
              top: "12%",
              left: 0,
              width: "100%",
              height: "10%",
              backgroundColor: "#373737",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              borderbottomleftradius: "10px",
              borderbottomrightradius: "10px",
              ...divInfosAnimation,
            }}
          >
            <LinksMobile href="">Sobre-Nós</LinksMobile>
            <LinksMobile href="">Contatos</LinksMobile>
            <LinksMobile href="">Siga-Nos</LinksMobile>
          </animated.div>
        )}
      </DivBtn>
    </Header>
  );
};

export default HeaderPage;
