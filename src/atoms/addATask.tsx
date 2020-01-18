import * as React from "react";
import { useState } from "react";
import {
  Flex,
  Input,
  Button,
  FormControl,
  FormLabel,
  FormHelperText
} from "@chakra-ui/core";

export function AddTodo({ onSubmit }: { onSubmit: (value: string) => void }) {
  const [value, setValue] = useState("");

  const callSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(value);
    onSubmit(value);
    setValue("");
  };

  return (
    <>
      <FormControl as="form" onSubmit={callSubmit}>
        <FormLabel htmlFor="email">Add a task</FormLabel>
        <Flex>
          <Input
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="Today I want..."
            type="text"
            id="email"
            aria-describedby="email-helper-text"
          />
          <Button ml="1" height="none" type="submit">
            add
          </Button>
        </Flex>
        <FormHelperText id="email-helper-text">List of tasks</FormHelperText>
      </FormControl>
    </>
  );
}
