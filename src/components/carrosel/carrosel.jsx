import React, { useState } from "react";
import {
  CarouselContainer,
  Button,
  CarouselWrapper,
  Slide,
  Container,
} from "./style";

export const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);

  const goToPrevSlide = () => {
    if (currentIndex === 0) return;

    setCurrentIndex((prevState) => prevState - 1);
    setTranslateValue((prevState) => prevState + slideWidth());
  };

  const goToNextSlide = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
      setTranslateValue(0);
      return;
    }

    setCurrentIndex((prevState) => prevState + 1);
    setTranslateValue((prevState) => prevState - slideWidth());
  };

  const slideWidth = () => {
    return document.querySelector(".slide").clientWidth;
  };

  return (
    <Container>
      <Button direction="left" onClick={goToPrevSlide}>
        {"<"}
      </Button>
      <CarouselContainer>
        <h2>Nossos Templates Promocionais</h2>
        <div>
          <CarouselWrapper translateValue={translateValue}>
            {images.map((image, index) => (
              <Slide
                className="slide"
                key={index}
                src={image}
                alt={`Slide ${index}`}
              />
            ))}
          </CarouselWrapper>
        </div>
      </CarouselContainer>
      <Button direction="right" onClick={goToNextSlide}>
        {">"}
      </Button>
    </Container>
  );
};
