import React from "react";
import "./Cart.css";
import { authActions } from "../store/auth-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(authActions.logout());
  };
  // const quantity = 5;
  const quantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <div className="w-[300px] flex items-center  ">
      <button onClick={handleLogout} className="btn rounded-[80px]">
        log out
      </button>
      <div className=" cartIcon w-full ml-2">
        <h3 className="">Cart: {quantity} Items</h3>
      </div>
    </div>
  );
};

export default Cart;
