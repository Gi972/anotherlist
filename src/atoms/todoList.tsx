import * as React from "react";
import { TASKLIST, ON_TODO, E_FILTERTASK, TODO } from "../types";
import { Todo } from "./todo";
import { Stack } from "@chakra-ui/core";

export function TodoList({
  rows = [],
  filter,
  onDeleteTask,
  onChangeStatusTask,
  onEditTask
}: TASKLIST & ON_TODO) {
  function filteredRows(rows: TODO[], filter: E_FILTERTASK) {
    switch (filter) {
      case E_FILTERTASK.Active:
        return rows.filter(row => row.status === false);
      case E_FILTERTASK.All:
        return rows;
      case E_FILTERTASK.Completed:
        return rows.filter(row => row.status === true);
    }
  }

  return (
    <Stack spacing={3}>
      {filteredRows(rows, filter).map(row => (
        <Todo
          key={row.id}
          id={row.id}
          title={row.title}
          status={row.status}
          onDeleteTask={onDeleteTask}
          onChangeStatusTask={onChangeStatusTask}
          onEditTask={onEditTask}
        />
      ))}
    </Stack>
  );
}
