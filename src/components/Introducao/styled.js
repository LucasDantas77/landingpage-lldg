import styled from 'styled-components';

// export const ImgLogo = styled.img`
// width: 250px;
// height: 230px;
// border-radius: 25px;
// `;

// export const Container = styled.div`
// margin-top: 150px;
// display: flex;
// align-content: center;
// justify-content: center;
// gap: 1rem;
// `;

// export const SectionContainer = styled.section`
// max-width: 30%;
// align-items: center;
// align-content: center;
// display: flex;
// flex: 1;
// `

export const ImgLogo = styled.img`
  width: 100%; /* Alterado para 100% para tornar responsivo */
  max-width: 250px;
  height: auto; /* Adicionado para manter a proporção da imagem */
  border-radius: 25px;
`;

export const Container = styled.div`
margin-top: 30px;
display: flex;
align-content: center;
justify-content: center;
gap: 3rem;
text-align: center;
position: relative;
flex-direction: column;
width: 640px;
height:450px;
margin-inline: 330px;
`;

export const SectionContainer = styled.section`
  max-width: 100%; /* Alterado para 100% para tornar responsivo */
  align-items: center;
  align-content: center;
  display: flex;
  flex: 1;
`;
export const TextTitle = styled.h1`
  font-family: "Rubik", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  color:white;
`;
export const Text = styled.p`
  font-family:"Rubik", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  color:white;


`
export const HighlightedText = styled(Text)`
  
  font-weight: bold;
  color: #007bff;
`;
