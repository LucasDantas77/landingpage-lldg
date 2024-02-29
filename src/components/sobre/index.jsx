import React, { useRef } from "react";
import { DivSobre, SectionSobre } from "./style";
import video1 from "../../assets/Lucas Dantas Rodrigues.mp4";
import video2 from "../../assets/Denis.mp4";
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
          <video ref={videoRef1} controls loop>
            <source src={video1} type="video/mp4" />
          </video>
          <button onClick={() => handleStartPlayback(videoRef1)}>
            Iniciar Reprodução do Vídeo 1
          </button>
        </div>
        <div>
          {" "}
          <video ref={videoRef2} controls loop>
            <source src={video2} type="video/mp4" />
          </video>
          <button onClick={() => handleStartPlayback(videoRef2)}>
            Iniciar Reprodução do Vídeo 2
          </button>
        </div>
      </DivSobre>
    </SectionSobre>
  );
};
