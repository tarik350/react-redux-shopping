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
      console.log("remove from cart ");
    },
    setShowCart: (state, action) => {
      console.log("add to cart");
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
