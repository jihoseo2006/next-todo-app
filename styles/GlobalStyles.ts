import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    .TodoList li.on span {
      color: rgb(199, 197, 197);
    }
    .TodoList li.on em {
      color: rgb(199, 197, 197); text-decoration: line-through rgb(159, 127, 231);
    }
`;

export default GlobalStyles;