import React, { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";

function App() {
  const opencart = useSelector((state) => state.openCart);
  const cartItems = useSelector((state) => state.cartItems);
  useEffect(() => {
    fetch("https://learningreact-f5a3c-default-rtdb.firebaseio.com/cart.json", {
      method: "PUT",
      body: JSON.stringify(cartItems),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, [cartItems]);
  return (
    <Layout>
      {opencart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
