import * as React from "react";
import { render } from "react-dom";
import {
  ThemeProvider,
  ColorModeProvider,
  theme,
  CSSReset
} from "@chakra-ui/core";
import { Container } from "./core/container";
import "./core/style.css";

import App from "./App";

const rootElement = document.getElementById("root");
render(
  <ThemeProvider theme={theme}>
    <CSSReset />
    <ColorModeProvider value="dark">
      <Container>
        <App />
      </Container>
    </ColorModeProvider>
  </ThemeProvider>,
  rootElement
);
