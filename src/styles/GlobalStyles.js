import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
padding: 0;
margin: 0;
list-style: none;
font-family: sans-serif;
}

button{
    cursor: pointer;
}
body{
    background-color:#373737;
}

a{
    cursor: pointer;
}

:root{
    --color-primary: #27ae60;
    --color-primary-50: #93d7af;
    --color-secondary: #eb5757;
    --black: #000;
    --White: #fff
    --grey-100: #373737;
    --grey-50: #828282;
    --grey-30: #a0a0a0;
    --grey-20: #E0E0E0;
    --grey-0: #f5f5f5;
    --negative: #e60000;
    --warning: #ffcd07;
    --sucess: #168821;
    --information: #155aca
}
`
export default GlobalStyles;
