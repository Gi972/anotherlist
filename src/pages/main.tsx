import * as React from "react";
import { TodoList } from "../atoms/taskList";
import { AddTodo } from "../atoms/addATask";
import { FilterTask } from "../atoms/filterTask";
import { TODO, MAINSTATE, E_FILTERTASK } from "../types";
//import { useImmer } from "use-immer";
import { useImmerTimeline } from "../utils/hooksExtensions";
import { of } from "rxjs";

export function Main({ data }) {
  // const [mainState, updateMainState] = useImmer({
  //   tasks: data,
  //   filter: E_FILTERTASK.All
  // } as MAINSTATE);

  const [mainState, updateMainState, history, cancel] = useImmerTimeline({
    tasks: data,
    filter: E_FILTERTASK.All
  } as MAINSTATE);

  of(mainState).subscribe(data => {
    console.log("sub", data);
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
          return "toto";
        }}
      />
      <TodoList
        filter={mainState.filter}
        rows={mainState.tasks}
        onEditTask={(id, value) => {
          updateMainState((draftState: MAINSTATE) => {
            draftState.tasks.find(task => task.id === id).title = value;
          });
        }}
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
        history={history}
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
        onUndo={() => {
          cancel();
        }}
      />
    </>
  );
}
