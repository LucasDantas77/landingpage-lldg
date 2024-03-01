import styled from "styled-components";
import { RiArrowUpSLine } from "react-icons/ri";

export const ButtonBack = styled.button`
  width: 20px;
  height: 50px;
  border: none;
  border-radius: 12px;
  background: #f1eded;
  font-size: 20px;
  background-color: #ffd519;

  @media only screen and (max-width: 600px) {
    width: 30px;
    height: 30px;
    margin: -180px 0px 4px 270px;
    font-size: 30px;
  }
`;

export const IconArrowUp = styled(RiArrowUpSLine)``;
