import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${theme.fonts.mainFont}, 'sans-serif';
  }

@font-face {
  font-family: 'Raleway';
  font-display: swap;
  font-style: normal;
  font-weight: 200;
  src: url('../fonts/raleway-v19-latin-200.eot'); 
  src: local(''),
       url('../fonts/raleway-v19-latin-200.eot?#iefix') format('embedded-opentype'), 
       url('../fonts/raleway-v19-latin-200.woff2') format('woff2'),  
       url('../fonts/raleway-v19-latin-200.woff') format('woff'), 
       url('../fonts/raleway-v19-latin-200.ttf') format('truetype'), 
       url('../fonts/raleway-v19-latin-200.svg#Raleway') format('svg'); 
    }
    @font-face {
      font-family: 'Raleway';
      font-display: swap;
      font-style: normal;
      font-weight: 400;
      src: url('../fonts/raleway-v19-latin-regular.eot'); 
      src: local(''),
          url('../fonts/raleway-v19-latin-regular.eot?#iefix') format('embedded-opentype'), 
          url('../fonts/raleway-v19-latin-regular.woff2') format('woff2'), 
          url('../fonts/raleway-v19-latin-regular.woff') format('woff'), 
          url('../fonts/raleway-v19-latin-regular.ttf') format('truetype'), 
          url('../fonts/raleway-v19-latin-regular.svg#Raleway') format('svg'); 
    }
    @font-face {
      font-family: 'Raleway';
      font-display: swap;
      font-style: normal;
      font-weight: 700;
      src: url('../fonts/raleway-v19-latin-700.eot'); 
      src: local(''),
          url('../fonts/raleway-v19-latin-700.eot?#iefix') format('embedded-opentype'), 
          url('../fonts/raleway-v19-latin-700.woff2') format('woff2'),  
          url('../fonts/raleway-v19-latin-700.woff') format('woff'),      
          url('../fonts/raleway-v19-latin-700.ttf') format('truetype'), 
          url('../fonts/raleway-v19-latin-700.svg#Raleway') format('svg'); 
    }

  body {
    font-size: 1.6rem;
    background-color: ${theme.colors.white};
    margin-left: 75px;
    height: 100vh;

    @media (max-width: ${theme.media.small}) {
      margin-left: 0;
    }
  }

  .visually-hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;
