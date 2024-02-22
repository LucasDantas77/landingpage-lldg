import styled, { keyframes } from 'styled-components';
const moveUpDown = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;


export const ImageBtn = styled.img`
  position: fixed;
  bottom: 20px; /* Ajuste conforme necessário */
  right: 20px; /* Ajuste conforme necessário */
  width: 50px; /* Ajuste conforme necessário */
  height: auto; /* Para manter a proporção */
  cursor: pointer; /* Adicionando um cursor indicando que é clicável */

  animation: ${moveUpDown} 2s ease-in-out infinite; /* Aplicando a animação de subir e descer */

  @media (max-width: 768px) {
    /* Ajustes para telas menores, se necessário */
    bottom: 10px;
    right: 10px;
  }
`;