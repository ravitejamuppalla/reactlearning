import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { uiActions } from "./store/ui-slice";
import Notification from "./components/UI/Notification";

let initalValue = true;
function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    const sendingData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...!",
          message: "Sending cart Data!",
        })
      );
      let responseData = await fetch(
        "https://learningreact-f5a3c-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!responseData.ok) {
        throw new Error("Something went wrong");
      }
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Successfully Added to the cart",
        })
      );
    };
    if (initalValue) {
      initalValue = false;
      return;
    }

    sendingData().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: error.message,
        })
      );
    });
  }, [cart]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        ></Notification>
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
