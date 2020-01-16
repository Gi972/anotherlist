import * as React from "react";
import { useState } from "react";
import { TODO, ON_TODO } from "../types";

export function Todo({ id, title, status, onDeleteTask }: TODO & ON_TODO) {
  const [checked, updateChecked] = useState(status);

  const deleteTask = () => {
    onDeleteTask(id);
  };

  return (
    <li>
      {id} {title}
      <input
        type="checkbox"
        checked={checked}
        onChange={e => updateChecked(e.target.checked)}
      />
      <button type="button" onClick={deleteTask}>
        X
      </button>
    </li>
  );
}
