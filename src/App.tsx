import React, { useReducer } from "react";
import ComponentA from "./components/ComponentA";
import "./styles.css";

const initialState = {
  firstCounter: 0
};
export const CounterContext = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      console.log("inc");
      return { ...state, firstCounter: state.firstCounter + action.payload };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};
export default function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="App">
        <p>{count.firstCounter}</p>
        Component
        <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        <ComponentA />
      </div>
    </CounterContext.Provider>
  );
}
