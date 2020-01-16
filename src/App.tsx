import * as React from "react";
import { ThemeProvider } from "@chakra-ui/core";
import { theme } from "@chakra-ui/core";
import { data } from "./mock";
import { Main } from "./pages/main";

export default function App() {
  const localStorageData = localStorage.getItem("myTodo");
  console.log("localStorageData", localStorageData);
  const getData = localStorageData === "" ? data : JSON.parse(localStorageData);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Main data={getData} />
      </ThemeProvider>
    </div>
  );
}
