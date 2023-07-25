import React from "react";
import mealseImage from "../../assets/meals.jpg";
import cssClasses from "./Header.module.css";
import HeaderCart from "./HeaderCart";

function Headers(props) {
  return (
    <React.Fragment>
      <header className={cssClasses.header}>
        <h1>RTF Foods</h1>
        <HeaderCart isShowCartClicked={props.showCart}></HeaderCart>
      </header>
      <div className={cssClasses["main-image"]}>
        <img src={mealseImage} alt="Food Image on header"></img>
      </div>
    </React.Fragment>
  );
}

export default Headers;
