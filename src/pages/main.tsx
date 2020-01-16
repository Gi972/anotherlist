import * as React from "react";
import { TodoList } from "../atoms/todoList";
import { AddTodo } from "../atoms/addTodo";
import { TODO } from "../types";
import { useImmer } from "use-immer";
import { of } from "rxjs";

export function Main({ data }) {
  const [todolist, updateTodo] = useImmer(data);

  of(todolist).subscribe((data: TODO) => {
    localStorage.setItem("myTodo", JSON.stringify(data));
  });

  return (
    <>
      <AddTodo
        onSubmit={e => {
          updateTodo(draftState => {
            draftState.push({
              id: draftState.length,
              title: e,
              status: false
            } as TODO);
          });
        }}
      />
      <TodoList rows={todolist} />
    </>
  );
}
