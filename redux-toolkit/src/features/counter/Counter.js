import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { increment, decrement, reset, increaseByAmount } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  const handleChange = (e) => {
    setAmount(parseInt(e.target.value));
  };

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(reset())}>reset</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <input type="text" onChange={handleChange} value={amount} />
        <button
          onClick={() => {
            dispatch(increaseByAmount(amount));
            setAmount(0);
          }}
        >
          Add
        </button>
      </div>
    </section>
  );
};

export default Counter;
