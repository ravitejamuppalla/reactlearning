import React from "react";
import mealsImage from "../../assets/meals.jpg";
import cssClasses from "./Header.module.css";
import HeaderCart from "./HeaderCart";
function Header(props) {
  return (
    <React.Fragment>
      <header className={cssClasses.header}>
        <h1>Ravi Meals</h1>
        <HeaderCart cartOpen={props.openCartData}></HeaderCart>
      </header>
      <div className={cssClasses["main-image"]}>
        <img src={mealsImage} alt="BackgroundImage"></img>
      </div>
    </React.Fragment>
  );
}

export default Header;
