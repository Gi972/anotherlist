import * as React from "react";
import { TodoList } from "../atoms/todoList";
import { AddTodo } from "../atoms/addTodo";
import { FilterTask } from "../atoms/filterTask";
import { TODO, MAINSTATE, E_FILTERTASK } from "../types";
import { useImmer } from "use-immer";
import { of } from "rxjs";

export function Main({ data }) {
  const [mainState, updateMainState] = useImmer({
    tasks: data,
    filter: E_FILTERTASK.All
  } as MAINSTATE);

  of(mainState).subscribe(data => {
    localStorage.setItem("myTodo", JSON.stringify(data.tasks));
  });

  return (
    <>
      <AddTodo
        onSubmit={title => {
          updateMainState((draftState: MAINSTATE) => {
            draftState.tasks.push({
              id: Date.now(),
              title: title,
              status: false
            } as TODO);
          });
        }}
      />
      <TodoList
        filter={mainState.filter}
        rows={mainState.tasks}
        onChangeStatusTask={(id, status) => {
          updateMainState((draftState: MAINSTATE) => {
            draftState.tasks.find(task => task.id === id).status = status;
          });
        }}
        onDeleteTask={id => {
          updateMainState((draftState: MAINSTATE) => {
            draftState.tasks = draftState.tasks.filter(todo => todo.id !== id);
          });
        }}
      />
      <FilterTask
        filter={mainState.filter}
        rows={mainState.tasks}
        onActive={() => {
          updateMainState((draftState: MAINSTATE) => {
            draftState.filter = draftState.filter = E_FILTERTASK.Active;
          });
        }}
        onCompleted={() => {
          updateMainState((draftState: MAINSTATE) => {
            draftState.filter = draftState.filter = E_FILTERTASK.Completed;
          });
        }}
        onAll={() => {
          updateMainState((draftState: MAINSTATE) => {
            draftState.filter = draftState.filter = E_FILTERTASK.All;
          });
        }}
      />
    </>
  );
}
