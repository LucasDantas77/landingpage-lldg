import React, { useRef } from "react";
import TemplateOne from "../../assets/template1.png";
import TemplateTwo from "../../assets/TEMPLATE2.png";
import TemplateThree from "../../assets/template3.png";
import TemplateFour from "../../assets/template4.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Section,
  TemplateContainer,
  TemplateImage,
  StyledSlider,
} from "./styled";
const CarrosselPage = () => {
  const templates = [TemplateOne, TemplateTwo, TemplateThree, TemplateFour];
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Section>
      <StyledSlider ref={sliderRef} {...settings}>
        {templates.map((template, index) => (
          <TemplateContainer key={index}>
            <TemplateImage src={template} alt={`Template ${index + 1}`} />
          </TemplateContainer>
        ))}
      </StyledSlider>
    </Section>
  );
};

export default CarrosselPage;
