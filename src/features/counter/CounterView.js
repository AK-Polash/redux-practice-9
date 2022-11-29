import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./counterSlice";
import "./counterView.css";

const CounterView = () => {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <h2 className="heading"> Count : {count.counter.count} </h2>
      <h3 className="sub__heading"> {count.counter.message} </h3>

      <div className="btns">
        <button className="btn" onClick={() => dispatch(increment(1))}>
          Increment
        </button>
        <button className="btn" onClick={() => dispatch(decrement(1))}>
          Decrement
        </button>
        <button className="btn" onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>
    </>
  );
};

export default CounterView;
