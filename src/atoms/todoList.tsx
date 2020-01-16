import * as React from "react";
import { TODO } from "../types";
import { Todo } from "./todo";

export function TodoList({ rows = [] }: { rows: TODO[] }) {
  return (
    <ul>
      {rows.map(row => (
        <Todo key={row.id} id={row.id} title={row.title} status={row.status} />
      ))}
    </ul>
  );
}
