import React, { useState, useReducer } from "react";
import Cart from "./components/Cart/Cart";

import Headers from "./components/Layouts/Headers";
import Meals from "./components/Meals/Meals";
import CartContext from "./store/cart-context";

const defaultReducervalues = {
  item: [],
  totalAmount: 0,
};

const handlingUsereducer = (state, action) => {
  if (action.type == "ADD") {
    const updatedAmount =
      state.totalAmount + action.item.price * action.item.amount;
    let existingCartItemIndex = state.item.findIndex(
      (eachItems) => eachItems.id == action.item.id
    );

    let existingItem = state.item[existingCartItemIndex];

    let updatedItems;
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };

      updatedItems = [...state.item];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.item.concat(action.item);
    }

    return {
      item: updatedItems,
      totalAmount: updatedAmount,
    };
  }

  if (action.type == "REMOVE") {
    let existingCartItemIndex = state.item.findIndex(
      (eachItems) => eachItems.id == action.item
    );
    let existingItem = state.item[existingCartItemIndex];
    const updatedAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      console.log(state.item.id);
      console.log(action.item);
      updatedItems = state.item.filter((item) => item.id !== action.item);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };

      updatedItems = [...state.item];

      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      item: updatedItems,
      totalAmount: updatedAmount,
    };
  }
  return defaultReducervalues;
};

function App() {
  const [cartIsShown, setCartShown] = useState(false);
  const [cartState, setCartState] = useReducer(
    handlingUsereducer,
    defaultReducervalues
  );
  const showCartHandler = () => {
    setCartShown(true);
  };
  const hideCartHandler = () => {
    setCartShown(false);
  };

  const addingItemHandler = (item) => {
    setCartState({ type: "ADD", item: item });
  };

  const removingItemHandler = (id) => {
    setCartState({ type: "REMOVE", item: id });
  };

  return (
    <CartContext.Provider
      value={{
        item: cartState.item,
        totalAmount: cartState.totalAmount,
        additem: addingItemHandler,
        removeItem: removingItemHandler,
      }}
    >
      {cartIsShown && <Cart closeCart={hideCartHandler}></Cart>}
      <Headers showCart={showCartHandler}></Headers>
      <main>
        <Meals></Meals>
      </main>
    </CartContext.Provider>
  );
}

export default App;
