import * as React from "react";
import { TODO, ON_TODO } from "../types";
import { Todo } from "./todo";

export function TodoList({
  rows = [],
  onDeleteTask
}: { rows: TODO[] } & ON_TODO) {
  return (
    <ul>
      {rows.map(row => (
        <Todo
          key={row.id}
          id={row.id}
          title={row.title}
          status={row.status}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
}
