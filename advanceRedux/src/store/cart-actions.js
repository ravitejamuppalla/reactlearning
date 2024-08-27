import { cartActions } from ".";
import { useDispatch } from "react-redux";

export function sendCartData(cartItems) {
  return (dispatch) => {
    dispatch(
      cartActions.notificationFucntion({
        status: "Pending",
        title: "Pending..",
        message: "Sending the Data Request",
      })
    );

    async function sendRequestData() {
      let response = await fetch(
        "https://learningreact-f5a3c-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cartItems),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to Load the request");
      }

      dispatch(
        cartActions.notificationFucntion({
          status: "success",
          title: "Sucess",
          message: "Cart Items Details Sucessfully",
        })
      );
    }

    try {
      sendRequestData();
    } catch (error) {
      dispatch(
        cartActions.notificationFucntion({
          status: "error",
          title: "Failed",
          message: "Failed to add the deatils ",
        })
      );
    }
  };
}

export function getCartDetails() {
  return (dispatch) => {
    dispatch(
      cartActions.notificationFucntion({
        status: "Pending",
        title: "Pending..",
        message: "Sending the Data Request",
      })
    );

    async function sendRequestData() {
      let response = await fetch(
        "https://learningreact-f5a3c-default-rtdb.firebaseio.com/cartItems.json"
      );

      if (!response.ok) {
        throw new Error("Failed to Load the request");
      }

      let responsedata = await response.json();
      console.log(responsedata);
      dispatch(cartActions.responseData(responsedata));
    }

    try {
      sendRequestData();
    } catch (error) {
      dispatch(
        cartActions.notificationFucntion({
          status: "error",
          title: "Failed",
          message: "Failed to add the deatils ",
        })
      );
    }
  };
}
