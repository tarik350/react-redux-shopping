import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";
function App() {
  const cart = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cartList = useSelector((state) => state.cart.itemList);

  useEffect(() => {
    fetch(
      "https://react-redux-d0f95-default-rtdb.firebaseio.com/cartItems.json",
      {
        method: "PUT",
        body: JSON.stringify(cart),
      }
    );
  }, [cart]);

  console.log(cartList);
  console.log(isLoggedIn);
  return <div className="App">{!isLoggedIn ? <Auth /> : <Layout />}</div>;
}

export default App;
