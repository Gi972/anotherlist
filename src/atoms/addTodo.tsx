import * as React from "react";
import { useState } from "react";

export function AddTodo({ onSubmit }) {
  const [value, setValue] = useState("");

  const callSubmit = e => {
    e.preventDefault();
    onSubmit(value);
    setValue("");
  };

  return (
    <>
      <form onSubmit={callSubmit}>
        <input
          placeholder="add a task"
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button type="submit">add</button>
      </form>
    </>
  );
}
