import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

html,
body {
  padding: 0;
  margin: 0;
  font-family: Spartan, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    letter-spacing: -0.015em;
    background: ${props=>props.theme.colors.backgroundLight};
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

`;
export default GlobalStyles;