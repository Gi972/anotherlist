import * as React from "react";
import { ThemeProvider } from "@chakra-ui/core";
import { theme } from "@chakra-ui/core";
import { data } from "./mock";
import { Main } from "./pages/main";
import { getJsonValueOr } from "./utils/tool";

export default function App() {
  const getData = getJsonValueOr(localStorage.getItem("myTodo"), data);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Main data={getData} />
      </ThemeProvider>
    </div>
  );
}
