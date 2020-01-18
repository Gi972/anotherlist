import produce from "immer";
import { useState, useCallback } from "react";

export function useImmerTimeline(initialState) {
  const [val, updateValue] = useState(initialState);
  const [history, updateHistory] = useState([]);

  return [
    val,
    useCallback(
      updater => {
        console.log("add", history);

        if (history.length > 5) {
          history.shift();
        }
        history.push(val);
        updateValue(produce(updater));
        updateHistory(history);
      },
      [val, history]
    ),
    history,
    useCallback(() => {
      updateValue(
        produce(val, draft => {
          console.log("remv", { ...history });

          if (history.length !== 0) {
            draft = history[history.length - 1];
            history.pop();
            updateHistory(history);
          }
          return draft;
        })
      );
    }, [val, history])
  ];
}
