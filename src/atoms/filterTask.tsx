import * as React from "react";
import { FILTERTASK, ON_FILTERTASK, E_FILTERTASK } from "../types";
import { Box, RadioGroup, Radio, Button } from "@chakra-ui/core";
import { FaUndo } from "react-icons/fa";

export function FilterTask(props: FILTERTASK & ON_FILTERTASK) {
  const { filter, history, onActive, onAll, onCompleted, onUndo } = props;

  function switchFilter(event: React.ChangeEvent<HTMLInputElement>) {
    switch (event.target.value) {
      case E_FILTERTASK.Active:
        return onActive();
      case E_FILTERTASK.All:
        return onAll();
      case E_FILTERTASK.Completed:
        return onCompleted();
    }
  }

  function undo() {
    onUndo();
  }

  return (
    <Box mt="5" display="flex">
      <RadioGroup
        display="flex"
        alignItems="center"
        isInline
        spacing={4}
        ml="2"
        defaultValue={filter}
      >
        <Radio
          value={E_FILTERTASK.All}
          onChange={switchFilter}
          isChecked={filter === E_FILTERTASK.All}
        >
          all
        </Radio>
        <Radio
          value={E_FILTERTASK.Active}
          onChange={switchFilter}
          isChecked={filter === E_FILTERTASK.Active}
        >
          Active
        </Radio>
        <Radio
          value={E_FILTERTASK.Completed}
          id="completed"
          onChange={switchFilter}
          isChecked={filter === E_FILTERTASK.Completed}
        >
          Completed
        </Radio>
      </RadioGroup>
      <Button ml="4" size="sm" onClick={undo} isDisabled={history.length === 0}>
        <Box as={FaUndo} color="white" />
      </Button>
    </Box>
  );
}
