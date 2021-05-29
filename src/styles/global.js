import { createGlobalStyle } from "styled-components";
import * as C from './constants';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background: ${C.PizzaWhite};
}
button {
  font-family: 'Poppins', sans-serif;
}
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
`;

export default GlobalStyle;
