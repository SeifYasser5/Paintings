import styled, { createGlobalStyle } from "styled-components";

interface Theme {
  primary: string;
  radius: string;
}

export const theme: Theme = {
  primary: "#2b4cb0",
  radius: "5px",
};

export const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
}

button:focus,
input:focus {
  outline: 0;
}
`;

export const AppContainer = styled.div`
  padding: 5%;
  text-align: center;
`;
