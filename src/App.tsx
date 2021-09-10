import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Paintings from "./pages/Paintings";
import AddPainting from "./pages/AddPainting";
import { ThemeProvider } from "styled-components";
import { AppContainer, theme } from "./theme";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Route path="" component={Header} />
          <Route path="/paintings" component={Paintings} />
          <Route path="/addPainting" component={AddPainting} />
        </AppContainer>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
