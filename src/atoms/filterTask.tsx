import * as React from "react";
import { FILTERTASK, ON_FILTERTASK, E_FILTERTASK } from "../types";

export function FilterTask(props: FILTERTASK & ON_FILTERTASK) {
  const { filter, onActive, onAll, onCompleted } = props;

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

  return (
    <>
      <label htmlFor="all">all</label>
      <input
        type="radio"
        name="choiceFilters"
        value={E_FILTERTASK.All}
        id="all"
        onChange={switchFilter}
        checked={filter === E_FILTERTASK.All}
      />
      <label htmlFor="active">active</label>
      <input
        type="radio"
        name="choiceFilters"
        value={E_FILTERTASK.Active}
        id="active"
        onChange={switchFilter}
        checked={filter === E_FILTERTASK.Active}
      />
      <label htmlFor="completed">completed</label>
      <input
        type="radio"
        name="choiceFilters"
        value={E_FILTERTASK.Completed}
        id="completed"
        onChange={switchFilter}
        checked={filter === E_FILTERTASK.Completed}
      />
    </>
  );
}
