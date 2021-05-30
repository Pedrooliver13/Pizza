import { createGlobalStyle } from "styled-components";
import * as C from './constants';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
h1,
h2,
h3,
h4,
p,
span {
  margin: 0;
}
html {
  font-size: 16px;
}
body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background: ${C.PizzaWhite};
}
button {
  font-family: 'Poppins', sans-serif;
}
`;

export default GlobalStyle;
