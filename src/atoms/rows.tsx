import * as React from "react";

type TRow = { title: string; status: boolean };

export function Row({ title, status }: TRow) {
  return (
    <li>
      <div> {title} </div>
      <input type="checkbox" checked={status} />
    </li>
  );
}
