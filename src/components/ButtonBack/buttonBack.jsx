import React from "react";
import { ButtonBack, IconArrowUp } from "./styled";

const BackToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ButtonBack onClick={handleScrollToTop}>
      <IconArrowUp />
    </ButtonBack>
  );
};

export default BackToTopButton;
