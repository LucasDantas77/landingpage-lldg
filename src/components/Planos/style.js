import styled from "styled-components";

export const SectionPlanos = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 30px;
  background-color: #373737;
  gap: 50px;

  h2 {
    color: #ffff;
    margin: 20px 0 10px 0;
  }

  h3 {
    color: yellow;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 90%;
    align-items: center;
    text-align: center;
  }
  p {
    line-height: 25px;

    width: 90%;
    max-width: 800px;
  }

  button {
    width: 80%;
    max-width: 200px;
    padding: 10px;
    border-radius: 5px;
    background-color: yellow;
    border: none;
    margin-bottom: 20px;
  }

  a {
    color: #373737;
    font-weight: 900;
  }
`;
