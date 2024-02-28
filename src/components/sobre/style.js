import styled from "styled-components";

export const SectionSobre = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  align-items: center;
  justify-content: center;
  text-align: center;
  p {
    margin-top: 25px;
    margin-bottom: 25px;
    font-size: 25px;
    font-weight: 900;
  }
`;

export const DivSobre = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
  width: 100%;

  div {
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
  video {
    width: 90%;
    max-width: 300px;
  }

  button {
    background-color: #373737;
    width: 90%;
    max-width: 500px;
    border-top-right-radius: 7px;
    border-top-left-radius: 7px;
    border: none;
    padding: 10px;
    color: #ffff;
    font-size: 15px;
    line-height: 30px;
  }
`;
