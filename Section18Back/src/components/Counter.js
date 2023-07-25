import classes from "./Counter.module.css";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CounterActions } from "../store/index";

const Counter = () => {
  const counterValue = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();
  let emnteredvalue = useRef();

  function incrementHandler() {
    // dispatch({ type: "Increment" });
    dispatch(CounterActions.increment());
  }

  function decrementHandler() {
    // dispatch({ type: "Decrement" });
    dispatch(CounterActions.decrement());
  }
  const toggleCounterHandler = () => {
    // dispatch({ type: "Toggle" });
    dispatch(CounterActions.toggle());
  };

  const IncrementByInput = () => {
    // dispatch({ type: "Increase", value: emnteredvalue.current.value });
    dispatch(CounterActions.increase(emnteredvalue.current.value));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counterValue}</div>}

      <div>
        <button onClick={incrementHandler}>Increment</button>
        <input type="text" ref={emnteredvalue}></input>
        <button onClick={IncrementByInput}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
