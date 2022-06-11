import React from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { increase, decrease, reset } from "../redux/actions/counterActions";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Counter with Redux</h2>
      <h1>{counter}</h1>
      <div>
        <button onClick={() => dispatch(increase())}>Increase</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(decrease())}>Decrease</button>
      </div>
    </div>
  );
};

export default Counter;
