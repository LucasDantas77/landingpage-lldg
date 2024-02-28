import React, { useEffect, useRef, useState } from "react";
import { DivSobre, SectionSobre } from "./style";

export const Sobre = () => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  const handleStartPlayback = (videoRef) => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <SectionSobre>
      <p>Sobre-Nós</p>
      <DivSobre>
        <div>
          <video ref={videoRef1} controls autoPlay loop>
            <source
              src="./src/assets/Lucas Dantas Rodrigues.mp4"
              type="video/mp4"
            />
          </video>
          <button onClick={() => handleStartPlayback(videoRef1)}>
            Iniciar Reprodução do Vídeo 1
          </button>
        </div>
        <div>
          {" "}
          <video ref={videoRef2} controls autoPlay loop>
            <source src="./src/assets/Denis.mp4" type="video/mp4" />
          </video>
          <button onClick={() => handleStartPlayback(videoRef2)}>
            Iniciar Reprodução do Vídeo 2
          </button>
        </div>
      </DivSobre>
    </SectionSobre>
  );
};
