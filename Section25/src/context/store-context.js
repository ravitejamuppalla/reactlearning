import React, { createContext } from "react";
import { useState } from "react";

const ProductContext = createContext({
  products: [],
  isFavorite: (id) => {},
});

export const ProductContextProvider = (props) => {
  const [productDetails, setProductDeatils] = useState({
    products: [
      {
        id: "p1",
        title: "Red Scarf",
        description: "A pretty red scarf.",
        isFavorite: false,
      },
      {
        id: "p2",
        title: "Blue T-Shirt",
        description: "A pretty blue t-shirt.",
        isFavorite: false,
      },
      {
        id: "p3",
        title: "Green Trousers",
        description: "A pair of lightly green trousers.",
        isFavorite: false,
      },
      {
        id: "p4",
        title: "Orange Hat",
        description: "Street style! An orange hat.",
        isFavorite: false,
      },
    ],
  });

  function isFavrateHandler(id) {
    setProductDeatils((previousState) => {
      console.log(previousState);
      const prodIndex = previousState.products.findIndex((p) => p.id === id);
      const newFavStatus = !previousState.products[prodIndex].isFavorite;
      const updatedProducts = [...previousState.products];
      updatedProducts[prodIndex] = {
        ...previousState.products[prodIndex],
        isFavorite: newFavStatus,
      };
      return {
        ...previousState,
        products: updatedProducts,
      };
    });
  }
  return (
    <ProductContext.Provider
      value={{ products: productDetails, isFavorite: isFavrateHandler }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
