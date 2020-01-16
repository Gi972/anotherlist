import * as React from "react";
import { TODO } from "../types";

export function Todo({ id, title, status }: TODO) {
  return (
    <li>
      {id} {title}
      <input type="checkbox" checked={status} />
    </li>
  );
}
