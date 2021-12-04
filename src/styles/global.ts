import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    /* primary */
    --cta-color: hsl(356, 100%, 66%);
    --cta-hover-background: hsl(355, 100%, 74%);
    --very-dark-blue: hsl(208, 49%, 24%);

    /* neutral */
    --text: hsl(0, 0%, 100%);
    --footer-text: hsl(240, 2%, 79%);
    --body-copy: hsl(207, 13%, 34%);
    --footer-background: hsl(240, 10%, 16%);

    /* gradient */
    --cta-mobile-very-light-red: hsl(13, 100%, 72%);
    --cta-mobile-light-red: hsl(353, 100%, 62%);

    --body-gradient-very-dark-gray-blue: hsl(237, 17%, 21%);
    --body-gradient-very-dark-desatured-blue: hsl(237, 23%, 32%);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px){
      font-size: 93.75%;
    }

    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }

  body {
    background: white;
    -webkit-font-smoothing: antialiased;
    font-family: 'Overpass', sans-serif;
  }

  input, textarea, button {
    font-family: 'Ubuntu', sans-serif;
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;