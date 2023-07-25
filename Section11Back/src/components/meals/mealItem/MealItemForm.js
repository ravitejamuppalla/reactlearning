import React, { useState, useRef } from "react";
import cssClasses from "./MealItemForm.module.css";
import Input from "../../UI/Input";
function MealItemForm(props) {
  const amountInputRef = useRef();
  const [amountValid, setAmountValid] = useState(true);
  const onSubmitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;

    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountValid(false);
      return;
    }
    props.addamounttoCart(enteredAmountNumber);
  };

  return (
    <form className={cssClasses.form} onSubmit={onSubmitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "Amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      ></Input>
      <button>+Add</button>

      {!amountValid && <p>Please Entered Valid Amount</p>}
    </form>
  );
}

export default MealItemForm;
