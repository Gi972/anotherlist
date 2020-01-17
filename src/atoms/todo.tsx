import * as React from "react";
import { useState } from "react";
import { TODO, ON_TODO } from "../types";
import {
  Icon,
  Box,
  IconButton,
  InputGroup,
  Input,
  InputRightAddon
} from "@chakra-ui/core";
export function Todo({
  id,
  title,
  status,
  onDeleteTask,
  onChangeStatusTask,
  onEditTask
}: TODO & ON_TODO) {
  const [checked, updateStatus] = useState(status);
  const [textcontent, updateText] = useState(title);

  const deleteTask = () => {
    onDeleteTask(id);
  };

  const changeStatus = e => {
    updateStatus(!checked);
    onChangeStatusTask(id, !checked);
  };

  const editTask = (e: any) => {
    updateText(e.target.value);
    onEditTask(id, e.target.value);
  };

  return (
    <Box p="1">
      <InputGroup size="md">
        <IconButton
          height="none"
          variant="outline"
          variantColor="gray"
          aria-label="Call Sage"
          fontSize="18px"
          icon="delete"
          onClick={deleteTask}
          mr="1"
          w="16"
        />
        <Input
          pr="4.5rem"
          rounded="0"
          roundedLeft="6px"
          type="text"
          value={textcontent}
          onChange={editTask}
        />
        <InputRightAddon width="3.5rem" onClick={changeStatus}>
          {checked && <Icon name="check" color="green.500" />}
        </InputRightAddon>
      </InputGroup>
    </Box>
  );
}
