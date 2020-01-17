import * as React from "react";
import { data } from "./mock";
import { Main } from "./pages/main";
import { getJsonValueOr } from "./utils/tool";
import { Flex, Box } from "@chakra-ui/core";

export default function App() {
  //const { colorMode, toggleColorMode } = useColorMode();
  const getData = getJsonValueOr(localStorage.getItem("myTodo"), data);

  return (
    <div className="App">
      <Flex justify="center" align="center" justifyContent="center">
        <Box maxW="sm" p="10" borderWidth="1px" rounded="lg" overflow="hidden">
          <Main data={getData} />
        </Box>
      </Flex>
    </div>
  );
}
