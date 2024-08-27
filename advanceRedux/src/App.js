import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import Notification from "./components/UI/Notification";
import storeCart from "./store";
import { cartActions } from "./store";
import { sendCartData } from "./store/cart-actions";
import { getCartDetails } from "./store/cart-actions";

let intialState = true;
function App() {
  let toggleCart = useSelector((value) => value.cartItem.toggleCart);
  let cartItems = useSelector((data) => data.cartItem.items);

  let notificationData = useSelector((data) => data.cartItem.notification);
  let changedData = useSelector((data) => data.cartItem.changed);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartDetails());
  }, []);

  useEffect(() => {
    if (intialState) {
      intialState = false;
      return;
    }
    console.log(changedData);
    if (changedData) dispatch(sendCartData(cartItems));
  }, [cartItems, dispatch]);

  return (
    <Fragment>
      {notificationData && (
        <Notification
          status={notificationData.status}
          title={notificationData.title}
          message={notificationData.message}
        ></Notification>
      )}
      <Layout>
        {toggleCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
