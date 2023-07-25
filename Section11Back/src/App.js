import React, { useState } from "react";
import Header from "./components/layout/Header";
import MealsOnDashboard from "./components/meals/MealsOnDashboard";
import { CartMealsProvide } from "./components/store/cart-meals";
import Cart from "./components/cart/Cart";
function App() {
  const [openCart, setCartOpen] = useState(false);
  function openCartHandler() {
    setCartOpen(true);
  }
  function closeCartHandler() {
    setCartOpen(false);
  }
  return (
    <CartMealsProvide>
      <Header openCartData={openCartHandler}></Header>
      <MealsOnDashboard></MealsOnDashboard>
      {openCart && <Cart openCartData={closeCartHandler}></Cart>}
    </CartMealsProvide>
  );
}

export default App;
