import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";

/// i have to read alot about redux
/// i have to read alot about hooks
/// i have to make alots of products

const Layout = () => {
  const showItems = useSelector((state) => state.cart.showCart);
  const cartList = useSelector((state) => state.cart.itemList);

  //it is this much easy to make an e-commerce site : it is really amazing
  console.log(`show items from layout: ${showItems}`);
  let total = 0;

  cartList.forEach((item) => {
    total += item.totalPrice;
  });

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        {showItems ? <CartItems /> : <div></div>}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
