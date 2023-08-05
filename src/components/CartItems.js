import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const cartList = useSelector((state) => state.cart.itemList);
  return (
    <div className="cart-container h-full">
      <h2>Your Cart</h2>
      <ul>
        {cartList.map((item) => {
          return (
            <li>
              <CartItem
                id={item.id}
                price={item.price}
                name={item.className}
                quantity={item.quantity}
                total={item.totalPrice}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CartItems;
