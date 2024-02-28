import styled from 'styled-components';
import { IoArrowUpSharp } from "react-icons/io5"

export const ButtonBack = styled.button`
width: 20px;
height: 50px;
border:none;
border-radius:12px;

@media only screen and (max-width: 600px) {
    width:20px;
    height:20px;
}

`;

export const IconArrowUp = styled(IoArrowUpSharp)`

`;