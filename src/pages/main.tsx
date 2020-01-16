import * as React from "react";
import { TodoList } from "../atoms/todoList";
import { AddTodo } from "../atoms/addTodo";
import { TODO } from "../types";
import { useImmer } from "use-immer";
import { of } from "rxjs";

type STATE = { tasks: TODO[] };

export function Main({ data }) {
  const [todolist, updateTodo] = useImmer({ tasks: data } as STATE);

  of(todolist).subscribe(data => {
    localStorage.setItem("myTodo", JSON.stringify(data.tasks));
  });

  return (
    <>
      <AddTodo
        onSubmit={e => {
          updateTodo((draftState: STATE) => {
            draftState.tasks.push({
              id: Date.now(),
              title: e,
              status: false
            } as TODO);
          });
        }}
      />
      <TodoList
        rows={todolist.tasks}
        onDeleteTask={id => {
          updateTodo((draftState: STATE) => {
            draftState.tasks = draftState.tasks.filter(todo => todo.id !== id);
          });
        }}
      />
    </>
  );
}
