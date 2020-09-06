import React, { useContext } from "react";
import { CounterContext } from "../App";
const ComponentB = () => {
  const counterContext = useContext(CounterContext);
  console.log(counterContext);
  return (
    <div>
      ComponentB
      <button
        onClick={() =>
          counterContext.countDispatch({ type: "increment", payload: 2 })
        }
      >
        Increment
      </button>
      <button
        onClick={() =>
          counterContext.countDispatch({ type: "decrement", payload: 2 })
        }
      >
        Decrement
      </button>
      <button onClick={() => counterContext.countDispatch({ type: "reset" })}>
        Reset
      </button>
    </div>
  );
};

export default ComponentB;
