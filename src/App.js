import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";
function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cartList = useSelector((state) => state.cart.itemList);
  console.log(cartList);
  console.log(isLoggedIn);
  return <div className="App">{!isLoggedIn ? <Auth /> : <Layout />}</div>;
}

export default App;
