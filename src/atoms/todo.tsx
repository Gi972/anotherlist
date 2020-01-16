import * as React from "react";
import { useState } from "react";
import { TODO, ON_TODO } from "../types";

export function Todo({
  id,
  title,
  status,
  onDeleteTask,
  onChangeStatusTask
}: TODO & ON_TODO) {
  const [checked, updateStatus] = useState(status);

  const deleteTask = () => {
    onDeleteTask(id);
  };

  const changeStatus = (e: { target: { checked: boolean } }) => {
    updateStatus(e.target.checked);
    onChangeStatusTask(id, e.target.checked);
  };

  return (
    <li>
      {id} {title}
      <input type="checkbox" checked={checked} onChange={changeStatus} />
      <button type="button" onClick={deleteTask}>
        X
      </button>
    </li>
  );
}
