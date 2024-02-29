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
  bottom: 20px; 
  right: 20px;
  width: 50px; 
  height: auto; 
  cursor: pointer; 

  animation: ${moveUpDown} 2s ease-in-out infinite;

  @media (max-width: 768px) {
    bottom: 10px;
    right: 10px;
  }
`;