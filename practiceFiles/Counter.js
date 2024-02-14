import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./CounterSlice";

function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);

  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <span>{counter}</span>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
}

export default Counter;
