import { createGlobalStyle } from "styled-components";

// #414a4c	(65,74,76)
// #3b444b	(59,68,75)
// #353839	(53,56,57)
// #232b2b	(35,43,43)
// #0e1111	(14,17,17)

export const GlobalStyle = createGlobalStyle`
:root {
  --black: #0e1111;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

html { 
    @media (max-width: 1080px) {
      font-size:  93.75%;
    }
    @media (max-width: 720px) {
      font-size:  87.5%;
    }
  }

  body {
    background-color: var(--black);
    font-family: Roboto, sans-serif;
    -webkit-font-smoothing: antialiased; // Para que browser que usem engine chrome fiquem com as fonts mais nítidas;
  }

 ::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #3b444b;
}

::-webkit-scrollbar
{
	width: 8px;
	background-color: #3b444b;
}

::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #0ade98;
}
`;
