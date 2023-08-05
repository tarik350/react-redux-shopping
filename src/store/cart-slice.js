import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "name",
  initialState: {
    itemList: [],
    totalQuantity: 0,
    showCart: false,
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;

      const existItem = state.itemList.find((item) => item.id === newItem.id);

      state.totalQuantity++;
      console.log("successfully added");

      if (existItem) {
        existItem.quantity++;
        existItem.totalPrice += newItem.price;
      } else {
        state.itemList.push({
          id: newItem.id,
          price: newItem.price,
          name: newItem.name,
          image: newItem.image,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.totalQuantity--;

      const existingItem = state.itemList.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        //grap everyting in item list except the one that matches its id with the previded id
        state.itemList = state.itemList.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
      console.log("removed successfully ");
    },
    setShowCart: (state, action) => {
      if (state.showCart === false) {
        state.showCart = true;
      } else {
        state.showCart = false;
      }
      console.log(`show cart: ${state.showCart}`);
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
