const redux = require("redux");

const counterFucntion = (state = { counter: 100 }, action) => {
  //   console.log("Repeating values");
  //   console.log(state.counter);
  //   console.log(action);
  if (action.type === "Increment") {
    return {
      counter: state.counter + 1,
    };
  }
  return state;
};

const store = redux.createStore(counterFucntion);
console.log(store.getState());
const readingtheUpdatedfuntion = () => {
  const currentvalue = store.getState();
  console.log(currentvalue);
  return currentvalue;
};

// store.subscribe(readingtheUpdatedfuntion);

store.dispatch({ type: "Increment" });
store.dispatch({ type: "Increment" });
store.dispatch({ type: "Increment" });
store.dispatch({ type: "Increment" });
