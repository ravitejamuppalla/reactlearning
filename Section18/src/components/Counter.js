import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store";

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showcounter);

  const onIncrementHandler = () => {
    dispatch(counterActions.increase(1));
  };

  const onDecrementHandler = () => {
    dispatch(counterActions.decrease(1));
  };
  const onIncrementBy10Handler = () => {
    dispatch(counterActions.increase(10));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}

      <button onClick={onIncrementHandler}>Increment</button>
      <button onClick={onIncrementBy10Handler}>IncrementBy10</button>
      <button onClick={onDecrementHandler}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
