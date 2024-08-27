import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterAction } from "../store/counterStore";

const Counter = () => {
  let dispatch = useDispatch();
  let counter = useSelector((state) => state.counter.counter);

  let showCOunter = useSelector((state) => {
    return state.counter.showcounter;
  });

  function incrementHandler(params) {
    dispatch(counterAction.increment());
    // dispatch({ type: "Increment" });
  }
  function decrementHandler(params) {
    dispatch(counterAction.decrement());
    // dispatch({ type: "Decrement" });
  }
  function incrementHandlerByPalyload(params) {
    dispatch(counterAction.increaseCounter(10));
    // dispatch({ type: "IncrementByamount", amount: 5 });
  }
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter());
    // dispatch({ type: "toggleCounter" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCOunter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementHandlerByPalyload}>Increment By 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
