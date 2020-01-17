import * as React from "react";
import { Flex, useColorMode } from "@chakra-ui/core";

export const Container = props => {
  const { colorMode } = useColorMode();

  const bgColor = { light: "gray.50", dark: "gray.900" };

  const color = { light: "black", dark: "white" };
  return (
    <Flex
      direction="column"
      alignItems="center"
      //justifyContent="flex-start"
      justifyContent="center"
      height="100%"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  );
};
