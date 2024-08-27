import { createSlice, configureStore, current } from "@reduxjs/toolkit";

let intialValuesItems = {
  items: [],
  toggleCart: false,
  notification: null,
  changed: false,
};
let cartSlice = createSlice({
  name: "cart",
  initialState: intialValuesItems,
  reducers: {
    responseData(state, action) {
      state.items = action.payload;
    },
    addItem(state, action) {
      state.changed = true;
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          count: 1,
          name: newItem.title,
        });
      } else {
        existingItem.count++;
      }
    },
    removeItems(state, action) {
      state.changed = true;
      let removeelement = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === removeelement.id
      );

      if (existingItem) {
        if (!(existingItem.count === 1)) existingItem.count--;
        else
          state.items = state.items.filter(
            (values) => !(values.id == removeelement.id)
          );
      }
    },
    toggleCart(state) {
      state.toggleCart = true;
    },

    notificationFucntion(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

let storeCart = configureStore({ reducer: { cartItem: cartSlice.reducer } });

export let cartActions = cartSlice.actions;
export default storeCart;
