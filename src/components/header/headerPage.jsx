import Logolldg from "../../assets/logolldg.jpg";
import { DivBtn, DivInfos, Header, LinksMobile } from "./style";
import { RiApps2Line } from "react-icons/ri";
import { useSpring, animated } from "react-spring";
import React, { useState } from "react";
import { Link } from "react-router-dom";

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
        <Link to="/servicos">
          <a href="">Nossos Serviços</a>
        </Link>
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
              top: "100%",
              left: 0,
              width: "100%",
              height: "60%",
              backgroundColor: "#373737",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              borderbottomleftradius: "10px",
              borderbottomrightradius: "10px",
              ...divInfosAnimation,
            }}
          >
            <LinksMobile href="#">Sobre-Nós</LinksMobile>
            <LinksMobile href="#">Contatos</LinksMobile>
            <LinksMobile href="#">Nossos Serviços</LinksMobile>
          </animated.div>
        )}
      </DivBtn>
    </Header>
  );
};

export default HeaderPage;
