import React, { useReducer } from "react";

const cartMeals = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (item) => {},
  openCart: false,
});

const intialValues = { items: [], totalAmount: 0 };
const reducerContext = (state, action) => {
  if (action.type == "ADD") {
    let updatedTotalAmount =
      state.totalAmount + action.items.price * action.items.amount;
    let findtheindexofduplicatevalue = state.items.findIndex((values) => {
      return values.id === action.items.id;
    });
    const duplicatevalues = state.items[findtheindexofduplicatevalue];
    let updatedItems;
    if (duplicatevalues) {
      const updatedItem = {
        ...duplicatevalues,
        amount: action.items.amount + duplicatevalues.amount,
      };
      console.log(updatedItem);
      updatedItems = [...state.items];
      updatedItems[findtheindexofduplicatevalue] = updatedItem;
      console.log(updatedItems);
    } else {
      updatedItems = state.items.concat(action.items);
    }
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  let updatedItems;
  if (action.type == "REMOVE") {
    let updatedTotalAmount = state.totalAmount - action.items.price;
    let findtheindexofduplicatevalue = state.items.findIndex((values) => {
      return values.id === action.items.id;
    });
    const duplicatevalues = state.items[findtheindexofduplicatevalue];
    if (duplicatevalues.amount == 1) {
      updatedItems = state.items.filter((values) => {
        return values.id !== action.items.id;
      });
    } else {
      let updatedItem = {
        ...duplicatevalues,
        amount: duplicatevalues.amount - action.items.amount,
      };
      updatedItems = [...state.items];
      updatedItems[findtheindexofduplicatevalue] = updatedItem;
    }

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  return intialValues;
};

export const CartMealsProvide = (props) => {
  const [stateRender, setStateRender] = useReducer(
    reducerContext,
    intialValues
  );
  const addItemHandler = (values) => {
    setStateRender({ type: "ADD", items: values });
  };
  const removeItemHandler = (values) => {
    setStateRender({ type: "REMOVE", items: values });
  };
  return (
    <cartMeals.Provider
      value={{
        items: stateRender.items,
        totalAmount: stateRender.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
      }}
    >
      {props.children}
    </cartMeals.Provider>
  );
};

export default cartMeals;
