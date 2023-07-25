import { createStore } from "redux";

const initalValues = {
  cartItems: [],
  totalAmount: 0,
  openCart: false,
};
const renderFunction = (state = initalValues, action) => {
  if (action.type == "ADDITEMS") {
    const presentValues = action.value;
    let newTotalAmount =
      state.totalAmount + presentValues.amount * presentValues.price;

    const findIndexOfIteam = state.cartItems.findIndex((values) => {
      return values.id === presentValues.id;
    });
    const duplicateIteams = state.cartItems[findIndexOfIteam];
    let updatedItems;
    let updatedIteams;
    if (duplicateIteams) {
      const newQuanity = presentValues.amount + duplicateIteams.amount;
      updatedItems = {
        ...duplicateIteams,
        amount: newQuanity,
      };
      updatedIteams = [...state.cartItems];
      updatedIteams[findIndexOfIteam] = updatedItems;
    } else {
      updatedIteams = state.cartItems.concat(presentValues);
    }
    return {
      cartItems: updatedIteams,
      totalAmount: newTotalAmount,
      openCart: state.openCart,
    };
  }
  if (action.type === "OPENCART") {
    return {
      cartItems: state.cartItems,
      totalAmount: state.totalAmount,
      openCart: !state.openCart,
    };
  }

  if (action.type == "REMOVEITEMS") {
    const presentValues = action.value;
    let newTotalAmount =
      state.totalAmount - presentValues.amount * presentValues.price;

    const findIndexOfIteam = state.cartItems.findIndex((values) => {
      return values.id === presentValues.id;
    });
    const duplicateIteams = state.cartItems[findIndexOfIteam];
    let updatedItems;
    let updatedIteams;
    if (duplicateIteams.amount > 0) {
      const newQuanity = duplicateIteams.amount - presentValues.amount;
      updatedItems = {
        id: presentValues.id,
        title: presentValues.title,
        description: presentValues.description,
        price: presentValues.price,
        amount: newQuanity,
      };
      updatedIteams = [...state.cartItems];
      updatedIteams[findIndexOfIteam] = updatedItems;
    }
    return {
      cartItems: updatedIteams,
      totalAmount: newTotalAmount,
      openCart: state.openCart,
    };
  }
  return initalValues;
};

const store = createStore(renderFunction);

export default store;
