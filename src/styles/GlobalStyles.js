import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
padding: 0;
 margin: 0;
box-sizing: border-box;
}



body {
    background-color: hsl(0, 0%, 8%);
    min-height: 100dvh;  
    font-family: "Inter", sans-serif;
    display: flex;
    justify-content: center; 
    align-items: center;
}
 img {
    width: 100%;
 }

`;
